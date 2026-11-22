import React from 'react';
import appleLogo from '../../assets/apple_logo.svg';

export default function ShotOnIphone() {
  return (
    <section className="w-full bg-white py-12 md:py-16 flex items-center justify-center">
      <div className="ref-container text-center">
        <div className="inline-flex items-center justify-center gap-3">
          <span className="text-neutral-900 font-['Montserrat'] text-3xl md:text-4xl font-light tracking-tight">
            Shot On iPhone
          </span>
          <img
            src={appleLogo}
            alt="Apple logo"
            className="w-7 h-7 md:w-8 md:h-8 object-contain mb-1"
          />
        </div>
      </div>
    </section>
  );
}
