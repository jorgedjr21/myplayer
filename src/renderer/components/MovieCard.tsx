import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  image_url?: string;
  rating?: number;
  year: number;
}


const MovieCard: React.FC<MovieCardProps> = ({id, title, image_url, rating, year}) => {
  const defaultImage = "https://via.placeholder.com/400x600?text=No+Image+Available"
  return (
    <Link to={`/movie/${id}`}>
      <div
        className="movie-card relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200 max-w-[400px] xl:max-h-[600px] cursor-pointer"
      >
        {/* Movie Image */}
        <img
          src={image_url || defaultImage}
          alt={title}
          className="w-full h-auto sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[360px] lg:w-[300px] lg:h-[450px] xl:w-[400px] xl:h-[600px] object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Movie Details Overlay */}
        <div className="absolute bottom-4 left-2 right-2 text-white font-semibold text-center px-2 space-y-1">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{title}</h3>
          <div className="flex items-center justify-center space-x-4 text-sm sm:text-base">
            {/* Year */}
            <span className="bg-gray-900 bg-opacity-75 px-2 py-1 rounded-md">
              {year}
            </span>

            {/* Rating */}
            <span className="flex items-center bg-gray-900 bg-opacity-75 px-2 py-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-yellow-400 mr-1"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {rating}/10
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard;