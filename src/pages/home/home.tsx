import React from 'react';
import Navigation from '../../application/Navigation';

function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-full bg-white">
      <Navigation />
      <div className="flex flex-col items-center px-4 mt-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="text-gray-600">Welcome to the home page!</p>
      </div>
    </div>
  );
}

export default HomePage;
