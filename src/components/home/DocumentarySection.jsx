import React, { useState } from 'react';
import wavyShape from '../../assets/shape_wavy_26.svg';
import chabutraThumb from "../../../public/assets/thumbnail1.png";
import filmmakerThumb from "../../../public/assets/thumbnail2.png";
import { YouTubePlayButton, YouTubeModal } from '../common/YouTubeCard';

export default function DocumentarySection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#0F0F0F] py-12 md:py-16">
      {/* Background Organic Wave Shape */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-80 z-0"
        style={{ backgroundImage: `url(${wavyShape})` }}
      />

      <div className="relative z-10 ref-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* TOP LEFT: Two Text Cards + Future of a Filmmaker Video Card (cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col gap-4 justify-between">
            {/* Top row cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Documentaries (Dark card matching ref) */}
              <div className="bg-[#202020] text-[#F8F8F8] rounded-xl p-5 flex flex-col justify-center min-h-[110px] shadow border border-neutral-800">
                <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#5DD62C] m-0 tracking-wide">
                  Documentaries
                </h3>
                <p className="font-['Montserrat'] text-xs sm:text-sm text-[#F8F8F8]/80 m-0 mt-1">
                  Where Ideas came to life
                </p>
              </div>

              {/* Card 2: Videos (Light card matching ref) */}
              <div className="bg-[#F8F8F8] text-[#0F0F0F] rounded-xl p-5 flex flex-col justify-center min-h-[110px] shadow">
                <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#0F0F0F] m-0 tracking-wide">
                  Videos
                </h3>
                <p className="font-['Montserrat'] text-xs sm:text-sm text-neutral-600 m-0 mt-1">
                  That Build connections
                </p>
              </div>
            </div>

            {/* Video Card: Future of a Filmmaker */}
            <div
              className="relative group rounded-xl overflow-hidden shadow-xl aspect-video bg-black cursor-pointer border border-neutral-800 grow min-h-[220px]"
              onClick={() =>
                setActiveVideo(
                  'https://www.instagram.com/reel/DKcHuMgJ4XP/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA%3D%3D&srtk=MzRlODBiNWFlZA%3D%3D'
                )
              }
            >
              <img
                src={filmmakerThumb}
                alt="Future of a Filmmaker"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <YouTubePlayButton className="w-14 h-10" />
              </div>
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-['Montserrat'] font-medium">
                  Nanakramguda
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (cols 7-12) */}
          <div className="lg:col-span-6 flex flex-col gap-4 justify-between">
            {/* TOP RIGHT: Chabutra Documentary Video Card */}
            <div
              className="relative group rounded-xl overflow-hidden shadow-xl aspect-video bg-black cursor-pointer border border-neutral-800 grow min-h-[220px]"
              onClick={() =>
                setActiveVideo(
                  'https://www.instagram.com/reel/DXHG5hukq1v/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA%3D%3D&srtk=MzRlODBiNWFlZA%3D%3D'
                )
              }
            >
              <img
                src={chabutraThumb}
                alt="Chabutra Documentary"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: '50% 80%' }}
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <YouTubePlayButton className="w-14 h-10" />
              </div>
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-['Montserrat'] font-medium">
              Matra
              </div>
            </div>

            {/* BOTTOM RIGHT: Creativity & Content Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 5: Creativity (Light card) */}
              <div className="bg-[#F8F8F8] text-[#0F0F0F] rounded-xl p-5 flex flex-col justify-center min-h-[110px] shadow">
                <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#0F0F0F] m-0 tracking-wide text-left">
                  Creativity
                </h3>
                <p className="font-['Montserrat'] text-xs sm:text-sm text-neutral-600 m-0 mt-1 text-left">
                  Reaching new heights
                </p>
              </div>

              {/* Card 6: Content (Green highlight card) */}
              <div className="bg-[#337418] text-[#F8F8F8] rounded-xl p-5 flex flex-col justify-center min-h-[110px] shadow">
                <h3 className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#F8F8F8] m-0 tracking-wide text-left">
                  Content
                </h3>
                <p className="font-['Montserrat'] text-xs sm:text-sm text-[#F8F8F8]/90 m-0 mt-1 text-left">
                  Mark the difference
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <YouTubeModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
