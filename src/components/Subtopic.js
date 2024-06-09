// src/components/Subtopic.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import YouTube from 'react-youtube';
import 'katex/dist/katex.min.css';
import '../index.css'; // Ensure index.css is imported

const contentFiles = {
  "1": {
    "Special Products": "/content/lesson1_special_products.md",
    "Square Of Binomials": "/content/lesson1_square_of_binomials.md",
  },
  "2": {
    "Square Of Trinomial": "/content/lesson2_square_of_trinomial.md",
  },
  "3": {
    "Product Of Sum And Difference": "/content/lesson3_product_of_sum_and_difference.md",
  },
  "4": {
    "Cube Of Binomials": "/content/lesson4_cube_of_binomials.md",
  },
  "5": {
    "Special Case Product": "/content/lesson5_special_case_product.md",
  },
  "6-7": {
    "Factoring Perfect Square Trinomial": "/content/lesson6_7_perfect_square_trinomial.md",
    "Factoring Difference Of Two Squares": "/content/lesson6_7_difference_of_two_squares.md",
  },
  "8-9": {
    "Factoring Sum Difference Of TwoCubes": "/content/lesson8_9_sum_difference_of_two_cubes.md",
    "Factoring Quadratic Trinomial": "/content/lesson8_9_quadratic_trinomial.md",
  },
};

const videoIds = {
  "1": {
    "Special Products": "_nMOgPUUg5Q", // Replace with actual video IDs
    "Square Of Binomials": "dQw4w9WgXcQ",
  },
  "2": {
    "Square Of Trinomial": "dQw4w9WgXcQ",
  },
  "3": {
    "Product Of Sum And Difference": "dQw4w9WgXcQ",
  },
  "4": {
    "Cube Of Binomials": "dQw4w9WgXcQ",
  },
  "5": {
    "Special Case Product": "dQw4w9WgXcQ",
  },
  "6-7": {
    "Factoring Perfect Square Trinomial": "dQw4w9WgXcQ",
    "Factoring Difference Of Two Squares": "dQw4w9WgXcQ",
  },
  "8-9": {
    "Factoring Sum Difference Of Two Cubes": "dQw4w9WgXcQ",
    "Factoring Quadratic Trinomial": "dQw4w9WgXcQ",
  },
};

function Subtopic({ lessonNumber, subtopic }) {
  const [selectedOption, setSelectedOption] = useState('Reading');
  const [content, setContent] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const loadContent = async () => {
      const contentUrl = contentFiles[lessonNumber][subtopic];
      const response = await fetch(contentUrl);
      const text = await response.text();
      setContent(text);
    };

    if (selectedOption === 'Reading') {
      loadContent();
    }
  }, [selectedOption, lessonNumber, subtopic]);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-darkblue">Lesson {lessonNumber} - {subtopic}</h1>
        <div>
          <label htmlFor="learning-style" className="mr-2">Learning Style:</label>
          <select 
            id="learning-style" 
            value={selectedOption} 
            onChange={handleDropdownChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="Reading">Reading</option>
            <option value="Visual">Visual</option>
            <option value="Audio">Audio</option>
          </select>
        </div>
      </header>
      <section className="mt-6">
        <div className="border p-6">
          <h2 className="text-2xl font-bold text-center mb-4">{subtopic}</h2>
          {/* Add content based on selected option */}
          {selectedOption === 'Reading' && (
            <div className="markdown-body">
              <ReactMarkdown
                children={content}
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
              />
            </div>
          )}
          {selectedOption === 'Visual' && (
            <div className="flex justify-center">
              <YouTube videoId={videoIds[lessonNumber][subtopic]} />
            </div>
          )}
          {selectedOption === 'Audio' && (
            <div>
              <p>Audio content for {subtopic}.</p>
              {/* Add audio content here, such as audio clips or instructions */}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Subtopic;
