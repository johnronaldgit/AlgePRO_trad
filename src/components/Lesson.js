// src/components/Lesson.js
import React from 'react';

function Lesson({ lessonNumber }) {
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-darkblue">Lesson {lessonNumber}</h1>
      </header>
      <section className="mt-6">
        <div className="bg-blue-200 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Lesson {lessonNumber} Content</h2>
          {/* Add your lesson content here */}
        </div>
      </section>
    </div>
  );
}

export default Lesson;
