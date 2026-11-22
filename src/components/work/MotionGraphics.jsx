import React, { useState } from 'react';
import floats12Shape from '../../assets/shape_floats_12_work.svg';
import { YouTubePlayButton, YouTubeModal } from '../common/YouTubeCard';

import thumbGza from '../../assets/yt_thumbs/GzaAaDhw0p8.jpg';
import thumbXox from '../../assets/yt_thumbs/XoxATF6A_5o.jpg';
import thumb0BK from '../../assets/yt_thumbs/0BKOEvCtU7Y.jpg';
import thumbYqk from '../../assets/yt_thumbs/YqkiRi3N3ck.jpg';
import thumbOnq from '../../assets/yt_thumbs/_onq9gckKb4.jpg';

export default function MotionGraphics() {
  const [activeVideo, setActiveVideo] = useState(null);

  const renderVideoItem = (id, img, title, extraClass = '') => (
    <div
      onClick={() => setActiveVideo(id)}
      className={`relative group rounded-2xl overflow-hidden shadow-2xl bg-black cursor-pointer border border-neutral-700/40 transition-transform duration-300 hover:scale-[1.02] ${extraClass}`}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <YouTubePlayButton className="w-12 h-8" />
      </div>
    </div>
  );

  return (
    <section
      id="MOTION-GRAPHIC"
      className="relative w-full overflow-hidden bg-[#0F0F0F] text-[#F8F8F8] pt-16 pb-24"
    >
      {/* Background Floating Vector Graphic */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-40 z-0"
        style={{ backgroundImage: `url(${floats12Shape})` }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-['Bebas_Neue'] uppercase text-4xl sm:text-5xl md:text-6xl tracking-wider text-white m-0">
            MOTION GRAPHIC
          </h2>
          <p className="font-['Montserrat'] text-sm sm:text-base text-neutral-300 mt-1 m-0">
            Meta Ads | Google Ads | Marketing Videos
          </p>
        </div>

        {/* Desktop Wave Collage Grid matching Odoo's exact 12-col proportions */}
        <div className="hidden lg:grid grid-cols-12 gap-4 items-center">
          {/* Col 1-2 (width 2, starts row 6): GzaAaDhw0p8 */}
          <div className="col-span-2 h-[380px] self-end mb-6">
            {renderVideoItem('GzaAaDhw0p8', thumbGza, 'Motion Graphic 1', 'h-full')}
          </div>

          {/* Col 3-5 (width 3, starts row 4): XoxATF6A_5o (Tall!) */}
          <div className="col-span-3 h-[560px]">
            {renderVideoItem('XoxATF6A_5o', thumbXox, 'Motion Graphic 2', 'h-full')}
          </div>

          {/* Col 6-7 (width 2, starts row 6): 0BKOEvCtU7Y (Mid) */}
          <div className="col-span-2 h-[440px] self-center">
            {renderVideoItem('0BKOEvCtU7Y', thumb0BK, 'Motion Graphic 3', 'h-full')}
          </div>

          {/* Col 8-10 (width 3, starts row 4): YqkiRi3N3ck (Tall!) */}
          <div className="col-span-3 h-[560px]">
            {renderVideoItem('YqkiRi3N3ck', thumbYqk, 'Motion Graphic 4', 'h-full')}
          </div>

          {/* Col 11-12 (width 2, starts row 7): _onq9gckKb4 */}
          <div className="col-span-2 h-[380px] self-end mb-8">
            {renderVideoItem('_onq9gckKb4', thumbOnq, 'Motion Graphic 5', 'h-full')}
          </div>
        </div>

        {/* Mobile/Tablet Adaptive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 lg:hidden">
          {renderVideoItem('XoxATF6A_5o', thumbXox, 'Motion Graphic 2', 'aspect-[9/16]')}
          {renderVideoItem('YqkiRi3N3ck', thumbYqk, 'Motion Graphic 4', 'aspect-[9/16]')}
          {renderVideoItem('GzaAaDhw0p8', thumbGza, 'Motion Graphic 1', 'aspect-[9/16]')}
          {renderVideoItem('0BKOEvCtU7Y', thumb0BK, 'Motion Graphic 3', 'aspect-[9/16]')}
          {renderVideoItem('_onq9gckKb4', thumbOnq, 'Motion Graphic 5', 'aspect-[9/16]')}
        </div>
      </div>

      {/* Video Modal Player */}
      <YouTubeModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
