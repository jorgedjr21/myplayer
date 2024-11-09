// src/renderer/components/Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  return (
    <section
      className="flex flex-col justify-center items-start p-8 h-[70vh] bg-cover bg-center text-white"
      style={{
        backgroundImage: 'url("https://via.placeholder.com/1600x600")',
      }}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded">
        <h2 className="text-5xl font-bold mb-4">Featured Movie</h2>
        <p className="text-lg max-w-lg mb-6">Experience the latest blockbuster movie. Watch it now and get hooked!</p>
        <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg">
          Watch Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
