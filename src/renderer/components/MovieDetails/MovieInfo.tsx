// src/renderer/components/MovieInfo.tsx
import React from 'react';
import GenresList from './GenresList';

interface MovieInfoProps {
  rating: number;
  runtime: number;
  year: number;
  genres: string[];
}

const MovieInfo: React.FC<MovieInfoProps> = ({ rating, runtime, year, genres }) => (
  <div className="flex flex-col items-center space-y-2 mb-4">
    {/* Rating, Runtime, and Year */}
    <div className="flex space-x-2 text-sm text-gray-300">
      <span className="px-2 py-1 bg-gray-700 rounded-md">{rating.toFixed(1)} / 10</span>
      <span className="px-2 py-1 bg-gray-700 rounded-md">{runtime} min</span>
      <span className="px-2 py-1 bg-gray-700 rounded-md">{year}</span>
    </div>

    {/* Genres */}
    <div className="flex flex-wrap justify-center space-x-2 mt-2">
      {genres.map((genre, index) => (
        <span
          key={index}
          className="px-2 py-1 text-sm font-semibold text-gray-300 bg-gray-800 rounded-md"
        >
          {genre}
        </span>
      ))}
    </div>
  </div>
);

export default MovieInfo;
