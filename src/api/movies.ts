import { Movie } from '../types/Movie';
import { MovieDetails } from '../types/MovieDetails';

const BASE_URL = 'https://yts.mx/api/v2';

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${BASE_URL}/list_movies.json`);
    const data = await response.json();

    if (data.status == 'ok') {
      return data.data.movies.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        large_cover_image: movie.large_cover_image,
        rating: movie.rating,
        year: movie.year,
      }));
    }else {
      throw new Error('Failed to fetch movies');
    }
  } catch (error) {
    console.error('Error fetchin movies:', error);
    throw error;
  }
}

export const fetchMovieDetails = async(movieId: number): Promise<MovieDetails | null> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`
    )

    const data = await response.json();

    if (data.status == 'ok'){
      const movie = data.data.movie
      const screenshots: string[] = [
        movie.large_screenshot_image1,
        movie.large_screenshot_image2,
        movie.large_screenshot_image3,
        movie.medium_screenshot_image1,
        movie.medium_screenshot_image2,
        movie.medium_screenshot_image3,
      ].filter(Boolean);
      return {
        ...movie,
        screenshots, // Add the combined array to the movie object
      };
    }else {
      console.error('Failed to fetch movie', data.status_message);
      return null;
    }
  } catch(error) {
    console.error('Error fetching movie: ', error);
    return null;
  }
}