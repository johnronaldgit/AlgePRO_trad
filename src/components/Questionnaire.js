import React, { useState, useEffect } from 'react';
import questionnaireData from './questionnaireData';

function Questionnaire({ onComplete }) {
  const [responses, setResponses] = useState(Array(questionnaireData.length).fill(''));
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [learningStyle, setLearningStyle] = useState('');
  const [showIntro, setShowIntro] = useState(true);

  const handleChange = (index, choice) => {
    const newResponses = [...responses];
    newResponses[index] = choice;
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    if (responses.includes('')) {
      setError('Please answer all questions');
      return;
    }

    const count = responses.reduce((acc, response) => {
      acc[response] = (acc[response] || 0) + 1;
      return acc;
    }, {});

    const max = Math.max(count['A'] || 0, count['B'] || 0, count['C'] || 0);
    let style = 'Visual';
    if (max === count['B']) {
      style = 'Audio';
    } else if (max === count['C']) {
      style = 'Reading';
    }
    
    setLearningStyle(style);
    setIsSubmitted(true);
    window.removeEventListener('beforeunload', handleBeforeUnload); // Allow navigation after submission
  };

  const handleConfirmation = () => {
    onComplete(learningStyle);
  };

  const handleStart = () => {
    setShowIntro(false);
  };

  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = ''; // Required for Chrome to show the confirmation dialog
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-2xl max-h-full overflow-y-auto">
        {showIntro ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Welcome to the Learning Style Questionnaire</h2>
            <p className="mb-4">This questionnaire will help us determine your preferred learning style. Please answer all the questions to the best of your ability. Your responses will help tailor the content to suit your learning preferences.</p>
            <button onClick={handleStart} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Start Questionnaire
            </button>
          </>
        ) : !isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Questionnaire</h2>
            {questionnaireData.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="mb-2">{item.question}</p>
                <div className="ml-4"> {/* Added margin-left to the choices */}
                  {item.choices.map((choice, idx) => (
                    <label key={idx} className="block">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={choice[0]} // A, B, or C
                        checked={responses[index] === choice[0]}
                        onChange={() => handleChange(index, choice[0])}
                        className="mr-2"
                      />
                      {choice}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Thank you for answering the questionnaire!</h2>
            <p className="mb-4">Your determined learning style is: <strong>{learningStyle}</strong></p>
            <button onClick={handleConfirmation} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Questionnaire;
