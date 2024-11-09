import { Movie } from '../types/Movie';

const API_URL = 'https://yts.mx/api/v2/list_movies.json';

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(API_URL);
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