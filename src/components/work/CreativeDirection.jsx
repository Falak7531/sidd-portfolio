import React, { useState, useEffect } from 'react';
import floats13Shape from '../../assets/shape_floats_13.svg';
import floats06Shape from '../../assets/shape_floats_06.svg';
import rainy01CardShape from '../../assets/shape_rainy_01_card.svg';
import wavy26Shape from '../../assets/shape_wavy_26.svg';
import floats09Shape from '../../assets/shape_floats_09.svg';
import floats05Shape from '../../assets/shape_floats_05.svg';
import rainy10Shape from '../../assets/shape_rainy_10.svg';

function getDriveLinks(url) {
  const match = url.match(/drive\.google\.com\/file\/d\/([^/?#]+)/i);
  if (!match) return { preview: url, view: url, download: url };
  const id = match[1];
  return {
    preview: `https://drive.google.com/file/d/${id}/preview`,
    view: `https://drive.google.com/file/d/${id}/view`,
    download: `https://drive.google.com/uc?export=download&id=${id}`,
  };
}

const DESIGNS = [
  {
    heading: 'DESIGN 1',
    label: 'VIEW PDF',
    ...getDriveLinks(
      'https://drive.google.com/file/d/18y7YkIrTTaHdBFq0iUvddpShEKolsSYG/view?usp=drive_link'

    ),
  },
  {
    heading: 'DESIGN 2',
    label: 'VIEW PDF',
    ...getDriveLinks(

       'https://drive.google.com/file/d/17dr86h2LVECb3XaL8bdc6QzZOd9nBxyo/view?usp=drive_link'
    ),
  },
  {
    heading: 'DESIGN 3',
    label: 'VIEW PDF',
    ...getDriveLinks(
      'https://drive.google.com/file/d/1qQ9K0vVmxAOpvLnB6jl4AKcj-GorUUp4/view?usp=drive_link'
    ),
  },
  {
    heading: 'DESIGN 4',
    label: 'VIEW PDF',
    ...getDriveLinks(
      'https://drive.google.com/file/d/1xzXeYpdbjE6PU_BwXnjBcbKA9TTEFcVR/view?usp=drive_link'
    ),
  },
  {
    heading: 'DESIGN 5',
    label: 'VIEW PDF',
    ...getDriveLinks(
      'https://drive.google.com/file/d/1-5SVGBgVret8DXavO3ye7i3hi-LXzRLn/view?usp=drive_link'
    ),
  },
  {
    heading: 'DESIGN 6',
    label: 'VIEW PDF',
    ...getDriveLinks(
      'https://drive.google.com/file/d/1I53KHw_9RAiARgTnJjCLkc1WaglRPo4l/view?usp=drive_link'
    ),
  },
  {
    heading: 'DESIGN 7',
    label: 'VIEW PDF',
    ...getDriveLinks(
      'https://drive.google.com/file/d/1OjbnDR2i8lzws4KzqV1-CbBbQzKRxsPe/view?usp=drive_link'
    ),
  },
  {
    heading: 'DESIGN 8',
    label: 'VIEW PDF',
    ...getDriveLinks(
      'https://drive.google.com/file/d/1oIU_6G127tdGHuL3ClEDL8o7X6pNYcOw/view?usp=drive_link'
      
     
    ),
  },
];

export default function CreativeDirection() {
  const [activeDesign, setActiveDesign] = useState(null);

  useEffect(() => {
    if (!activeDesign) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveDesign(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeDesign]);

  return (
    <section
      id="SHORT-FILM-6"
      className="relative w-full overflow-hidden bg-[#0F0F0F] text-[#F8F8F8] pt-14 pb-16"
    >
      {/* Background Floating Shape */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-40 z-0"
        style={{ backgroundImage: `url(${floats13Shape})` }}
      />

      <div className="relative z-10 ref-container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-['Bebas_Neue'] uppercase text-4xl sm:text-5xl md:text-6xl tracking-wider text-[#F8F8F8] m-0">
            Design
          </h2>
          <p className="font-['Montserrat'] text-xs sm:text-sm text-[#5DD62C] mt-1 m-0">
            Digital Kalakaar
          </p>
        </div>

        {/* 12-Column Irregular Grid for Desktop & Adaptive Grid for Mobile */}
        <div className="flex flex-col gap-4">
          {/* ROW 1: 4 Cards (cols: 3 + 2 + 4 + 3 = 12) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Card 1: DESIGN 1 (3 cols) */}
            <button
              type="button"
              onClick={() => setActiveDesign(DESIGNS[0])}
              className="group lg:col-span-3 relative rounded-[20px] p-6 shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px] text-left cursor-pointer border-0 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgb(255, 255, 255) -400%, rgb(51, 48, 56) 100%)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${floats06Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white group-hover:text-[#5DD62C] transition-colors tracking-wide m-0">
                  {DESIGNS[0].heading}
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <span className="inline-block py-2 px-5 rounded-full bg-[#5DD62C] group-hover:bg-[#337418] text-[#0F0F0F] group-hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm">
                  {DESIGNS[0].label}
                </span>
              </div>
            </button>

            {/* Card 2: DESIGN 2 (2 cols) */}
            <button
              type="button"
              onClick={() => setActiveDesign(DESIGNS[1])}
              className="group lg:col-span-2 relative rounded-[20px] p-6 bg-[#F8F8F8] text-[#0F0F0F] shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px] text-left cursor-pointer border-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${rainy01CardShape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-[#0F0F0F] group-hover:text-[#337418] transition-colors tracking-wide m-0">
                  {DESIGNS[1].heading}
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <span className="inline-block py-2 px-4 rounded-full bg-[#5DD62C] group-hover:bg-[#337418] text-[#0F0F0F] group-hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm whitespace-nowrap">
                  {DESIGNS[1].label}
                </span>
              </div>
            </button>

            {/* Card 3: DESIGN 3 (4 cols) */}
            <button
              type="button"
              onClick={() => setActiveDesign(DESIGNS[2])}
              className="group lg:col-span-4 relative rounded-[20px] p-6 shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px] text-left cursor-pointer border-0 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgb(255, 255, 255) -400%, rgb(51, 48, 56) 100%)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-30 bg-cover bg-center"
                style={{ backgroundImage: `url(${wavy26Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl text-white group-hover:text-[#5DD62C] transition-colors tracking-wide m-0">
                  {DESIGNS[2].heading}
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <span className="inline-block py-2 px-5 rounded-full bg-[#5DD62C] group-hover:bg-[#337418] text-[#0F0F0F] group-hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm">
                  {DESIGNS[2].label}
                </span>
              </div>
            </button>

            {/* Card 4: DESIGN 4 (3 cols) */}
            <button
              type="button"
              onClick={() => setActiveDesign(DESIGNS[3])}
              className="group lg:col-span-3 relative rounded-[20px] p-6 bg-[#F8F8F8] text-[#0F0F0F] shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px] text-left cursor-pointer border-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${floats09Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-[#0F0F0F] group-hover:text-[#337418] transition-colors tracking-wide m-0">
                  {DESIGNS[3].heading}
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <span className="inline-block py-2 px-5 rounded-full bg-[#5DD62C] group-hover:bg-[#337418] text-[#0F0F0F] group-hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm">
                  {DESIGNS[3].label}
                </span>
              </div>
            </button>
          </div>

          {/* ROW 2: 4 Cards (cols: 2 + 4 + 4 + 2 = 12) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Card 5: DESIGN 5 (2 cols) */}
            <button
              type="button"
              onClick={() => setActiveDesign(DESIGNS[4])}
              className="group lg:col-span-2 relative rounded-[20px] p-6 shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px] text-left cursor-pointer border-0 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgb(255, 255, 255) -400%, rgb(51, 116, 24) 100%)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-30 bg-cover bg-center"
                style={{ backgroundImage: `url(${rainy01CardShape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-white group-hover:text-[#5DD62C] transition-colors tracking-wide m-0">
                  {DESIGNS[4].heading}
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <span className="inline-block py-2 px-4 rounded-full bg-[#202020] group-hover:bg-[#0F0F0F] text-[#F8F8F8] border border-[#5DD62C]/40 font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm whitespace-nowrap">
                  {DESIGNS[4].label}
                </span>
              </div>
            </button>

            {/* Card 6: DESIGN 6 (4 cols) */}
            <button
              type="button"
              onClick={() => setActiveDesign(DESIGNS[5])}
              className="group lg:col-span-4 relative rounded-[20px] p-6 bg-[#F8F8F8] text-[#0F0F0F] shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px] text-left cursor-pointer border-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${wavy26Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F] group-hover:text-[#337418] transition-colors tracking-wide m-0">
                  {DESIGNS[5].heading}
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <span className="inline-block py-2 px-5 rounded-full bg-[#5DD62C] group-hover:bg-[#337418] text-[#0F0F0F] group-hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm">
                  {DESIGNS[5].label}
                </span>
              </div>
            </button>

            {/* Card 7: DESIGN 7 (4 cols) */}
            <button
              type="button"
              onClick={() => setActiveDesign(DESIGNS[6])}
              className="group lg:col-span-4 relative rounded-[20px] p-6 shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px] text-left cursor-pointer border-0 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgb(255, 255, 255) -400%, rgb(51, 116, 24) 100%)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${floats05Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl lg:text-5xl text-white group-hover:text-[#5DD62C] transition-colors tracking-wide m-0">
                  {DESIGNS[6].heading}
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <span className="inline-block py-2 px-5 rounded-full bg-[#5DD62C] group-hover:bg-[#337418] text-[#0F0F0F] group-hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm">
                  {DESIGNS[6].label}
                </span>
              </div>
            </button>

            {/* Card 8: DESIGN 8 (2 cols) */}
            <button
              type="button"
              onClick={() => setActiveDesign(DESIGNS[7])}
              className="group lg:col-span-2 relative rounded-[20px] p-6 bg-[#F8F8F8] text-[#0F0F0F] shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px] text-left cursor-pointer border-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${rainy10Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-[#0F0F0F] group-hover:text-[#337418] transition-colors tracking-wide m-0">
                  {DESIGNS[7].heading}
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <span className="inline-block py-2 px-4 rounded-full bg-[#5DD62C] group-hover:bg-[#337418] text-[#0F0F0F] group-hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm whitespace-nowrap">
                  {DESIGNS[7].label}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* PDF Popup Modal */}
      {activeDesign && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveDesign(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[88vh] bg-[#161616] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-5 py-3 bg-[#161616] border-b border-neutral-800">
              <div className="flex items-center gap-3 min-w-0">
                <h3 className="font-['Bebas_Neue'] text-2xl text-white tracking-wide m-0">
                  {activeDesign.heading}
                </h3>
                <span className="hidden sm:inline-block py-1 px-3 rounded-full bg-[#5DD62C]/15 text-[#5DD62C] font-['Montserrat'] font-semibold text-[11px] tracking-wider uppercase truncate">
                  {activeDesign.label}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeDesign.view}
                  target="_blank"
                  rel="noreferrer"
                  className="py-1.5 px-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-['Montserrat'] font-medium text-xs transition-colors no-underline"
                >
                  Open in Drive
                </a>
                <a
                  href={activeDesign.download}
                  target="_blank"
                  rel="noreferrer"
                  className="py-1.5 px-3 rounded-full bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs transition-colors no-underline"
                >
                  Download PDF
                </a>
                <button
                  type="button"
                  onClick={() => setActiveDesign(null)}
                  aria-label="Close PDF preview"
                  className="text-white/80 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer border-0 shrink-0"
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              src={activeDesign.preview}
              title={activeDesign.heading}
              className="w-full flex-1 border-0 bg-[#161616]"
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </section>
  );
}