// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/20/solid'; // Import the Bars3Icon from heroicons
import 'tailwindcss/tailwind.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-[#01002B] text-white p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50"> {/* Increase z-index */}
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4">
          <Bars3Icon className="w-6 h-6 text-white" />
        </button>
        <Link to="/dashboard">
          <img src="/algepro.png" alt="AlgePRO Logo" className="w-17 h-10" /> {/* Update the logo size and make it a link */}
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/profile" className="hover:text-gray-300">Profile</Link>
        <Link to="/help" className="hover:text-gray-300">Help</Link>
        <Link to="/about" className="hover:text-gray-300">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
