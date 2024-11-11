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
    <div className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Search for a movie..."
        className="p-2 rounded-l-md w-full text-black"
      />
      <button
        onClick={handleSearch}
        className="px-4 bg-red-600 text-white rounded-r-md hover:bg-red-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
