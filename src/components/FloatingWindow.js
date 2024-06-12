// src/components/FloatingWindow.js
import React, { useState, useRef, useEffect, useCallback } from 'react';
import 'tailwindcss/tailwind.css';

const FloatingWindow = ({ onClose }) => {
  const [dimensions, setDimensions] = useState({ width: 384, height: 500 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState(null);
  const windowRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const startResize = (e, direction) => {
    e.preventDefault();
    setIsResizing(true);
    setResizeDirection(direction);
  };

  const resize = useCallback((e) => {
    if (isResizing) {
      const rect = windowRef.current.getBoundingClientRect();
      const newDimensions = { ...dimensions };

      if (resizeDirection === 'left') {
        const newWidth = rect.right - e.clientX;
        if (newWidth > 100) {
          newDimensions.width = newWidth;
        }
      }
      if (resizeDirection === 'top') {
        const newHeight = rect.bottom - e.clientY;
        if (newHeight > 100) {
          newDimensions.height = newHeight;
        }
      }
      setDimensions(newDimensions);
    }
  }, [isResizing, resizeDirection, dimensions]);

  const stopResize = useCallback(() => {
    setIsResizing(false);
    setResizeDirection(null);
  }, []);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResize);
    } else {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResize);
    }

    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResize);
    };
  }, [isResizing, resize, stopResize]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      const responseMessage = { role: 'assistant', content: data.message };
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { role: 'assistant', content: 'Sorry, something went wrong. Please try again later.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div
      ref={windowRef}
      className="fixed bottom-20 right-4 bg-[#232244] p-4 rounded-lg shadow-lg z-50 flex flex-col"
      style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
    >
      <div className="flex justify-between items-center mb-4">
        <img src="/algepro.png" alt="AlgePRO Logo" className="w-15 h-8" />
        <button onClick={onClose} className="text-red-500">X</button>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center text-white">
            <img src="/algeprologo.png" alt="AlgePRO Logo" className="w-40 h-40 mb-4" />
            <h2 className="text-3xl font-bold mb-2">Hi!</h2>
            <p className="text-lg mb-4">How can I help you today?</p>
          </div>
        )}
        <div className="w-full flex flex-col space-y-2 px-4">
          {messages.map((message, index) => (
            <div key={index} className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white self-end rounded-2xl' : 'bg-gray-300 text-black self-start rounded-2xl'}`}>
              {message.content}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center mt-3 p-3 space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-l-full border-none"
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage} className="p-2 bg-black rounded-r-full text-white">Submit</button>
      </div>
      {/* Resize Handles */}
      <div
        className="absolute top-0 left-0 w-full h-1 cursor-n-resize"
        onMouseDown={(e) => startResize(e, 'top')}
      ></div>
      <div
        className="absolute top-0 left-0 w-1 h-full cursor-w-resize"
        onMouseDown={(e) => startResize(e, 'left')}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-2 h-2 cursor-se-resize"
        onMouseDown={(e) => startResize(e, 'bottom-right')}
      ></div>
    </div>
  );
};

export default FloatingWindow;
