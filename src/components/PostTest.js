import React, { useState, useEffect } from 'react';
import MathJax from 'react-mathjax2';
import { db, auth } from '../firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate, useOutletContext } from 'react-router-dom';
import postQuestions from '../postQuestions'; // Import post-test questions from the separate file

function PostTest({ lessonNumber }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submittedAnswers, setSubmittedAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [hasCompletedPostTest, setHasCompletedPostTest] = useState(false);
  const [completedTestData, setCompletedTestData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [didPass, setDidPass] = useState(null); // Updated state for passing status
  const [saving, setSaving] = useState(false); // Loading state for saving results

  const navigate = useNavigate();
  const { setLoading, fetchUnlockedLessons } = useOutletContext(); // Get setLoading and fetchUnlockedLessons from context

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userEmail = user.email;
        const lesson = `lesson${lessonNumber}`;
        const postTestDocRef = doc(db, 'users', userEmail, 'scores', lesson);

        const postTestDoc = await getDoc(postTestDocRef);
        if (postTestDoc.exists() && postTestDoc.data().PostTestScores) {
          const data = postTestDoc.data();
          setHasCompletedPostTest(true);
          setCompletedTestData(data.PostTestScores);
          setDidPass(data.didPass);
          if (!data.didPass) {
            setIsFinished(true); // Set isFinished to true if the user failed the test
          }
          // Set correct and incorrect counts from fetched data
          setCorrectCount(data.PostTestScores.correctCount);
          setIncorrectCount(data.PostTestScores.incorrectCount);
        } else {
          setHasCompletedPostTest(false);
          setCompletedTestData(null);
        }
      }
      setIsLoading(false);
    };

    // Reset state when lessonNumber changes
    setIsLoading(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSubmittedAnswers([]);
    setIsFinished(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setIsSubmitEnabled(false);
    setIsSubmitted(false);
    setShowConfirmation(true);
    setDidPass(null);
    fetchData();
  }, [lessonNumber]);

  const lessonQuestions = postQuestions[`lesson${lessonNumber}`];

  const handleAnswerSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = option;
    setAnswers(newAnswers);
    setIsSubmitEnabled(true);
  };

  const handleSubmitAnswer = () => {
    const newSubmittedAnswers = [...submittedAnswers];
    newSubmittedAnswers[currentQuestionIndex] = {
      answer: answers[currentQuestionIndex],
      isCorrect: answers[currentQuestionIndex]?.trim() === lessonQuestions[currentQuestionIndex].correctAnswer.trim()
    };
    setSubmittedAnswers(newSubmittedAnswers);
    setIsSubmitted(true);
    calculateResults(newSubmittedAnswers);
  };

  const handleNextQuestion = () => {
    setIsSubmitted(false);
    setIsSubmitEnabled(false);
    if (currentQuestionIndex < lessonQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Check if user passed or failed the test
      const passed = correctCount >= Math.ceil(lessonQuestions.length * 0.7);
      setDidPass(passed);
      saveScore(passed);
      setIsFinished(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsSubmitted(submittedAnswers[currentQuestionIndex - 1] !== undefined);
      setIsSubmitEnabled(answers[currentQuestionIndex - 1] !== undefined);
    }
  };

  const calculateResults = (submittedAnswers) => {
    let correct = 0;
    let incorrect = 0;
    submittedAnswers.forEach((answer) => {
      if (answer.isCorrect) {
        correct++;
      } else {
        incorrect++;
      }
    });
    setCorrectCount(correct);
    setIncorrectCount(incorrect);
  };

  const determineKnowledgeLevel = (correctCount) => {
    if (correctCount >= 0 && correctCount <= 3) {
      return 'Beginner';
    } else if (correctCount >= 4 && correctCount <= 7) {
      return 'Intermediate';
    } else if (correctCount >= 8 && correctCount <= 10) {
      return 'Advanced';
    }
  };

  const saveScore = async (passed) => {
    const user = auth.currentUser;
    if (user) {
      const userEmail = user.email;
      const lesson = `lesson${lessonNumber}`;
      const scoresRef = doc(db, 'users', userEmail, 'scores', lesson);

      // Determine knowledge level
      const knowledgeLevel = determineKnowledgeLevel(correctCount);

      try {
        setSaving(true);
        await setDoc(scoresRef, {
          PostTestScores: {
            correctCount,
            incorrectCount,
            submittedAnswers
          },
          knowledgeLevel,
          didPass: passed // Save pass/fail status
        }, { merge: true });

        console.log('Post-test score saved successfully');

        // Unlock the next lesson if passed
        if (passed) {
          const userDocRef = doc(db, 'users', userEmail);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            const unlockedLessons = userData.unlockedLessons || [1];
            const nextLessonNumber = parseInt(lessonNumber) + 1;
            if (!unlockedLessons.includes(nextLessonNumber)) {
              unlockedLessons.push(nextLessonNumber);
              await setDoc(userDocRef, { unlockedLessons }, { merge: true });
            }
          }
        }

        // Trigger loading state and fetch unlocked lessons after saving score
        setLoading(true);
        await fetchUnlockedLessons(userEmail);
        setLoading(false);
      } catch (error) {
        console.error('Error saving post-test score:', error);
      } finally {
        setSaving(false);
        setHasCompletedPostTest(true);
        setCompletedTestData({
          correctCount,
          incorrectCount,
          submittedAnswers
        });
      }
    }
  };

  const handleRetakeTest = () => {
    setDidPass(null); // Reset pass status
    setIsFinished(false); // Allow retaking the post-test
    setCurrentQuestionIndex(0); // Restart the test
    setShowConfirmation(true); // Show confirmation again before retaking the test
    setAnswers([]); // Reset answers
    setSubmittedAnswers([]); // Reset submitted answers
  };

  const renderQuestion = () => {
    const question = lessonQuestions[currentQuestionIndex];
    const isCorrect = isSubmitted && answers[currentQuestionIndex]?.trim() === question.correctAnswer.trim();

    return (
      <MathJax.Context input='tex'>
        <div>
          <h2 className="text-2xl font-bold">
            <MathJax.Text text={question.question} />
          </h2>
          <ul className="mt-4">
            {question.options.map((option, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => handleAnswerSelect(option)}
                  className={`block w-full px-4 py-2 text-left border rounded-md ${
                    answers[currentQuestionIndex] === option ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  }`}
                  disabled={isSubmitted}
                >
                  <MathJax.Text text={option} />
                </button>
              </li>
            ))}
          </ul>
          {isSubmitted && (
            <div className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
              {isCorrect ? 'Correct!' : `Incorrect! The correct answer is `}
              <MathJax.Text text={question.correctAnswer} />
            </div>
          )}
        </div>
      </MathJax.Context>
    );
  };

  const renderResults = (resultsData) => {
    if (!resultsData) return null;

    const { correctCount, incorrectCount, submittedAnswers } = resultsData;

    return (
      <MathJax.Context input='tex'>
        <div>
          <h2 className="text-2xl font-bold">Test Completed</h2>
          <p className="mt-4">Total Score: {correctCount} out of 10</p>
          <p className="mt-2">Correct Answers: {correctCount}</p>
          <p className="mt-2">Incorrect Answers: {incorrectCount}</p>
          <div className="mt-6">
            <h3 className="text-xl font-bold">Review Your Answers</h3>
            <ul className="mt-4">
              {submittedAnswers.map((answer, index) => (
                <li key={index} className="mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">{index + 1}.</span>
                    <MathJax.Text text={lessonQuestions[index].question} />
                  </div>
                  <div className={`mt-2 p-2 rounded-md ${answer.isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    Your answer: <MathJax.Text text={answer.answer} /> - {answer.isCorrect ? 'Correct' : `Incorrect, the correct answer is `}
                    <MathJax.Text text={lessonQuestions[index].correctAnswer} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MathJax.Context>
    );
  };

  if (isLoading || saving) {
    return (
      <div className="bg-blue-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">{saving ? 'Saving Results...' : 'Loading...'}</h2>
      </div>
    );
  }

  if (isFinished && didPass === false) {
    return (
      <div className="bg-red-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Post-test Not Passed</h2>
        <p className="mt-4">You did not pass the post-test for Lesson {lessonNumber}.</p>
        <p className="mt-2">Total Score: {correctCount} out of 10</p>
        <p className="mt-2">You need to score at least 7 out of 10 to pass.</p>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => navigate(`/lesson/${lessonNumber}/subtopic/1`)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Review Lesson
          </button>
          <button
            onClick={() => navigate(`/lesson/${lessonNumber}/practice`)}
            className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600"
          >
            Practice Questions
          </button>
          <button
            onClick={handleRetakeTest}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Take Post-Test Again
          </button>
        </div>
      </div>
    );
  }

  if (hasCompletedPostTest && didPass) {
    return (
      <div className="bg-blue-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Post-test Already Completed</h2>
        <p className="mt-4">You have already completed the post-test for Lesson {lessonNumber}.</p>
        {renderResults(completedTestData)}
        <button
          onClick={() => navigate('/dashboard')}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  if (!lessonQuestions) {
    return <p>No questions available for this lesson.</p>;
  }

  if (showConfirmation) {
    return (
      <div className="bg-blue-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Post-test Confirmation</h2>
        <p className="mt-4">Do you want to take the post-test for Lesson {lessonNumber}?</p>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setShowConfirmation(false)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Yes, take the post-test
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            No, go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-darkblue">Lesson {lessonNumber} - Post-test</h1>
      </header>
      <section className="mt-6">
        <div className="bg-blue-200 p-6 rounded-lg shadow-md">
          {!isFinished ? (
            <>
              {renderQuestion()}
              <div className="mt-6 flex justify-between">
                <button
                  onClick={handlePreviousQuestion}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </button>
                <button
                  onClick={isSubmitted ? handleNextQuestion : handleSubmitAnswer}
                  className={`px-4 py-2 rounded-md ${isSubmitEnabled ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-red-500 text-white cursor-not-allowed'}`}
                  disabled={!isSubmitEnabled}
                >
                  {isSubmitted ? (currentQuestionIndex < lessonQuestions.length - 1 ? 'Next' : 'Finish') : 'Submit'}
                </button>
              </div>
            </>
          ) : (
            renderResults({ correctCount, incorrectCount, submittedAnswers })
          )}
        </div>
      </section>
    </div>
  );
}

export default PostTest;
