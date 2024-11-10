// src/renderer/components/TorrentsSection.tsx
import React from 'react';

interface Torrent {
  quality: string;
  size: string;
}

interface TorrentsProps {
  torrents?: Torrent[];
}

const Torrents: React.FC<TorrentsProps> = ({ torrents }) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold text-red-500 mb-2">Available Qualities</h3>
    {torrents && torrents.length > 0 ? (
      <div className="flex flex-wrap gap-4">
        {torrents.map((torrent, index) => (
          <span
            key={index}
            className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-md"
          >
            {torrent.quality} ({torrent.size})
          </span>
        ))}
      </div>
    ) : (
      <p className="text-sm text-gray-400">No torrents available for this movie.</p>
    )}
  </div>
);

export default Torrents;
