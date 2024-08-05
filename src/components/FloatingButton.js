import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useLocation } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import FloatingWindow from './FloatingWindow'; // Import the FloatingWindow component

const FloatingButton = forwardRef((props, ref) => {
  const [showWindow, setShowWindow] = useState(false);
  const location = useLocation();
  const windowRef = React.useRef();

  const toggleWindow = () => {
    if (!props.disabled) {
      setShowWindow(!showWindow);
    }
  };

  useImperativeHandle(ref, () => ({
    toggleWindow,
    addMessage: (message) => {
      if (windowRef.current) {
        windowRef.current.addMessage(message);
      }
    },
  }));

  // Check if the current path includes "pre-test", "post-test", "login", "register", or is exactly "/"
  const isExcludedPage = location.pathname === '/' || location.pathname.includes('pre-test') || location.pathname.includes('post-test') || location.pathname.includes('login') || location.pathname.includes('register')|| location.pathname.includes('profile')|| location.pathname.includes('about')|| location.pathname.includes('help')|| location.pathname.includes('dashboard')|| location.pathname.includes('lesson');

  // Render the button and window only if not on excluded pages
  if (isExcludedPage) {
    return null;
  }

  return (
    <>
      <button
        className={`fixed bottom-4 right-4 w-14 h-14 bg-[#01002B] rounded-full shadow-lg flex items-center justify-center z-50 ${props.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={toggleWindow}
        disabled={props.disabled}
      >
        <img src="/algeprologo.png" alt="AlgePRO Logo" className="w-10 h-10" />
      </button>
      {showWindow && !props.disabled && <FloatingWindow ref={windowRef} onClose={toggleWindow} />} {/* Render FloatingWindow conditionally */}
    </>
  );
});

export default FloatingButton;
