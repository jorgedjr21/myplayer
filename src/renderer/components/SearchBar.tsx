// src/renderer/components/SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    console.log('Search query updated:', input);
    onSearch(input);
  };

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md w-[30rem] max-w-full mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-white">Search Movies</h3>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search for a movie..."
          className="flex-grow p-2 border-none outline-none text-black rounded-l-md" // Adjust the input styling
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
