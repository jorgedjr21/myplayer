import React from "react";
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieGrid from "@components/MovieGrid";
import { fetchMovies } from "@api/movies";

jest.mock('@api/movies', () => ({
  fetchMovies: jest.fn(),
}));

describe('MovieGrid', () => {
  const mockMovies = [
    { id: 1, title: 'Movie 1', large_cover_image: 'image1.jpg', rating: 8.1, year: 2021 },
    { id: 2, title: 'Movie 2', large_cover_image: 'image2.jpg', rating: 7.5, year: 2020 },
  ];

  test('renders movies after fetching data', async () => {
    // Set up the mock implementation for fetchMovies
    (fetchMovies as jest.Mock).mockResolvedValue({
      movies: mockMovies,
      movieCount: mockMovies.length,
    });

    render(<MemoryRouter>
      <MovieGrid />
    </MemoryRouter>);

    // Check for loading spinner or text if your component displays it
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    // Wait for the movies to be rendered after fetching
    await waitFor(() => {
      mockMovies.forEach((movie) => {
        expect(screen.getByText(movie.title)).toBeInTheDocument();
        expect(screen.getByText(`${movie.rating}/10`)).toBeInTheDocument();
        expect(screen.getByText(movie.year.toString())).toBeInTheDocument();
      });
    })
  });

  test('displays no movies found message if fetchMovies returns an empty array', async () => {
    (fetchMovies as jest.Mock).mockResolvedValue({
      movies: [],
      moviesCount: 0
    }); // Mock an empty response

    render(<MemoryRouter>
      <MovieGrid />
    </MemoryRouter>);

    await expect(screen.findByText(/No movies found./i)).resolves.toBeInTheDocument();
  });

  test('handles fetchMovies error and displays an error message', async () => {
    const error = new Error('Failed to fetch movies');
    (fetchMovies as jest.Mock).mockRejectedValue(error); // Mock a fetch error
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<MemoryRouter>
      <MovieGrid />
    </MemoryRouter>);

    await expect(screen.findByText(/Failed to load movies. Please try again later./i)).resolves.toBeInTheDocument();

    expect(consoleErrorMock).toHaveBeenCalledWith('Error loading movies', error);

    consoleErrorMock.mockRestore();
  });
})