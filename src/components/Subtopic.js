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
    "The Product of a Sum and Difference of the Same Two Terms": "/content/lesson3_product_of_sum_and_difference.md",
  },
  "4": {
    "Cube Of Binomials": "/content/lesson4_cube_of_binomials.md",
  },
  "5": {
    "Special Case on the Product of Binomial and Trinomial": "/content/lesson5_special_case_product.md",
  },
  "6": {
    "Factoring Perfect Square Trinomial": "/content/lesson6_perfect_square_trinomial.md",
    "Factoring Difference Of Two Squares": "/content/lesson6_difference_of_two_squares.md",
  },
  "7": {
    "Factoring Sum/Difference Of Two Cubes": "/content/lesson7_sum_difference_of_two_cubes.md",
    "Factoring Quadratic Trinomial": "/content/lesson7_quadratic_trinomial.md",
  },
};

const videoIds = {
  "1": {
    "Special Products": "bFtjG45-Udk", // Replace with actual video IDs
    "Square Of Binomials": "dQw4w9WgXcQ",
  },
  "2": {
    "Square Of Trinomial": "f6yhfmW41wI&t=1s",
  },
  "3": {
    "The Product of a Sum and Difference of the Same Two Terms": "dQw4w9WgXcQ",
  },
  "4": {
    "Cube Of Binomials": "6QQJoDshUt8&t=13s",
  },
  "5": {
    "Special Case on the Product of Binomial and Trinomial": "6xYW7VJ0w2s",
  },
  "6": {
    "Factoring Perfect Square Trinomial": "f6yhfmW41wI",
    "Factoring Difference Of Two Squares": "vvypGuPy6g2A",
  },
  "7": {
    "Factoring Sum/Difference Of Two Cubes": "ADj8sGSjewg",
    "Factoring Quadratic Trinomial": "-4jANGlJRSY",
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
      const normalizedSubtopic = subtopic.toLowerCase().replace(/\s+/g, '');
      const contentKey = Object.keys(contentFiles[lessonNumber]).find(key => 
        key.toLowerCase().replace(/\s+/g, '') === normalizedSubtopic
      );

      if (contentKey) {
        const contentUrl = contentFiles[lessonNumber][contentKey];
        try {
          const response = await fetch(contentUrl);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const text = await response.text();
          setContent(text);
        } catch (error) {
          console.error(`Error fetching content: ${error.message}`);
        }
      } else {
        console.error('Content key not found for subtopic:', subtopic);
      }
    };

    if (selectedOption === 'Reading') {
      loadContent();
    }
  }, [selectedOption, lessonNumber, subtopic]);

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-4 bg-gray-100">
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
      <section className="flex-grow p-6 overflow-y-auto bg-white">
        <div className="max-w-full">
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
