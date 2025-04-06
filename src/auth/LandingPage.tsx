import React from 'react';
import { useNavigate } from 'react-router-dom';
import { accessElf } from './utils/accessElf';

function LandingPage() {
  const navigate = useNavigate();
  accessElf.track('LandingPage');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to Cairns Games</h1>
        <p className="mt-4 text-lg">Discover amazing games and experiences</p>
        <button
          onClick={() => navigate('/home')}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow"
        >
          Get Started
        </button>
      </div>
      <div className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold">Feature One</h3>
            <p className="mt-2 text-gray-600">Explore our first amazing feature.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold">Feature Two</h3>
            <p className="mt-2 text-gray-600">Discover the second feature we offer.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold">Feature Three</h3>
            <p className="mt-2 text-gray-600">Learn more about our third feature.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
