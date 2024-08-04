import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import backgroundImage from '../assets/background.png'; // Import the background image
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig'; // Import Firebase config

// Import Lottie animation JSON files
import learningstyleAnimation from '../assets/learningstyle.json';
import nextTopicAnimation from '../assets/nextTopic.json';
import remainingLessonsAnimation from '../assets/remainingLessons.json';
import FloatingButton from './FloatingButton'; // Import FloatingButton

// Function to create default options for Lottie animations
const defaultOptions = (animationData, width, height) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
  width,
  height,
});

function Dashboard() {
  const [animationSize, setAnimationSize] = useState({ width: 270, height: 270 });
  const [learningStyle, setLearningStyle] = useState('');
  const [currentTopic, setCurrentTopic] = useState(''); // State for current topic
  const [remainingLessons, setRemainingLessons] = useState(5); // State for remaining lessons
  const totalLessons = 5; // Total number of lessons
  const navigate = useNavigate(); // Use navigate hook for navigation
  const animationContainerRef = useRef(null);
  const floatingButtonRef = useRef(null); // Ref for FloatingButton

  useEffect(() => {
    const handleResize = () => {
      if (animationContainerRef.current) {
        const containerWidth = animationContainerRef.current.offsetWidth;
        const newSize = containerWidth * 0.8; // Adjust the factor as needed
        setAnimationSize({ width: newSize, height: newSize });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, 'users', user.email);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            const style = userData['Learning Style'];
            setLearningStyle(style || 'Not determined');

            // Fetch and set the latest unlocked lesson
            const unlockedLessons = userData.unlockedLessons || [1];
            const latestLesson = Math.max(...unlockedLessons);

            if (latestLesson >= totalLessons + 1) {
              setCurrentTopic('Finished');
              setRemainingLessons('Finished');
            } else {
              setCurrentTopic(`Lesson ${latestLesson}`);
              setRemainingLessons(totalLessons - latestLesson);
            }
          } else {
            console.error('No such document!');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleStartLearning = () => {
    const latestLessonNumber = currentTopic.split(' ')[1]; // Get the lesson number from currentTopic
    if (latestLessonNumber === undefined || latestLessonNumber === 'Finished') {
      alert('All lessons are completed!');
    } else {
      navigate(`/lesson/${latestLessonNumber}/pre-test`); // Navigate to the pre-test of the latest unlocked lesson
    }
  };

  const handleTalkToAlgePRO = () => {
    if (floatingButtonRef.current) {
      floatingButtonRef.current.toggleWindow();
    }
  };

  return (
    <div className="min-h-screen bg-white text-navy-blue flex flex-col items-center overflow-x-hidden">
      <div 
        className="relative w-full text-white flex flex-col items-center justify-center px-4 sm:px-14 py-16" 
        style={{ 
          minHeight: '370px', // Changed from fixed height to minHeight for responsiveness
          backgroundImage: `url(${backgroundImage})`, // Use the imported image
          backgroundSize: 'cover', // Ensure the image covers the entire div
          backgroundPosition: 'center', // Center the image
        }}
      >
        <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
          <header className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Learning Algebra the Easy Way</h1>
            <p className="text-base sm:text-lg mb-6 px-4 sm:px-0">AlgePRO is your personalized intelligent tutoring system for mastering algebra. Dive into lessons, practice problems, and track your progress.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full justify-center">
              <button
                className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 w-full sm:w-auto"
                onClick={handleStartLearning}
              >
                {currentTopic === 'Finished' ? 'All lessons completed' : `Go to ${currentTopic}`}
              </button>
              <button
                className="px-4 py-2 sm:px-6 sm:py-3 bg-transparent border border-yellow-400 text-yellow-400 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 hover:text-black w-full sm:w-auto"
                onClick={handleTalkToAlgePRO}
              >
                Talk to AlgePRO!
              </button>
            </div>
          </header>
        </div>
      </div>
      <section className="w-full max-w-6xl text-center mt-12 mb-8 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Use grid for responsiveness */}
          <div ref={animationContainerRef} className="bg-white p-6 md:p-10 rounded-lg shadow-md flex flex-col items-center w-full"> {/* Increase padding */}
            <Lottie options={defaultOptions(learningstyleAnimation, animationSize.width, animationSize.height)} /> {/* Set responsive animation size */}
            <h2 className="text-xl sm:text-2xl font-semibold text-navy-blue mb-4">Preferred Learning Style</h2>
            <p className="text-2xl sm:text-3xl font-bold text-yellow-500">{learningStyle}</p> {/* Added styling */}
          </div>
          <div ref={animationContainerRef} className="bg-white p-6 md:p-10 rounded-lg shadow-md flex flex-col items-center w-full"> {/* Increase padding */}
            <Lottie options={defaultOptions(nextTopicAnimation, animationSize.width, animationSize.height)} /> {/* Set responsive animation size */}
            <h2 className="text-xl sm:text-2xl font-semibold text-navy-blue mb-4">Current Topic</h2>
            <p className={`text-2xl sm:text-3xl font-bold ${currentTopic === 'Finished' ? 'text-green-500' : 'text-yellow-500'}`}>{currentTopic}</p> {/* Conditional styling */}
          </div>
          <div ref={animationContainerRef} className="bg-white p-6 md:p-10 rounded-lg shadow-md flex flex-col items-center w-full"> {/* Increase padding */}
            <Lottie options={defaultOptions(remainingLessonsAnimation, animationSize.width, animationSize.height)} /> {/* Set responsive animation size */}
            <h2 className="text-xl sm:text-2xl font-semibold text-navy-blue mb-4">Remaining Lessons</h2>
            <p className={`text-2xl sm:text-3xl font-bold ${remainingLessons === 'Finished' ? 'text-green-500' : 'text-yellow-500'}`}>{remainingLessons === 'Finished' ? 'Finished' : `${remainingLessons} Lessons`}</p> {/* Conditional styling */}
          </div>
        </div>
      </section>
      <FloatingButton ref={floatingButtonRef} />
    </div>
  );
}

export default Dashboard;
