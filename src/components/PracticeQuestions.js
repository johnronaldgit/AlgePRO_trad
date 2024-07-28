import React from 'react';
import { useParams } from 'react-router-dom';

function PracticeQuestions() {
  const { lessonNumber, subtopicIndex } = useParams();

  return (
    <div>
      <h1>Practice Questions for Lesson {lessonNumber}, Subtopic {subtopicIndex}</h1>
      {/* Add your practice questions logic here */}
    </div>
  );
}

export default PracticeQuestions;
