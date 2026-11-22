import React, { useState } from 'react';

export function YouTubePlayButton({ className = "w-12 h-8" }) {
  return (
    <div className={`relative flex items-center justify-center bg-[#202020] border border-[#5DD62C] text-[#5DD62C] hover:bg-[#5DD62C] hover:text-[#0F0F0F] rounded-[12px] shadow-lg transition-transform hover:scale-110 cursor-pointer ${className}`}>
      <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

export function YouTubeModal({ videoId, onClose }) {
  if (!videoId) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/80 hover:text-white bg-black/60 rounded-full w-8 h-8 flex items-center justify-center z-10"
        >
          ✕
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
