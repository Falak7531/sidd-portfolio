import React, { useState } from 'react';
import rainyShape from '../../assets/shape_rainy_01_001.svg';
import { YouTubePlayButton, YouTubeModal } from '../common/YouTubeCard';

import thumbT2 from '../../assets/yt_thumbs/T-2QqxMENG0.jpg';
import thumbCL from '../../assets/yt_thumbs/cLQj6Ed-chE.jpg';
import thumb8U from '../../assets/yt_thumbs/8U0ajirnodA.jpg';
import thumbKC from '../../assets/yt_thumbs/KCFeZ-yNpSg.jpg';
import thumbSH from '../../assets/yt_thumbs/sHkESruYuqw.jpg';
import thumbT5 from '../../assets/yt_thumbs/T5jilrI_Amw.jpg';
import thumbRQ from '../../assets/yt_thumbs/R-qpna0WLNI.jpg';
import thumbZS from '../../assets/yt_thumbs/ZSWNahHtPyI.jpg';
import thumbXB from '../../assets/yt_thumbs/XBbZCDRlkAg.jpg';

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  const renderThumbnail = (id, img, title, extraClass = '') => (
    <div
      onClick={() => setActiveVideo(id)}
      className={`relative group rounded-xl overflow-hidden shadow-md bg-black cursor-pointer border border-neutral-700/30 ${extraClass}`}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <YouTubePlayButton className="w-10 h-7" />
      </div>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-white pt-12 pb-16 text-neutral-900">
      {/* Container for Video Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-3.5 items-start">
          {/* Col 1-2: Tall Left Video (T-2QqxMENG0) */}
          <div className="col-span-2 h-[460px]">
            {renderThumbnail('T-2QqxMENG0', thumbT2, 'Travel Video', 'h-full')}
          </div>

          {/* Col 3-5: Two Stacked Videos (cLQj6Ed-chE & 8U0ajirnodA) */}
          <div className="col-span-3 flex flex-col gap-3 h-[460px]">
            <div className="h-[224px]">
              {renderThumbnail('cLQj6Ed-chE', thumbCL, 'Vertical Reel 1', 'h-full')}
            </div>
            <div className="h-[224px]">
              {renderThumbnail('8U0ajirnodA', thumb8U, 'Vertical Reel 2', 'h-full')}
            </div>
          </div>

          {/* Col 6-8: Tall Centerpiece Dog Video (KCFeZ-yNpSg) */}
          <div className="col-span-3 h-[560px]">
            {renderThumbnail('KCFeZ-yNpSg', thumbKC, 'Dog Nature Short', 'h-full')}
          </div>

          {/* Col 9-10: Two Stacked Videos (sHkESruYuqw & T5jilrI_Amw) */}
          <div className="col-span-2 flex flex-col gap-3 h-[460px] pt-3">
            <div className="h-[216px]">
              {renderThumbnail('sHkESruYuqw', thumbSH, 'Visual Short 1', 'h-full')}
            </div>
            <div className="h-[216px]">
              {renderThumbnail('T5jilrI_Amw', thumbT5, 'Visual Short 2', 'h-full')}
            </div>
          </div>

          {/* Col 11-12: Three Stacked Videos (R-qpna0WLNI, ZSWNahHtPyI, XBbZCDRlkAg) */}
          <div className="col-span-2 flex flex-col gap-2.5 h-[460px] pt-3">
            <div className="h-[140px]">
              {renderThumbnail('R-qpna0WLNI', thumbRQ, 'Short 1', 'h-full')}
            </div>
            <div className="h-[140px]">
              {renderThumbnail('ZSWNahHtPyI', thumbZS, 'Short 2', 'h-full')}
            </div>
            <div className="h-[140px]">
              {renderThumbnail('XBbZCDRlkAg', thumbXB, 'Short 3', 'h-full')}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Fallback Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden">
          {renderThumbnail('KCFeZ-yNpSg', thumbKC, 'Dog Nature Short', 'col-span-2 aspect-[4/3]')}
          {renderThumbnail('T-2QqxMENG0', thumbT2, 'Travel Video', 'aspect-[9/16]')}
          {renderThumbnail('cLQj6Ed-chE', thumbCL, 'Vertical Reel 1', 'aspect-video')}
          {renderThumbnail('8U0ajirnodA', thumb8U, 'Vertical Reel 2', 'aspect-video')}
          {renderThumbnail('sHkESruYuqw', thumbSH, 'Visual Short 1', 'aspect-video')}
          {renderThumbnail('T5jilrI_Amw', thumbT5, 'Visual Short 2', 'aspect-video')}
          {renderThumbnail('R-qpna0WLNI', thumbRQ, 'Short 1', 'aspect-video')}
          {renderThumbnail('ZSWNahHtPyI', thumbZS, 'Short 2', 'aspect-video')}
          {renderThumbnail('XBbZCDRlkAg', thumbXB, 'Short 3', 'aspect-video')}
        </div>

        {/* Bottom Diagonal Ribbon Background & Impact Narrative Text */}
        <div className="relative mt-8 md:mt-12 pt-12 pb-8">
          {/* Diagonal Peach/Orange Wave Ribbon Shape */}
          <div
            className="absolute inset-0 pointer-events-none bg-no-repeat z-0"
            style={{
              backgroundImage: `url(${rainyShape})`,
              backgroundPosition: 'left bottom',
              backgroundSize: '100% auto',
              opacity: 0.95,
            }}
          />

          <div className="relative z-10 max-w-4xl px-2 sm:px-4">
            <p className="font-['Montserrat'] font-semibold text-neutral-800 text-sm sm:text-base md:text-lg leading-relaxed text-left m-0">
              With a keen eye for detail and a dedication to excellence, I prioritize crafting impactful narratives that leave a lasting impression. My adaptability, professionalism, and creative approach enable me to consistently deliver results that surpass expectations in the dynamic realm of filmmaking and content creation.
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <YouTubeModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
