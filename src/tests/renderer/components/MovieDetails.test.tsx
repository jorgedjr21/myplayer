// src/tests/renderer/components/MovieDetails.test.tsx

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from '../../../renderer/components/MovieDetails';
import { fetchMovieDetails } from '@api/movies';
import { MovieDetails as MovieDetailsType } from '../../../types/MovieDetails';

jest.mock('@api/movies'); // Mock the fetchMovieDetails API call
jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))
jest.mock('swiper/modules', () => ({
  Navigation: {},
  Pagination: {},
}));

const mockMovieDetails: MovieDetailsType = {
  id: 1,
  title: 'Mock Movie',
  description_full: 'This is a mock movie description.',
  rating: 8.5,
  runtime: 120,
  genres: ['Action', 'Adventure'],
  year: 2022,
  large_cover_image: 'mock-image-url.jpg',
  cast: [{ name: 'Actor 1', character_name: 'Character 1' }],
  like_count: 1000,
  torrents: [
    {
      quality: '1080p',
      size: '1.5GB',
      url: 'https://mock-torrent-url.com',
      type: 'bluray',
      seeds: 150,
      peers: 50,
      hash: "12321321",
    },
    {
      quality: '720p',
      size: '900MB',
      url: 'https://mock-torrent-url.com',
      type: 'web',
      seeds: 100,
      peers: 30,
      hash: "12321321",
    },
  ],
  yt_trailer_code: 'mockTrailerCode',
  screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
};

describe('MovieDetails Component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  test('displays loading spinner initially', async () => {
    (fetchMovieDetails as jest.Mock).mockResolvedValueOnce(mockMovieDetails);

    render(
      <MemoryRouter initialEntries={['/movie/1']}>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if the spinner is displayed initially
    expect(document.querySelector('.animate-spin')).toBeInTheDocument(); // Assuming Spinner has data-testid="spinner"
  });

  test('displays movie details after fetching data', async () => {
    (fetchMovieDetails as jest.Mock).mockResolvedValueOnce(mockMovieDetails);

    render(
      <MemoryRouter initialEntries={['/movie/1']}>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for the loading spinner to disappear
    await waitFor(() => expect(screen.queryByTestId('spinner')).not.toBeInTheDocument());

    // Check if movie details are displayed
    expect(screen.getByText('Mock Movie')).toBeInTheDocument();
    expect(screen.getByText('This is a mock movie description.')).toBeInTheDocument();
    expect(screen.getByText(/8\.5\s*\/\s*10/i)).toBeInTheDocument();
    expect(screen.getByText('120 min')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Adventure')).toBeInTheDocument();
    expect(screen.getByText('1000 Likes')).toBeInTheDocument();
  });

  test('displays "Movie details not found" if no movie data is returned', async () => {
    (fetchMovieDetails as jest.Mock).mockResolvedValueOnce(null); // Mock API to return null

    render(
      <MemoryRouter initialEntries={['/movie/1']}>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for the component to handle the null response
    await waitFor(() => expect(screen.queryByTestId('spinner')).not.toBeInTheDocument());

    // Check if the "not found" message is displayed
    expect(screen.getByText(/Movie details not found./i)).toBeInTheDocument();
  });
});