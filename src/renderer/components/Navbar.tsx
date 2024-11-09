import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-b from-black via-transparent to-transparent z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-red-600">MyFlix</h1>
        <nav className="space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#series" className="text-gray-300 hover:text-white">Series</a>
          <a href="#movies" className="text-gray-300 hover:text-white">Movies</a>
          <a href="#latest" className="text-gray-300 hover:text-white">Latest</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;