// src/renderer/components/Description.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Player: React.FC = () => {
  const { id, hash } = useParams<{ id: string; hash: string }>();
  
  return (
    <div>
      <h1>Now Playing Movie {id}</h1>
      <p>Quality hash: {hash}</p>
      {/* Your player logic here */}
    </div>
  );
}

export default Player;
