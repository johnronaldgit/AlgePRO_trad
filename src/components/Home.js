import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkblue">
      <div className="text-center">
        <img src="/logo.png" alt="AlgePRO Logo" className="mx-auto mb-4 w-80 h-80" />
        <h1 className="text-5xl font-bold text-white mb-2">Learn Algebra with AlgePRO!</h1>
        <p className="text-white text-lg mb-8">Your Algebra Tutor!</p>
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-6 py-1 bg-yellow-500 text-black rounded-md hover:bg-blue-600">Log in</button>
          </Link>
          <Link to="/register">
            <button className="px-6 py-1 bg-yellow-500 text-black rounded-md hover:bg-blue-600y">Register</button>
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full text-center text-gray-400 py-4">
        © 2024 AlgePRO
      </footer>
    </div>
  );
}

export default Home;
