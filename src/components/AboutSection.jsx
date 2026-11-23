import React from 'react';
import aboutPortrait from '../../public/assets/aboutp.png';
import shapeRainy01 from '../assets/shape_rainy_01.svg';

export default function AboutSection() {
  return (
    <section className="relative bg-[#0F0F0F] text-[#F8F8F8] pt-[128px] pb-0">
      {/* Decorative diagonal shapes behind the image */}
      <div
        className="hidden md:block absolute inset-0 bg-bottom bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url(${shapeRainy01})`,
          backgroundSize: '100% auto',
        }}
      />

      <div className="ref-container relative">
        <div className="ref-grid-mode">
          {/* Portrait Image Item: grid rows 1 to 18, cols 1 to 7 */}
          <div
            className="p-[10px] z-[1]"
            style={{
              gridRowStart: 1,
              gridColumnStart: 1,
              gridRowEnd: 18,
              gridColumnEnd: 7,
            }}
          >
            <img
              src={aboutPortrait}
              alt=""
              className="w-full h-full object-contain mx-auto rounded-[0.4rem] block"
            />
          </div>

          {/* About Me Text Item: grid rows 6 to 12, cols 8 to 13 */}
          <div
            className="p-[10px] z-[3]"
            style={{
              gridRowStart: 6,
              gridColumnStart: 8,
              gridRowEnd: 12,
              gridColumnEnd: 13,
            }}
          >
            <h2 className="h2-heading text-[#5DD62C] mb-2">About me</h2>
            <p className="mb-4 text-[#F8F8F8]/90 leading-relaxed">
              I'm a Visual Designer and Video Editor who enjoys turning ideas into engaging visual stories. I work across video editing, motion graphics, color grading, and brand identity, creating content that not only looks good but communicates a clear message.
            </p>
            <p className="mb-4 text-[#F8F8F8]/90 leading-relaxed">
              From social media campaigns and brand promotions to music and corporate videos, I enjoy experimenting with visuals, storytelling, and creative direction. I've worked with multiple brands and creative teams, bringing concepts to life while maintaining quality and consistency under tight deadlines.
            </p>
            <p className="mb-4 text-[#F8F8F8]/90 leading-relaxed">
             Currently pursuing a B.Des in Graphic Design at Rishihood University, I'm constantly exploring new creative approaches and pushing the boundaries of design and storytelling.
            </p>
          </div>

          {/* Work Experience Pill Banner: grid rows 19 to 20, cols 3 to 11 */}
          <div
            className="bg-[#202020] border border-[#5DD62C]/30 text-[#F8F8F8] z-[2] p-[5px] rounded-[20px] mt-6 lg:mt-0 shadow-lg"
            style={{
              gridRowStart: 19,
              gridColumnStart: 3,
              gridRowEnd: 20,
              gridColumnEnd: 11,
            }}
          >
            <h2 className="h3-heading text-[#F8F8F8] text-center mb-0">Work experience</h2>
          </div>
        </div>
      </div>
    </section>
  );
}