// src/renderer/components/MovieGrid.tsx
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Spinner from './Spinner';
import { fetchMovies } from '../../api/movies';
import { Movie } from '../../types/Movie';

interface MovieGridProps {
  searchQuery?: string;
}

const MOVIES_PER_PAGE = 15;

const MovieGrid: React.FC<MovieGridProps> = ({searchQuery = ''}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      console.log('Fetching movies with searchQuery:', searchQuery);
      setLoading(true);
      try {
        const { movies: fetchedMovies, movieCount } = await fetchMovies(page, MOVIES_PER_PAGE, searchQuery);

        setMovies(fetchedMovies);
        setTotalPages(Math.ceil(movieCount  / MOVIES_PER_PAGE));
      }catch(error){
        console.error('Error loading movies', error);
        setError('Failed to load movies. Please try again later.');
      }finally {
        setLoading(false)
      }
    };

    loadMovies();
  }, [page, searchQuery]);

  const goToNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const goToPreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };


  if(loading) {
    return <Spinner/>
  }

  if (error) {
    return <div className="text-center text-white mt-10">{error}</div>;
  }

  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gray-800 rounded-lg shadow-md p-6 text-white mt-10 space-y-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-12 h-12 text-red-500"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 13a1 1 0 01-1 1H8a1 1 0 010-2h8a1 1 0 011 1zm-1-4a1 1 0 01-1 1H8a1 1 0 010-2h7a1 1 0 011 1zm-1-4a1 1 0 01-1 1H8a1 1 0 010-2h5a1 1 0 011 1z" />
        </svg>
        <h3 className="text-xl font-semibold">No Movies Found</h3>
        <p className="text-gray-400 text-center max-w-md">
          We couldn't find any movies matching your search. Please try again with a different title.
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image_url={movie.large_cover_image}
            rating={movie.rating}
            year={movie.year}
          />
        ))}
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={goToPreviousPage}
          disabled={page === 1}
          className={`px-6 py-2 rounded-full font-semibold transition-transform transform-gpu duration-200 ${
            page === 1
              ? 'bg-gray-700 cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700 hover:scale-105'
          } text-white shadow-lg`}
        >
          &larr; Previous
        </button>
        <span className="text-white text-lg font-medium">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={page === totalPages}
          className={`px-6 py-2 rounded-full font-semibold transition-transform transform-gpu duration-200 ${
            page === totalPages
              ? 'bg-gray-700 cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700 hover:scale-105'
          } text-white shadow-lg`}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default MovieGrid;
