// src/renderer/components/MovieDetails/MediaTabs.tsx
import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MediaTabsProps {
  trailerCode: string;
  screenshots: string[];
}

const MediaTabs: React.FC<MediaTabsProps> = ({ trailerCode, screenshots }) => {
  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '390',
    playerVars: {
      autoplay: 1,
      mute: 0,  // Ensure that mute is disabled
    },
  };
  const [activeTab, setActiveTab] = useState<'trailer' | 'screenshots'>('trailer');

  return (
    <div className="w-full max-w-2xl mx-auto mt-4">
      {/* Tabs */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setActiveTab('trailer')}
          className={`px-4 py-2 font-semibold rounded-lg mx-1 transition-colors ${
            activeTab === 'trailer' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Trailer
        </button>
        <button
          onClick={() => setActiveTab('screenshots')}
          className={`px-4 py-2 font-semibold rounded-lg mx-1 transition-colors ${
            activeTab === 'screenshots' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Screenshots
        </button>
      </div>

      {/* Content */}
      <div className="media-content h-[500px] w-full rounded-lg overflow-hidden">
        {activeTab === 'trailer' ? (
          <YouTube
            videoId={trailerCode}
            opts={opts}
            className="w-full h-full object-cover"
          />
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {screenshots.map((screenshot, index) => (
              <SwiperSlide key={index}>
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default MediaTabs;
