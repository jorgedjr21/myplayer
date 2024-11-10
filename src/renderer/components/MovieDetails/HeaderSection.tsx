// src/renderer/components/MovieDetails/HeaderSection.tsx
import React from 'react';

interface HeaderSectionProps {
  title: string;
  likeCount: number;
  onPlay: () => void;  // Add an onPlay prop for the play button
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, likeCount, onPlay }) => (
  <div className="flex items-center justify-between w-full mb-4">
    {/* Title and Like Count */}
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="flex items-center text-gray-400 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 mr-1"
        >
          <path d="M1 21h4V9H1v12zm22-11h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L15.17 2 7.59 9.59C7.22 9.95 7 10.45 7 11v8c0 .55.22 1.05.59 1.41.37.37.87.59 1.41.59h7c.75 0 1.38-.41 1.73-1.02l3.58-6.49c.09-.18.14-.38.14-.59V11c0-1.1-.9-2-2-2z" />
        </svg>
        <span>{likeCount} Likes</span>
      </div>
    </div>

    {/* Play Button */}
    <button 
      onClick={onPlay}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center ml-4"
      title="Play"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        className="w-5 h-5 mr-2"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
      Play
    </button>
  </div>
);

export default HeaderSection;