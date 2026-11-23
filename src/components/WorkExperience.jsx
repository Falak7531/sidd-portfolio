import React from 'react';
import cameraImg from '../assets/camera.webp';

export default function WorkExperience() {
  return (
    <section className="relative bg-[#0F0F0F] text-[#F8F8F8]">
      {/* 50% split background: Left 50% dark (#0F0F0F), Right 50% secondary surface (#202020) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#0F0F0F]" />
        <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#202020]" />
      </div>

      <div className="ref-container relative z-10">
        <div className="flex flex-wrap items-center -mx-[15px]">
          {/* Left column: DIGITAL KALAKAAR (col-lg-4) */}
          <div className="w-full lg:w-4/12 px-[15px] pt-12 pb-24 bg-[#0F0F0F] text-[#F8F8F8]">
            <h3 className="h3-heading text-[#5DD62C] mb-2">
              QUITE LOUD
            </h3>
            <p className="mb-4 text-[#F8F8F8]/80 font-medium">APR 2026 – PRESENT</p>
            <span className="block mt-2 pr-12 text-[#F8F8F8]/80 text-[0.875rem]">
              <p className="mb-4">
                <span className="text-[1rem] leading-relaxed">
                  Video editing and creative storytelling for digital content.
                </span>
              </p>
            </span>

            <h3 className="h3-heading text-[#5DD62C] mb-2">
              D2F ENTERTAINMENTS
            </h3>
            <p className="mb-4 text-[#F8F8F8]/80 font-medium">DEC 2025 – APR 2026</p>
            <span className="block mt-2 pr-12 text-[#F8F8F8]/80 text-[0.875rem]">
              <p className="mb-4">
                <span className="text-[1rem] leading-relaxed">
                  Social videos, promotional edits and campaign motion graphics.
                </span>
              </p>
            </span>

             <h3 className="h3-heading text-[#5DD62C] mb-2">
              RIKAA
            </h3>
            <p className="mb-4 text-[#F8F8F8]/80 font-medium">NOV 2025 – MAR 2026</p>
            <span className="block mt-2 pr-12 text-[#F8F8F8]/80 text-[0.875rem]">
              <p className="mb-4">
                <span className="text-[1rem] leading-relaxed">
                  Social media management and digital brand presence.
                </span>
              </p>
            </span>
          </div>

          {/* Center column: Camera Image (col-lg-4, centered directly across 50% split) */}
          <div className="hidden lg:block w-full lg:w-4/12 px-[15px]">
            <img
              src={cameraImg}
              alt=""
              className="max-w-full h-auto block mx-auto"
            />
            <p className="mb-0">
              <br />
            </p>
          </div>

          {/* Right column: free lancing (col-lg-4) */}
          <div className="w-full lg:w-4/12 px-[15px] pt-12 pb-24 bg-[#202020] text-[#F8F8F8]">
            <h3 className="h3-heading text-[#5DD62C] mb-2">STREAK</h3>
            <p className="mb-4 text-[#F8F8F8]/80 font-medium">SEP 2025 – MAR 2026</p>
            <p className="mb-4 text-[#F8F8F8]/90 leading-relaxed">
             Branded visual content and promotional videos.
            </p>

            <h3 className="h3-heading text-[#5DD62C] mb-2">ALT.F COWORKING</h3>
            <p className="mb-4 text-[#F8F8F8]/80 font-medium">MAY – JUL 2025</p>
            <p className="mb-4 text-[#F8F8F8]/90 leading-relaxed">
             Promotional videos and motion graphics.
            </p>

             <h3 className="h3-heading text-[#5DD62C] mb-2">U7 ASSOCIATES</h3>
            <p className="mb-4 text-[#F8F8F8]/80 font-medium">MAR – APR 2025</p>
            <p className="mb-4 text-[#F8F8F8]/90 leading-relaxed">
             Video editing and creative production.
            </p>

            <p className="mb-4 text-[#F8F8F8]/90 leading-relaxed">
              Promotional Content For Brands, providing them better reach and organic impressions on
              social media platforms
            </p>
            <span className="block mt-2 pr-12 text-[#F8F8F8]/70 text-[0.875rem]">
              <p className="mb-4">
                <br />
              </p>
            </span>
            <span className="block mt-2 pr-12 text-[#F8F8F8]/70 text-[0.875rem]">
              <br />
            </span>
            <span className="flex items-baseline font-bold">
              <span className="flex grow items-center">
                <span>
                  <br />
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}