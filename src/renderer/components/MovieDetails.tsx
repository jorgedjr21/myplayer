// src/renderer/components/MovieDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { fetchMovieDetails } from '@api/movies';
import Spinner from './Spinner';
import HeaderSection from './MovieDetails/HeaderSection';
import MovieInfo from './MovieDetails/MovieInfo';
import Description from './MovieDetails/Description';
import MediaTabs from './MovieDetails/MediaTabs';
import Torrents from './MovieDetails/Torrents';
import { MovieDetails as MovieDetailsType } from '../../types/MovieDetails'; // Renamed type import

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Initialize the navigate function
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const movieData = await fetchMovieDetails(Number(id));
        if (movieData) {
          setMovie(movieData);
        } else {
          setError("Movie details not found.");
        }
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError("Failed to load movie details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  if(loading){
    return <Spinner />
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-white bg-red-600 px-6 py-3 rounded-md shadow-lg">
          {error}
        </p>
      </div>
    );
  }

  const handleOnPlay = (movie_hash) => {
    if (movie_hash && movie?.id) {
      navigate(`/movie/${movie.id}/hash/${movie_hash}/play`);
    }
  }

  return (
    <div
    className="movie-details-page relative flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${movie.large_cover_image})` }}
  >
    <div className="absolute inset-0 bg-black opacity-75"></div>

    {/* Back Button */}
    <button
      onClick={() => navigate('/')}
      className="absolute top-6 left-6 z-10 px-4 py-2 bg-red-600 text-white font-bold rounded shadow-lg hover:bg-red-700"
    >
      &larr; Back
    </button>

    {/* Main Content */}
    <div className="relative z-20 flex flex-col items-center w-11/12 max-w-2xl p-6 bg-black bg-opacity-80 rounded-lg shadow-lg mt-16 space-y-6 lg:max-w-5xl lg:p-12">
      <HeaderSection title={movie.title} likeCount={movie.like_count} availableQualities={movie.torrents} onPlay={handleOnPlay} />
      
      <MovieInfo rating={movie.rating} runtime={movie.runtime} year={movie.year} genres={movie.genres} />
      
      <MediaTabs trailerCode={movie.yt_trailer_code} screenshots={movie.screenshots} />

      {/* Description Section */}
      {movie.description_full ? (
          <Description text={movie.description_full} />
        ) : (
          <p className="text-gray-400 italic">No description available</p>
        )}
      
    </div>
  </div>
  );
};

export default MovieDetails;