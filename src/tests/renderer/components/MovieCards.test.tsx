import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import MovieCard from '@components/MovieCard'


describe('MovieCard', () => {
  const movieProps = {
    title: 'Movie Title',
    image_url: 'https://yts.mx/assets/images/movies/vettaiyan_2024/large-cover.jpg',
    rating: 8.8,
    year: 2024
  };

  test('renders correctly with all props', () => {
    render(<MovieCard {...movieProps} />);

    const titleElement = screen.getByText(movieProps.title);
    expect(titleElement).toBeInTheDocument();

    const yearElement = screen.getByText(movieProps.year.toString());
    expect(yearElement).toBeInTheDocument();

    const ratingElement = screen.getByText(`${movieProps.rating}/10`);
    expect(ratingElement).toBeInTheDocument();

    const imageElement = screen.getByRole('img', { name: movieProps.title });
    expect(imageElement).toHaveAttribute('src', movieProps.image_url);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<MovieCard {...movieProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('displays title, rating, and year', () => {
    render(<MovieCard {...movieProps} />);
  
    expect(screen.getByText(movieProps.title)).toBeInTheDocument();
    expect(screen.getByText(`${movieProps.rating}/10`)).toBeInTheDocument();
    expect(screen.getByText(movieProps.year.toString())).toBeInTheDocument();
  });

  test('renders image with correct src and alt attributes', () => {
    render(<MovieCard {...movieProps} />);
  
    const imageElement = screen.getByRole('img', { name: movieProps.title });
    expect(imageElement).toHaveAttribute('src', movieProps.image_url);
    expect(imageElement).toHaveAttribute('alt', movieProps.title);
  });

  test('has hover animation class', () => {
    render(<MovieCard {...movieProps} />);
    const cardElement = screen.getByText(movieProps.title).parentElement?.parentElement;
    expect(cardElement).toHaveClass('hover:scale-105');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<MovieCard {...movieProps} onClick={handleClick} />);
  
    const cardElement = screen.getByText(movieProps.title).parentElement?.parentElement;
    cardElement && cardElement.click();
  
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not display rating if not provided', () => {
    const { rating, ...propsWithoutRating } = movieProps;
    render(<MovieCard {...propsWithoutRating} />);
  
    expect(screen.queryByText(`${rating}/10`)).not.toBeInTheDocument();
  });

  test('has accessible image with alt text', () => {
    render(<MovieCard {...movieProps} />);
    const imageElement = screen.getByRole('img', { name: movieProps.title });
    expect(imageElement).toHaveAccessibleName(movieProps.title);
  });

  test('renders correctly with a long title', () => {
    const longTitleProps = { ...movieProps, title: 'An Incredibly Long Movie Title That Might Overflow' };
    render(<MovieCard {...longTitleProps} />);
    
    expect(screen.getByText(longTitleProps.title)).toBeInTheDocument();
  });

  test('displays default image when image src is not provided', () => {
    const { image_url, ...propsWithoutImageUrl } = movieProps;
    render(<MovieCard {...propsWithoutImageUrl} />);
  
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', "https://via.placeholder.com/400x600?text=No+Image+Available"); // Replace with your default image path
  });
  
  
  
});