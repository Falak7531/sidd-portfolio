import React, { useState } from 'react';
import rainyShape from '../../assets/shape_rainy_01_001.svg';
import { YouTubePlayButton, YouTubeModal } from '../common/YouTubeCard';

import thumbDN from '../../assets/ig_thumbs/DNnmTPVJ0lj.jpg';
import thumbDM from '../../assets/ig_thumbs/DMXnj8BK9fg.jpg';
import thumbDL1 from '../../assets/ig_thumbs/DL10y22J6hP.jpg';
import thumbDLU from '../../assets/ig_thumbs/DLUHmgVpLPy.jpg';
import thumbDK from '../../assets/ig_thumbs/DK1v9plpwrs.jpg';
import thumbT5 from '../../assets/yt_thumbs/T5jilrI_Amw.jpg';
import thumbRQ from '../../assets/yt_thumbs/R-qpna0WLNI.jpg';
import thumbZS from '../../assets/yt_thumbs/ZSWNahHtPyI.jpg';
import thumbXB from '../../assets/yt_thumbs/XBbZCDRlkAg.jpg';

const VIDEOS = {
  // Col 1-2: Tall Left
  tallLeft: {
    id: 'https://www.instagram.com/reel/DNnmTPVJ0lj/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA%3D%3D&srtk=MzRlODBiNWFlZA%3D%3D',
    thumb: thumbDN,
    title: 'Instagram Reel 1',
  },
  // Col 3-5: Two Stacked
  midLeftTop: {
    id: 'https://www.instagram.com/reel/DMXnj8BK9fg/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA%3D%3D&srtk=MzRlODBiNWFlZA%3D%3D',
    thumb: thumbDM,
    title: 'Instagram Reel 2',
  },
  midLeftBottom: {
    id: 'https://www.instagram.com/reel/DL10y22J6hP/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA%3D%3D&srtk=MzRlODBiNWFlZA%3D%3D',
    thumb: thumbDL1,
    title: 'Instagram Reel 3',
  },
  // Col 6-8: Tall Centerpiece
  centerpiece: {
    id: 'https://www.instagram.com/reel/DLUHmgVpLPy/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA%3D%3D&srtk=MzRlODBiNWFlZA%3D%3D',
    thumb: thumbDLU,
    title: 'Instagram Reel 4',
  },
  // Col 9-10: Two Stacked
  midRightTop: {
    id: 'https://www.instagram.com/reel/DK1v9plpwrs/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA%3D%3D',
    thumb: thumbDK,
    title: 'Instagram Reel 5',
  },
  midRightBottom: {
    id: 'T5jilrI_Amw',
    thumb: thumbT5,
    title: 'Visual Short 2',
  },
  // Col 11-12: Three Stacked
  farRightTop: {
    id: 'R-qpna0WLNI',
    thumb: thumbRQ,
    title: 'Short 1',
  },
  farRightMid: {
    id: 'ZSWNahHtPyI',
    thumb: thumbZS,
    title: 'Short 2',
  },
  farRightBottom: {
    id: 'XBbZCDRlkAg',
    thumb: thumbXB,
    title: 'Short 3',
  },
};

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  const renderThumbnail = (video, extraClass = '') => (
    <div
      onClick={() => setActiveVideo(video.id)}
      className={`relative group rounded-xl overflow-hidden shadow-md bg-black cursor-pointer border border-neutral-700/30 ${extraClass}`}
    >
      <img
        src={video.thumb}
        alt={video.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <YouTubePlayButton className="w-10 h-7" />
      </div>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#0F0F0F] pt-12 pb-16 text-neutral-900">
      {/* Container for Video Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-3.5 items-start">
          {/* Col 1-2: Tall Left Video */}
          <div className="col-span-2 h-[460px]">
            {renderThumbnail(VIDEOS.tallLeft, 'h-full')}
          </div>

          {/* Col 3-5: Two Stacked Videos */}
          <div className="col-span-3 flex flex-col gap-3 h-[460px]">
            <div className="h-[224px]">
              {renderThumbnail(VIDEOS.midLeftTop, 'h-full')}
            </div>
            <div className="h-[224px]">
              {renderThumbnail(VIDEOS.midLeftBottom, 'h-full')}
            </div>
          </div>

          {/* Col 6-8: Tall Centerpiece Video */}
          <div className="col-span-3 h-[560px]">
            {renderThumbnail(VIDEOS.centerpiece, 'h-full')}
          </div>

          {/* Col 9-10: Two Stacked Videos */}
          <div className="col-span-2 flex flex-col gap-3 h-[460px] pt-3">
            <div className="h-[216px]">
              {renderThumbnail(VIDEOS.midRightTop, 'h-full')}
            </div>
            <div className="h-[216px]">
              {renderThumbnail(VIDEOS.midRightBottom, 'h-full')}
            </div>
          </div>

          {/* Col 11-12: Three Stacked Videos */}
          <div className="col-span-2 flex flex-col gap-2.5 h-[460px] pt-3">
            <div className="h-[140px]">
              {renderThumbnail(VIDEOS.farRightTop, 'h-full')}
            </div>
            <div className="h-[140px]">
              {renderThumbnail(VIDEOS.farRightMid, 'h-full')}
            </div>
            <div className="h-[140px]">
              {renderThumbnail(VIDEOS.farRightBottom, 'h-full')}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Fallback Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden">
          {renderThumbnail(VIDEOS.centerpiece, 'col-span-2 aspect-[4/3]')}
          {renderThumbnail(VIDEOS.tallLeft, 'aspect-[9/16]')}
          {renderThumbnail(VIDEOS.midLeftTop, 'aspect-video')}
          {renderThumbnail(VIDEOS.midLeftBottom, 'aspect-video')}
          {renderThumbnail(VIDEOS.midRightTop, 'aspect-video')}
          {renderThumbnail(VIDEOS.midRightBottom, 'aspect-video')}
          {renderThumbnail(VIDEOS.farRightTop, 'aspect-video')}
          {renderThumbnail(VIDEOS.farRightMid, 'aspect-video')}
          {renderThumbnail(VIDEOS.farRightBottom, 'aspect-video')}
        </div>

        {/* Bottom Diagonal Ribbon Background & Impact Narrative Text */}
        <div className="relative mt-8 md:mt-12 pt-12 pb-8">
          {/* Diagonal Peach/Orange Wave Ribbon Shape */}
          <div
            className="absolute inset-0 pointer-events-none bg-no-repeat z-0 bg-white"
            style={{
              backgroundImage: `url(${rainyShape})`,
              backgroundPosition: 'left bottom',
              backgroundSize: '100% auto',
              opacity: 0.95,
            }}
          />

          <div className="relative z-10 max-w-4xl px-2 sm:px-4">
            <p className="font-['Montserrat'] font-semibold text-neutral-800  text-sm sm:text-base md:text-lg leading-relaxed text-left m-0">
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
