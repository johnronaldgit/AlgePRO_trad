import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import algeprologo from '../assets/algeprologo.png'; // Ensure you have this path correct

const contentFiles = {
  "1": {
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
};

const pdfFiles = {
  "1": {
    "Square Of Binomials": "/pdfs/lesson1_square_of_binomials.pdf",
  },
  "2": {
    "Square Of Trinomial": "/pdfs/lesson2_square_of_trinomial.pdf",
  },
  "3": {
    "The Product of a Sum and Difference of the Same Two Terms": "/pdfs/lesson3_product_of_sum_and_difference.pdf",
  },
  "4": {
    "Cube Of Binomials": "/pdfs/lesson4_cube_of_binomials.pdf",
  },
  "5": {
    "Special Case on the Product of Binomial and Trinomial": "/pdfs/lesson5_special_case_product.pdf",
  },
};

const audioFiles = {
  "1": {
    "Square Of Binomials": "/audio/lesson1_square_of_binomials.mp3",
  },
  "2": {
    "Square Of Trinomial": "/audio/lesson2_square_of_trinomial.mp3",
  },
  "3": {
    "The Product of a Sum and Difference of the Same Two Terms": "/audio/lesson3_product_of_sum_and_difference.mp3",
  },
  "4": {
    "Cube Of Binomials": "/audio/lesson4_cube_of_binomials.mp3",
  },
  "5": {
    "Special Case on the Product of Binomial and Trinomial": "/audio/lesson5_special_case_product.mp3",
  },
};

function Subtopic({ lessonNumber, subtopic }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { subtopicIndex } = useParams();
  const navigate = useNavigate();

  const subtopics = Object.keys(contentFiles[lessonNumber]);
  const currentIndex = subtopics.indexOf(subtopic);
  const nextSubtopic = currentIndex < subtopics.length - 1 ? subtopics[currentIndex + 1] : null;

  useEffect(() => {
    const fetchLearningStyle = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, 'users', user.email);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            const learningStyle = userData['Learning Style'];
            setSelectedOption(learningStyle || 'Reading');
          } else {
            console.error('No such document!');
          }
        }
      } catch (error) {
        console.error('Error fetching learning style:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLearningStyle();
  }, []);

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

  useEffect(() => {
    const updateAudioPlayer = () => {
      const audioElement = document.getElementById('audio-player');
      if (audioElement) {
        audioElement.load();
      }
    };

    if (selectedOption === 'Audio') {
      updateAudioPlayer();
    }
  }, [selectedOption, lessonNumber, subtopic]);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getPdfUrl = (lessonNumber, subtopic) => {
    const normalizedSubtopic = subtopic.toLowerCase().replace(/\s+/g, '');
    const pdfKey = Object.keys(pdfFiles[lessonNumber]).find(key =>
      key.toLowerCase().replace(/\s+/g, '') === normalizedSubtopic
    );
    return pdfKey ? pdfFiles[lessonNumber][pdfKey] : null;
  };

  const getAudioUrl = (lessonNumber, subtopic) => {
    const normalizedSubtopic = subtopic.toLowerCase().replace(/\s+/g, '');
    const audioKey = Object.keys(audioFiles[lessonNumber]).find(key =>
      key.toLowerCase().replace(/\s+/g, '') === normalizedSubtopic
    );
    return audioKey ? audioFiles[lessonNumber][audioKey] : null;
  };

  const handleButtonClick = () => {
    if (lessonNumber === "1" && currentIndex === 0) {
      navigate(`/lesson/1/subtopic/2`);
    } else {
      navigate(`/lesson/${lessonNumber}/post-test`);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="loader"></div> {/* Add your loader animation here */}
          <style>{`
            .loader {
              border: 16px solid #f3f3f3; /* Light grey */
              border-top: 16px solid #3498db; /* Blue */
              border-radius: 50%;
              width: 120px;
              height: 120px;
              animation: spin 2s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : (
        <>
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
                  {getPdfUrl(lessonNumber, subtopic) ? (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                      <Viewer
                        fileUrl={getPdfUrl(lessonNumber, subtopic)}
                        defaultScale={SpecialZoomLevel.PageFit}
                      />
                    </Worker>
                  ) : (
                    <p>PDF not available for this subtopic.</p>
                  )}
                </div>
              )}
              {selectedOption === 'Audio' && (
                <div className="flex flex-col items-center">
                  <img src={algeprologo} alt="AlgePRO Logo" className="mb-4" />
                  <audio controls id="audio-player" className="w-full max-w-lg">
                    <source src={getAudioUrl(lessonNumber, subtopic)} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
          </section>
          <footer className="flex justify-end p-4 bg-gray-100">
            <button
              onClick={handleButtonClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {lessonNumber === "1" && currentIndex === 0 ? "Next Topic" : "Take Post-Test"}
            </button>
          </footer>
        </>
      )}
    </div>
  );
}

export default Subtopic;
