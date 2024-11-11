import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onSearch: (query: string) => void;
}


const Navbar: React.FC<NavbarProps> = ({onSearch}) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 flex items-center justify-between z-50 shadow-lg">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold text-red-600">
          MYFLIX
        </Link>
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/series" className="hover:text-gray-400">Series</Link>
        <Link to="/movies" className="hover:text-gray-400">Movies</Link>
        <Link to="/latest" className="hover:text-gray-400">Latest</Link>
      </div>

      {/* Add the SearchBar component here */}
      <div className="w-1/3">
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
