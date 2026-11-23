import React from 'react';
import heroBg from '../../public/assets/image.png';
import { LinkedInIcon, InstagramIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative bg-[#0F0F0F] text-[#F8F8F8] pt-[200px] pb-[160px] overflow-hidden">
      {/* Background photograph with dark overlay and bottom curve mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: 'ellipse(100% 100% at 50% 0%)',
        }}
      >
        <span
          className="absolute inset-0 block bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: '50% 67.032028%',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />
      </div>

      {/* Content */}
      <div className="ref-container relative z-10">
        <h1 className="display-1-heading text-[#F8F8F8] mb-2">bhaVNISH SHARMA</h1>
        <div className="text-left select-none">
          <a
            href="/website/social/linkedin"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-block align-middle m-[0.2rem] text-[#F8F8F8] hover:text-[#5DD62C] no-underline transition-colors"
          >
            <span className="flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-[#202020] hover:border-[#5DD62C] border border-neutral-800 rounded-[0.4rem] shadow-sm">
              <LinkedInIcon className="w-[15px] h-[15px]" />
            </span>
          </a>
          <a
            href="/website/social/instagram"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-block align-middle m-[0.2rem] text-[#F8F8F8] hover:text-[#5DD62C] no-underline transition-colors"
          >
            <span className="flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-[#202020] hover:border-[#5DD62C] border border-neutral-800 rounded-[0.4rem] shadow-sm">
              <InstagramIcon className="w-[15px] h-[15px]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}