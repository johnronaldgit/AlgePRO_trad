// src/components/PostTest.js
import React, { useState, useEffect } from 'react';
import MathJax from 'react-mathjax2';
import { db, auth } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  useEffect(() => {
    // Reset state when lessonNumber changes
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSubmittedAnswers([]);
    setIsFinished(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setIsSubmitEnabled(false);
    setIsSubmitted(false);
    setShowConfirmation(true);
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
      setIsFinished(true);
      saveScore();
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

  const saveScore = async () => {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      const lesson = `lesson${lessonNumber}`;
      const userDocRef = doc(db, 'users', userId);
      const scoresRef = doc(userDocRef, 'postScores', lesson);

      try {
        await setDoc(scoresRef, {
          correctCount,
          incorrectCount,
          totalQuestions: lessonQuestions.length,
          timestamp: new Date()
        });
        console.log('Score saved successfully');
      } catch (error) {
        console.error('Error saving score:', error);
      }
    }
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

  const renderResults = () => {
    return (
      <MathJax.Context input='tex'>
        <div>
          <h2 className="text-2xl font-bold">Test Completed</h2>
          <p className="mt-4">Total Score: {correctCount} out of {lessonQuestions.length}</p>
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
            renderResults()
          )}
        </div>
      </section>
    </div>
  );
}

export default PostTest;
