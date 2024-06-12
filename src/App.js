import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Lesson from './components/Lesson';
import Subtopic from './components/Subtopic';
import PreTest from './components/PreTest';
import PostTest from './components/PostTest';
import Layout from './components/Layout';
import FloatingButton from './components/FloatingButton'; // Import FloatingButton

const lessons = [
  {
    number: '1',
    subtopics: ['Special Products', 'Square of Binomials'],
  },
  {
    number: '2',
    subtopics: ['Square of Trinomial'],
  },
  {
    number: '3',
    subtopics: ['The Product of a Sum and Difference of the Same Two Terms'],
  },
  {
    number: '4',
    subtopics: ['Cube of Binomials'],
  },
  {
    number: '5',
    subtopics: ['Special Case on the Product of Binomial and Trinomial'],
  },
  {
    number: '6-7',
    subtopics: ['Factoring Perfect Square Trinomial', 'Factoring Difference of Two Squares'],
  },
  {
    number: '8-9',
    subtopics: ['Factoring Sum/Difference of Two Cubes', 'Factoring Quadratic Trinomial'],
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {[...Array(5).keys()].map((lesson) => (
            <Route
              key={lesson}
              path={`/lesson/${lesson + 1}`}
              element={<Lesson lessonNumber={`${lesson + 1}`} />}
            />
          ))}
          <Route path="/lesson/6-7" element={<Lesson lessonNumber="6-7" />} />
          <Route path="/lesson/8-9" element={<Lesson lessonNumber="8-9" />} />
          {lessons.map((lesson, lessonIndex) =>
            lesson.subtopics.map((subtopic, subIndex) => (
              <Route
                key={`${lessonIndex}-${subIndex}`}
                path={`/lesson/${lesson.number}/subtopic/${subIndex + 1}`}
                element={<Subtopic lessonNumber={lesson.number} subtopic={subtopic} />}
              />
            ))
          )}
          {lessons.map((lesson) => (
            <React.Fragment key={`tests-${lesson.number}`}>
              <Route
                key={`pre-${lesson.number}`}
                path={`/lesson/${lesson.number}/pre-test`}
                element={<PreTest lessonNumber={lesson.number} />}
              />
              <Route
                key={`post-${lesson.number}`}
                path={`/lesson/${lesson.number}/post-test`}
                element={<PostTest lessonNumber={lesson.number} />}
              />
            </React.Fragment>
          ))}
        </Route>
      </Routes>
      <FloatingButton /> {/* Include FloatingButton here */}
    </Router>
  );
}

export default App;
