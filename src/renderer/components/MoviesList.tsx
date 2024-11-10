import React from "react";
import Banner from '@components/Banner';
import MovieGrid from '@components/MovieGrid';
import Navbar from '@components/Navbar';

const MoviesList: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-16"> {/* Adds padding for fixed navbar */}
        <Banner />
        <MovieGrid />
      </main>
    </div>
  )
}

export default MoviesList;