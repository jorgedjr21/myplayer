// src/renderer/components/MovieDetails/HeaderSection.tsx
import React, { useState } from 'react';

interface HeaderSectionProps {
  title: string;
  likeCount: number;
  availableQualities: { quality: string; size: string, hash: string }[]; // Adjusted for torrent qualities
  onPlay: (hash: string) => void;  // Add an onPlay prop for the play button
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, likeCount, availableQualities, onPlay }) => {
  const [selectedTorrentHash, setSelectedTorrentHash] = useState('');

  const handleQualityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTorrentHash(event.target.value);
  };

  const handlePlayClick = () => {
    if (selectedTorrentHash) {
      onPlay(selectedTorrentHash);
    }
  };
  
  return (
    <div className="w-full space-y-4"> {/* Increased spacing between sections */}
      {/* Movie Title and Likes */}
      <div className="flex justify-between items-start">
        {/* Left Section: Title and Likes */}
        <div>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <div className="flex items-center text-gray-400 text-sm space-x-1 mt-1"> {/* Likes counter with margin on top */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M1 21h4V9H1v12zm22-11h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L15.17 2 7.59 9.59C7.22 9.95 7 10.45 7 11v8c0 .55.22 1.05.59 1.41.37.37.87.59 1.41.59h7c.75 0 1.38-.41 1.73-1.02l3.58-6.49c.09-.18.14-.38.14-.59V11c0-1.1-.9-2-2-2z" />
            </svg>
            <span>{likeCount} Likes</span>
          </div>
        </div>

        {/* Right Section: Quality Select and Play Button */}
        <div className="flex items-center space-x-2"> {/* Reduced spacing between select and button */}
          <select
            value={selectedTorrentHash}
            onChange={handleQualityChange}
            className="p-2 bg-gray-800 text-white rounded"
          >
            <option value="">Choose quality</option>
            {availableQualities.map((quality, index) => (
              <option key={index} value={quality.hash}>
                {quality.quality} ({quality.size})
              </option>
            ))}
          </select>

          <button
            onClick={handlePlayClick}
            disabled={!selectedTorrentHash}
            className={`px-4 py-2 font-semibold rounded shadow-md ${
              selectedTorrentHash ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-500 cursor-not-allowed text-gray-300'
            }`}
          >
            ▶ Play
          </button>
        </div>
      </div>
    </div>
  )
};

export default HeaderSection;