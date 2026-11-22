import React from 'react';
import wavyShape from '../../assets/shape_wavy_24.svg';
import rainyShape from '../../assets/shape_rainy_08.svg';
import ytThumb from '../../assets/yt_thumbs/VkPc1T1bgSM.jpg';

export default function PortfolioBanner({ onNavigate }) {
  return (
    <section
      className="relative w-full overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24"
      style={{ backgroundColor: '#0F0F0F' }}
    >
      {/* Background Organic Wave Shape */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-90 z-0"
        style={{
          backgroundImage: `url(${wavyShape})`,
        }}
      />

      <div className="relative z-10 ref-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Subtitle, Button, Quote */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Subtitle */}
            <p className="text-[#5DD62C] font-['Montserrat'] text-lg md:text-xl font-medium tracking-wide mb-1">
              Video Producer/Filmmaker
            </p>

            {/* Main Title */}
            <h2 className="text-[#F8F8F8] font-['Bebas_Neue'] uppercase text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-wider leading-none m-0 font-bold">
              PORTFOLIO
            </h2>

            {/* WORK Button */}
            <div className="mt-4 mb-8">
              <a
                href="/work"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('work');
                }}
                className="inline-block py-2.5 px-8 rounded-[0.125rem] bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-sm tracking-wider uppercase transition-colors shadow-md no-underline"
              >
                WORK
              </a>
            </div>

            {/* Quote Block */}
            <div className="relative max-w-md bg-[#202020] rounded-lg shadow-xl p-5 md:p-6 border-l-4 border-[#5DD62C] overflow-hidden mt-4">
              {/* Subtle background SVG shape */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center"
                style={{ backgroundImage: `url(${rainyShape})` }}
              />

              {/* Quote Mark Icon */}
              <div className="absolute -top-3 left-6 w-7 h-7 bg-[#5DD62C] text-[#0F0F0F] rounded-full flex items-center justify-center shadow">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="relative z-10 m-0 text-[#F8F8F8] font-['Montserrat'] text-sm md:text-base font-normal leading-relaxed pt-1">
                I don't just make videos.
                <br />
                <span className="font-medium text-[#5DD62C]">I figure out why they should exist.</span>
              </blockquote>
            </div>
          </div>

          {/* Right Column: Vertical Video */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black border border-neutral-700/50"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 10px 30px 0px, rgba(0, 0, 0, 0.15) 0px 8px 20px 0px inset',
              }}
            >
              <iframe
                src="//www.youtube.com/embed/VkPc1T1bgSM?rel=0&autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=VkPc1T1bgSM"
                title="Bhavnish Sharma Portfolio Video"
                className="w-full h-full border-0 object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
