// src/renderer/components/Description.tsx
import React from 'react';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => (
  <p className="movie-description">{text}</p>
);

export default Description;
