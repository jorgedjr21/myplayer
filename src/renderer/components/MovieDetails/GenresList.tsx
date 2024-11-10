// src/renderer/components/MovieDetails/GenresList.tsx
import React from 'react';

interface GenresListProps {
  genres: string[];
}

const GenresList: React.FC<GenresListProps> = ({ genres }) => (
  <div className="flex flex-wrap gap-2 mt-4">
    {genres.map((genre, index) => (
      <span
        key={index}
        className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-md"
      >
        {genre}
      </span>
    ))}
  </div>
);

export default GenresList;