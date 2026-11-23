import React from 'react';
import floatsShape from '../../assets/shape_floats_03.svg';
import wavyShape from '../../assets/shape_wavy_26.svg';

const categories = [
  {
    title: 'reels',
    link: '/work#top',
  },
  {
    title: 'motion graphics',
    link: '/work#MOTION-GRAPHIC',
  },
  {
    title: 'design',
    link: '/work#SHORT-FILM-6',
  },
];

export default function FilmCategories({ onNavigate }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#202020] py-10 md:py-14">
      {/* Background Floating Bubbles Shape */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-90 z-0"
        style={{ backgroundImage: `url(${floatsShape})` }}
      />

      <div className="relative z-10 ref-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative bg-[#0F0F0F] text-[#F8F8F8] rounded-2xl p-6 sm:p-7 shadow-xl overflow-hidden flex flex-col justify-between min-h-[140px] md:min-h-[160px] border border-neutral-800"
            >
              {/* Card Inner Wave Decoration */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30 bg-cover bg-center"
                style={{ backgroundImage: `url(${wavyShape})` }}
              />

              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl tracking-wide text-[#F8F8F8] capitalize m-0 mb-4">
                  {cat.title}
                </h3>
              </div>

              <div className="relative z-10">
                <a
                  href={cat.link}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('work');
                  }}
                  className="inline-block py-2 px-6 rounded-[0.125rem] bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm no-underline"
                >
                  Discover
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
