import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieGrid from "@components/MovieGrid";
import { fetchMovies } from "@api/movies";

jest.mock('@api/movies', () => ({
  fetchMovies: jest.fn(),
}));

describe('MovieGrid', () => {
  const mockMovies = [
    {
      id: 1,
      title: 'Test Movie 1',
      large_cover_image: 'https://via.placeholder.com/400x600?text=Test+Movie+1',
      rating: 8.5,
      year: 2023,
    },
    {
      id: 2,
      title: 'Test Movie 2',
      large_cover_image: 'https://via.placeholder.com/400x600?text=Test+Movie+2',
      rating: 7.8,
      year: 2022,
    },
  ]

  test('renders movies after fetching data', async () => {
    // Set up the mock implementation for fetchMovies
    (fetchMovies as jest.Mock).mockResolvedValue(mockMovies);

    render(<MovieGrid />);

    // Check for loading spinner or text if your component displays it
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    // Wait for the movies to be rendered after fetching
    await waitFor(() => {
      mockMovies.forEach((movie) => {
        expect(screen.getByText(movie.title)).toBeInTheDocument();
        expect(screen.getByText(`${movie.rating}/10`)).toBeInTheDocument();
        expect(screen.getByText(movie.year.toString())).toBeInTheDocument();
      });
    });
  });

  test('displays no movies found message if fetchMovies returns an empty array', async () => {
    (fetchMovies as jest.Mock).mockResolvedValue([]); // Mock an empty response

    render(<MovieGrid />);

    await waitFor(() => {
      expect(screen.getByText(/no movies found/i)).toBeInTheDocument();
    });
  });

  test('handles fetchMovies error and displays an error message', async () => {
    const error = new Error('Failed to fetch movies');
    (fetchMovies as jest.Mock).mockRejectedValue(error); // Mock a fetch error
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<MovieGrid />);

    await waitFor(() => {
      expect(screen.getByText(/No movies found./i)).toBeInTheDocument();
    });

    expect(consoleErrorMock).toHaveBeenCalledWith('Error loading movies', error);

    consoleErrorMock.mockRestore();
  });
})