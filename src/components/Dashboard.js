// src/components/Dashboard.js
import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'react-lottie';
import backgroundImage from '../assets/background.png'; // Import the background image
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig'; // Import Firebase config

// Import Lottie animation JSON files
import learningstyleAnimation from '../assets/learningstyle.json';
import nextTopicAnimation from '../assets/nextTopic.json';
import remainingLessonsAnimation from '../assets/remainingLessons.json';

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
  const animationContainerRef = useRef(null);

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
    const fetchLearningStyle = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, 'users', user.email);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            const style = userData['Learning Style'];
            setLearningStyle(style || 'Not determined');
          } else {
            console.error('No such document!');
          }
        }
      } catch (error) {
        console.error('Error fetching learning style:', error);
      }
    };

    fetchLearningStyle();
  }, []);

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
              <button className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 w-full sm:w-auto">Start Learning</button>
              <button className="px-4 py-2 sm:px-6 sm:py-3 bg-transparent border border-yellow-400 text-yellow-400 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 hover:text-black w-full sm:w-auto">Talk to AlgePRO!</button>
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
            <h2 className="text-xl sm:text-2xl font-semibold text-navy-blue mb-4">Next Topic</h2>
            <p className="text-base sm:text-lg text-navy-blue">Next Topic: ABC</p>
          </div>
          <div ref={animationContainerRef} className="bg-white p-6 md:p-10 rounded-lg shadow-md flex flex-col items-center w-full"> {/* Increase padding */}
            <Lottie options={defaultOptions(remainingLessonsAnimation, animationSize.width, animationSize.height)} /> {/* Set responsive animation size */}
            <h2 className="text-xl sm:text-2xl font-semibold text-navy-blue mb-4">Remaining Lessons</h2>
            <p className="text-base sm:text-lg text-navy-blue">21 Lessons</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
