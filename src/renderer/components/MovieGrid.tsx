// src/renderer/components/MovieGrid.tsx
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Spinner from './Spinner';
import { fetchMovies } from '../../api/movies';
import { Movie } from '../../types/Movie';

const MovieGrid: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const fetchedMovies = await fetchMovies();

        setMovies(fetchedMovies);
      }catch(error){
        console.error('Error loading movies', error);
      }finally {
        setLoading(false)
      }
    };

    loadMovies();
  }, []);

  const handleCardClick = (movie: Movie) => {
    console.log('Clicked on movie:', movie.title); // Perform any action here
    // For example, open a modal with details, or navigate to a details page
  };


  if(loading) {
    return <Spinner/>
  }

  if (movies.length === 0) {
    return <div className="text-center text-white mt-10">No movies found.</div>;
  }

  return (
    <section className="container mx-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {
        movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            title={movie.title} 
            image_url={movie.large_cover_image}
            rating={movie.rating}
            year={movie.year}
            onClick={() => handleCardClick(movie)}
            />
        ))
      }
    </section>
  );
};

export default MovieGrid;
