export interface Movie {
  id: number;
  title: string;
  large_cover_image: string;
  rating: number;
  year: number;
}

export interface MoviesResponse {
  movies: Movie[];
  movieCount: number;
}