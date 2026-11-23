import React from 'react';
import heroBg from '../../../public/assets/image.png';

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0F0F0F] text-[#F8F8F8]">
      {/* Background Image with center positioning matching Odoo (50% 82.75%) */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: '50% 20.75%',
        }}
      />

      {/* Dark Overlay (bg-black-50) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content Container */}
      <div className="relative z-20 ref-container pt-[180px] pb-[170px] md:pt-[208px] md:pb-[200px] flex flex-col items-center justify-center text-center">
        <p className="text-white/90 text-sm sm:text-base md:text-xl font-['Montserrat'] tracking-[0.25em] uppercase mb-1">
          Written &amp; Directed by
        </p>
        <h1 className="text-white font-['Bebas_Neue'] uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-wider leading-none m-0">
          BHAVNISH SHARMA
        </h1>
      </div>
    </section>
  );
}
