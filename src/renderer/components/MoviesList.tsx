import React, { useState } from "react";
import Banner from '@components/Banner';
import MovieGrid from '@components/MovieGrid';
import Navbar from '@components/Navbar';
import SearchBar from '@components/SearchBar';

const MoviesList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    console.log('MoviesList searchQuery updated:', query);
    setSearchQuery(query); // Update the search query state
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Pass handleSearch to Navbar */}
      <Navbar onSearch={handleSearch} />

      {/* Add padding to the top of the main content */}
      <main className="pt-20"> {/* Adjusted padding for fixed navbar */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-16 bg-cover bg-center rounded-lg space-y-6 md:space-y-0 md:space-x-6"
          style={{
            backgroundImage: 'url("https://via.placeholder.com/1600x600")',
            backgroundColor: '#333',
            minHeight: '60vh',
          }}
        >
          <div className="w-full md:w-3/4 lg:w-3/4">
            <Banner />
          </div>
        </div>
        <MovieGrid searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default MoviesList;
