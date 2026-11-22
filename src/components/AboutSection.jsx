import React from 'react';
import aboutPortrait from '../assets/about_portrait.svg';
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
              Dynamic and Visionary Filmmaker with over 4 years of professional experience in
              storytelling, video production, and expert editing.
            </p>
            <p className="mb-4 text-[#F8F8F8]/90 leading-relaxed">
              Adept at crafting compelling content, developing engaging scripts, and utilizing
              technical expertise to create visually striking projects that resonate with audiences.
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