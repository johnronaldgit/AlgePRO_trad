import React from 'react';
import videoTutorial from '../assets/tutorial.mp4';

const Help = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">Help</h1>
      
      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">How to Use AlgePRO</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6 text-justify">
          Welcome to the AlgePRO help page! Here, you'll find all the information you need to get started with using our website.
          AlgePRO is designed to help students enhance their algebra skills through interactive learning and problem-solving exercises.
          Our platform provides step-by-step guidance to ensure that each student can follow along and understand the concepts being taught.
          In this video, we will walk you through the key features of AlgePRO, including how to navigate through lessons, access practice questions, 
          and utilize our adaptive learning system to track your progress and identify areas for improvement. Whether you are a student eager to improve your algebra skills or a teacher looking for resources to support your students, 
          this tutorial will provide you with a comprehensive overview of how to effectively use AlgePRO to achieve your learning goals.
        </p>
        
        <div className="flex justify-center">
          <video controls className="w-full max-w-4xl rounded-lg shadow-lg">
            <source src={videoTutorial} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Help;
