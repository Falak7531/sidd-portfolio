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
              <a
                href="https://www.facebook.com/DigitalKalakaar"
                target="_blank"
                rel="noreferrer"
                className="text-[#5DD62C] hover:text-[#337418] transition-colors no-underline"
              >
                DIGITAL KALAKAAR
              </a>
            </h3>
            <p className="mb-4 text-[#F8F8F8]/80 font-medium">July 2023 - Nov 25</p>
            <span className="block mt-2 pr-12 text-[#F8F8F8]/80 text-[0.875rem]">
              <p className="mb-4">
                <span className="text-[1rem] leading-relaxed">
                  Directed 15+ short films for social media pages with a combined following of over
                  10 million and shot over 900 Videos &amp; Short films.
                </span>
              </p>
            </span>
            <span className="block mt-2 pr-12 text-[#F8F8F8]/80 text-[0.875rem]">
              <p className="mb-4">
                <span className="text-[1rem] leading-relaxed">
                  Crafted compelling stories and ensured creative direction to enhance audience
                  engagement.
                </span>
              </p>
            </span>
            <span className="block mt-2 pr-12 text-[#F8F8F8]/80 text-[0.875rem]">
              <p className="mb-4">
                <span className="text-[1rem] leading-relaxed">
                  Managed tasks ranging from content ideation to editing, and as a DOP, elevated the
                  films with impactful lighting and shot composition
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
            <h3 className="h3-heading text-[#5DD62C] mb-2">free lancing</h3>
            <p className="mb-4 text-[#F8F8F8]/80 font-medium">March 2021 - March 2026</p>
            <p className="mb-4 text-[#F8F8F8]/90 leading-relaxed">
              Edited and produced over 450 social media videos, increasing clients&apos; engagement
              rates by 20%.
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