import React from 'react';
import bannerImg from '../../assets/short_films_banner.webp';

export default function ShortFilmsBanner() {
  return (
    <section
      id="Short-Films"
      className="relative w-full overflow-hidden bg-cover bg-center py-16 md:py-24"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundPosition: 'center center',
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-0" />

      <div className="relative z-10 ref-container text-center">
        <h1 className="font-['Bebas_Neue'] uppercase text-5xl sm:text-7xl md:text-8xl text-white tracking-wider leading-none m-0 font-bold drop-shadow-md">
          Short Films
        </h1>
        <p className="font-['Montserrat'] text-base sm:text-lg md:text-xl text-white font-medium tracking-wide mt-2 m-0 drop-shadow">
          <span className="inline-block px-3 py-0.5 rounded bg-black/30 backdrop-blur-sm border-b-2 border-[#5DD62C]">
            The Framez
          </span>
        </p>
      </div>
    </section>
  );
}
