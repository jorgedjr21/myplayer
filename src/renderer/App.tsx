import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesList from '@components/MoviesList';
import MovieDetails from '@components/MovieDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;