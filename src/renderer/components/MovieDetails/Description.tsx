// src/renderer/components/Description.tsx
import React from 'react';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => (
  <div className="w-full">
    {/* Section Title */}
    <h2 className="text-xl font-semibold text-white mb-2">Description</h2>
    {/* Description Text or Fallback */}
    {text ? (
      <p className="bg-gray-800 text-gray-300 p-4 rounded-md">{text}</p>
    ) : (
      <p className="text-gray-400 italic">No description available</p>
    )}
  </div>
);

export default Description;
