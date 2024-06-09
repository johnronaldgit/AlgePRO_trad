import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import 'tailwindcss/tailwind.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkblue">
      <div className="text-center">
        <img src="/logo.png" alt="AlgePRO Logo" className="mx-auto mb-4 w-80 h-800" />
        <h1 className="text-5xl font-bold text-white mb-2">Learn Algebra with AlgePRO!</h1>
        <p className="text-white text-lg mb-8">Your Algebra Tutor!</p>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        />
        <button type="submit" className="w-full bg-yellow-500 text-black py-2 rounded-md hover:bg-yellow-600">
          Sign Up
        </button>
      </form>
      <p className="text-white mt-4">
        Already have an account? <Link to="/login" className="text-yellow-500">Login Here</Link>
      </p>
      <footer className="absolute bottom-0 w-full text-center text-gray-400 py-4">
        © 2024 AlgePRO
      </footer>
    </div>
  );
}

export default Register;
