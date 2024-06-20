// src/components/Layout.js
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { ChevronDownIcon, ChevronRightIcon, HomeIcon, BookOpenIcon, BoltIcon, DocumentTextIcon } from '@heroicons/react/20/solid';
import 'tailwindcss/tailwind.css';
import Navbar from './Navbar';
import FloatingButton from './FloatingButton';

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
    number: '6',
    subtopics: ['Factoring Perfect Square Trinomial', 'Factoring Difference of Two Squares'],
  },
  {
    number: '7',
    subtopics: ['Factoring Sum/Difference of Two Cubes', 'Factoring Quadratic Trinomial'],
  },
];

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openLesson, setOpenLesson] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    });
  };

  const toggleLesson = (lessonNumber) => {
    setOpenLesson(openLesson === lessonNumber ? null : lessonNumber);
  };

  const isActive = (path) => location.pathname === path;

  const isLessonActive = (lessonNumber) => location.pathname.includes(`/lesson/${lessonNumber.replace(' & ', '-')}`);

  const getLessonPath = (lessonNumber) => lessonNumber.includes('&') ? lessonNumber.replace(' & ', '-') : lessonNumber;

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 pt-16">
        {sidebarVisible && (
          <div className="fixed top-16 bottom-0 bg-darkblue text-white w-64 flex flex-col justify-between overflow-y-auto">
            <nav className="sidebar-content p-4 flex-grow">
              <ul>
                <li className={`mb-4 ${isActive('/dashboard') ? 'bg-[#D7A700] rounded-lg opacity-75 p-2 text-black' : ''}`}>
                  <Link to="/dashboard" className={`flex items-center hover:text-white ${isActive('/dashboard') ? 'text-black' : ''}`}>
                    <HomeIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-lg">Dashboard</span>
                  </Link>
                </li>
                <hr className="border-gray-800 my-2" />
                {lessons.map((lesson, index) => (
                  <li key={index} className="mb-4">
                    <button
                      onClick={() => toggleLesson(lesson.number)}
                      className={`flex items-center w-full text-left hover:text-white ${openLesson === lesson.number || isLessonActive(lesson.number) ? 'bg-[#D7A700] rounded-lg opacity-75 p-2 text-black' : ''}`}
                    >
                      <BookOpenIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="text-lg flex-1">Lesson {lesson.number}</span>
                      {openLesson === lesson.number ? (
                        <ChevronDownIcon className="w-5 h-5 ml-2 flex-shrink-0" />
                      ) : (
                        <ChevronRightIcon className="w-5 h-5 ml-2 flex-shrink-0" />
                      )}
                    </button>
                    {openLesson === lesson.number && (
                      <ul className="ml-4 mt-2">
                        <li className={`mb-2 ${isActive(`/lesson/${getLessonPath(lesson.number)}/pre-test`) ? 'bg-[#D7A700] rounded-lg opacity-75 p-2 text-black' : ''}`}>
                          <Link to={`/lesson/${getLessonPath(lesson.number)}/pre-test`} className={`flex items-center hover:text-white ${isActive(`/lesson/${getLessonPath(lesson.number)}/pre-test`) ? 'text-black' : ''}`}>
                            <BoltIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                            Pre-test
                          </Link>
                        </li>
                        {lesson.subtopics.map((subtopic, subIndex) => (
                          <li key={subIndex} className={`mb-2 ${isActive(`/lesson/${getLessonPath(lesson.number)}/subtopic/${subIndex + 1}`) ? 'bg-[#D7A700] rounded-lg opacity-75 p-2 text-black' : ''}`}>
                            <Link to={`/lesson/${getLessonPath(lesson.number)}/subtopic/${subIndex + 1}`} className={`flex items-center hover:text-white ${isActive(`/lesson/${getLessonPath(lesson.number)}/subtopic/${subIndex + 1}`) ? 'text-black' : ''}`}>
                              <DocumentTextIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                              {subtopic}
                            </Link>
                          </li>
                        ))}
                        <li className={`mb-2 ${isActive(`/lesson/${getLessonPath(lesson.number)}/post-test`) ? 'bg-[#D7A700] rounded-lg opacity-75 p-2 text-black' : ''}`}>
                          <Link to={`/lesson/${getLessonPath(lesson.number)}/post-test`} className={`flex items-center hover:text-white ${isActive(`/lesson/${getLessonPath(lesson.number)}/post-test`) ? 'text-black' : ''}`}>
                            <BoltIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                            Post-test
                          </Link>
                        </li>
                      </ul>
                    )}
                    {index < lessons.length - 1 && <hr className="border-gray-800 my-2" />}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center mb-4">
                <img src="/avatar.png" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="text-sm font-medium">{userEmail}</p>
                  <p className="text-xs text-gray-400">Student</p>
                </div>
              </div>
              <button onClick={handleLogout} className="w-full py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600">
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${sidebarVisible ? 'ml-64' : 'ml-0'}`}>
          <Outlet />
        </div>
      </div>
      <FloatingButton />
    </div>
  );
}

export default Layout;
