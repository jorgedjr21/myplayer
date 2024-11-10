// src/renderer/components/Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-start p-12 md:p-16 h-[50vh] lg:h-[60vh] text-white">
      <div className="bg-black bg-opacity-50 p-6 md:p-10 rounded-lg">
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
