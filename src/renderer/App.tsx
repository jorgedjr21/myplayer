import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesList from '@components/MoviesList';
import MovieDetails from '@components/MovieDetails';
import Player from '@components/Player';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />3
        <Route path="/movie/:id/hash/:hash/play" element={<Player />} />
      </Routes>
    </Router>
  );
};

export default App;