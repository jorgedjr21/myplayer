// src/renderer/components/Description.tsx
import React from 'react';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => (
  <p className="movie-description text-gray-200 text-base md:text-lg leading-relaxed bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-md max-w-2xl mx-auto">
    {text}
  </p>
);

export default Description;
