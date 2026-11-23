import React from 'react';
import WorkHeading from '../components/work/WorkHeading';
import ShortFilmsBanner from '../components/work/ShortFilmsBanner';
import InstagramPortfolio from '../components/work/InstagramPortfolio';
import CreativeDirection from '../components/work/CreativeDirection';
import MotionGraphics from '../components/work/MotionGraphics';

export default function WorkPage() {
  return (
    <div className="w-full flex flex-col bg-[#0F0F0F]">

      <CreativeDirection />
      <MotionGraphics />
    </div>
  );
}
