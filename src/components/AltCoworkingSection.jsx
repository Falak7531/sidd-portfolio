import React from 'react';
import altfLogo from '../assets/altf_logo.png';
import shapeFloats12 from '../assets/shape_floats_12.svg';

export default function AltCoworkingSection() {
  return (
    <section className="relative bg-[#0F0F0F] text-[#F8F8F8] pt-[56px] pb-[128px] overflow-hidden">
      {/* Star/particle decoration shape */}
      <div
        className="hidden md:block absolute inset-0 bg-top pointer-events-none"
        style={{
          backgroundImage: `url(${shapeFloats12})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat repeat',
        }}
      />

      <div className="ref-container relative">
        <div className="ref-grid-mode">
          {/* Logo item */}
          <div
            className="p-[10px] z-[3] order-1 lg:order-none"
            style={{
              gridRowStart: 1,
              gridColumnStart: 6,
              gridRowEnd: 4,
              gridColumnEnd: 8,
            }}
          >
            <img
              src={altfLogo}
              alt=""
              className="w-full h-full object-cover block mx-auto"
            />
          </div>

          {/* Date item */}
          <div
            className="py-[30px] px-[10px] z-[4] order-2 lg:order-none"
            style={{
              gridRowStart: 3,
              gridColumnStart: 6,
              gridRowEnd: 4,
              gridColumnEnd: 8,
            }}
          >
            <p className="text-center mb-4 text-[#5DD62C] font-medium">March 2026 - Present</p>
          </div>

          {/* Descriptions item */}
          <div
            className="py-[20px] px-[10px] z-[1] order-3 lg:order-none"
            style={{
              gridRowStart: 4,
              gridColumnStart: 1,
              gridRowEnd: 9,
              gridColumnEnd: 13,
            }}
          >
            <p className="text-center mb-4 text-[#F8F8F8]/90 leading-relaxed">
              Running the full content lifecycle-from ideation and scripting to production, editing,
              and publishing-serving as a one-person content studio delivering agile, platform
              optimized output that drives visibility and conversions.
            </p>
            <p className="text-center mb-4 text-[#F8F8F8]/90 leading-relaxed">
              Translated brand narratives into compelling video content-ranging from cinematic
              property shoots to dynamic interviews and motion graphics-while maintaining aesthetic
              consistency and emotional impact across platforms.
            </p>
            <p className="text-center mb-4 text-[#F8F8F8]/90 leading-relaxed">
              Orchestrated content strategies that fused creative vision with performance
              data-driving organic engagement and paid performance across Meta Ads, Google Ads, and
              social platforms, tailored to diverse audience touchpoints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}