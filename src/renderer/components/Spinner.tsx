// src/renderer/components/Spinner.tsx

import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      {/* Spinner Icon */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
      
      {/* Loading Text */}
      <div className="flex space-x-2 text-white text-lg font-semibold">
        <span className="sr-only">Loading...</span> {/* Accessible "Loading..." text */}
        <span className="animate-bounce">L</span>
        <span className="animate-bounce delay-100">o</span>
        <span className="animate-bounce delay-200">a</span>
        <span className="animate-bounce delay-300">d</span>
        <span className="animate-bounce delay-400">i</span>
        <span className="animate-bounce delay-500">n</span>
        <span className="animate-bounce delay-600">g</span>
        <span className="animate-bounce delay-700">.</span>
        <span className="animate-bounce delay-800">.</span>
        <span className="animate-bounce delay-900">.</span>
      </div>
    </div>
  );
};

export default Spinner;
