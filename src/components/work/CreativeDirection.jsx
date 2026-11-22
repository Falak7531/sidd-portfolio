import React from 'react';
import floats13Shape from '../../assets/shape_floats_13.svg';
import floats06Shape from '../../assets/shape_floats_06.svg';
import rainy01CardShape from '../../assets/shape_rainy_01_card.svg';
import wavy26Shape from '../../assets/shape_wavy_26.svg';
import floats09Shape from '../../assets/shape_floats_09.svg';
import floats05Shape from '../../assets/shape_floats_05.svg';
import rainy10Shape from '../../assets/shape_rainy_10.svg';

export default function CreativeDirection() {
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
            CREATIVE DIRECTION
          </h2>
          <p className="font-['Montserrat'] text-xs sm:text-sm text-[#5DD62C] mt-1 m-0">
            Digital Kalakaar
          </p>
        </div>

        {/* 12-Column Irregular Grid for Desktop & Adaptive Grid for Mobile */}
        <div className="flex flex-col gap-4">
          {/* ROW 1: 4 Cards (cols: 3 + 2 + 4 + 3 = 12) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Card 1: SHORT FILM 1 (3 cols) */}
            <div
              className="lg:col-span-3 relative rounded-[20px] p-6 shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px]"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgb(255, 255, 255) -400%, rgb(51, 48, 56) 100%)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${floats06Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide m-0">
                  <a
                    href="https://www.facebook.com/watch/?v=584827733984339"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#5DD62C] transition-colors no-underline"
                  >
                    SHORT FILM 1
                  </a>
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <a
                  href="https://www.facebook.com/watch/?v=584827733984339"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 px-5 rounded-full bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm no-underline"
                >
                  AAKELAPAN
                </a>
              </div>
            </div>

            {/* Card 2: SHORT FILM 2 (2 cols) */}
            <div className="lg:col-span-2 relative rounded-[20px] p-6 bg-[#F8F8F8] text-[#0F0F0F] shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${rainy01CardShape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-[#0F0F0F] tracking-wide m-0">
                  <a
                    href="https://www.facebook.com/watch/?v=4142269189431431"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0F0F0F] hover:text-[#337418] no-underline"
                  >
                    SHORT FILM 2
                  </a>
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <a
                  href="https://www.facebook.com/watch/?v=4142269189431431"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 px-4 rounded-full bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm no-underline whitespace-nowrap"
                >
                  THE CAKE
                </a>
              </div>
            </div>

            {/* Card 3: SHORT FILM 3 (4 cols) */}
            <div
              className="lg:col-span-4 relative rounded-[20px] p-6 shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px]"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgb(255, 255, 255) -400%, rgb(51, 48, 56) 100%)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-30 bg-cover bg-center"
                style={{ backgroundImage: `url(${wavy26Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide m-0">
                  <a
                    href="https://www.facebook.com/watch/?v=571917808632619"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#5DD62C] transition-colors no-underline"
                  >
                    SHORT FILM 3
                  </a>
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <a
                  href="https://www.facebook.com/watch/?v=571917808632619"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 px-5 rounded-full bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm no-underline"
                >
                  KHANA
                </a>
              </div>
            </div>

            {/* Card 4: SHORTFILM 4 (3 cols) */}
            <div className="lg:col-span-3 relative rounded-[20px] p-6 bg-[#F8F8F8] text-[#0F0F0F] shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${floats09Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-[#0F0F0F] tracking-wide m-0">
                  <a
                    href="https://www.facebook.com/watch/?v=1129602768584393"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0F0F0F] hover:text-[#337418] no-underline"
                  >
                    SHORTFILM 4
                  </a>
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <a
                  href="https://www.facebook.com/watch/?v=1129602768584393"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 px-5 rounded-full bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm no-underline"
                >
                  KALAKAAR
                </a>
              </div>
            </div>
          </div>

          {/* ROW 2: 4 Cards (cols: 2 + 4 + 4 + 2 = 12) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Card 5: SHORT FILM 5 (2 cols) */}
            <div
              className="lg:col-span-2 relative rounded-[20px] p-6 shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px]"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgb(255, 255, 255) -400%, rgb(51, 116, 24) 100%)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-30 bg-cover bg-center"
                style={{ backgroundImage: `url(${rainy01CardShape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-white tracking-wide m-0">
                  <a
                    href="https://www.facebook.com/watch/?v=1082418679933229"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#5DD62C] no-underline"
                  >
                    SHORT FILM 5
                  </a>
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <a
                  href="https://www.facebook.com/watch/?v=1082418679933229"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 px-4 rounded-full bg-[#202020] hover:bg-[#0F0F0F] text-[#F8F8F8] border border-[#5DD62C]/40 font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm no-underline whitespace-nowrap"
                >
                  INTZAAR
                </a>
              </div>
            </div>

            {/* Card 6: SHORT FILM 6 (4 cols) */}
            <div className="lg:col-span-4 relative rounded-[20px] p-6 bg-[#F8F8F8] text-[#0F0F0F] shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${wavy26Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl lg:text-5xl text-[#0F0F0F] tracking-wide m-0">
                  <a
                    href="https://www.facebook.com/watch/?v=1080895180350908"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0F0F0F] hover:text-[#337418] no-underline"
                  >
                    SHORT FILM 6
                  </a>
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <a
                  href="https://www.facebook.com/watch/?v=1080895180350908"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 px-5 rounded-full bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm no-underline"
                >
                  AN ARTIST'S MODEL
                </a>
              </div>
            </div>

            {/* Card 7: SHORT FILM 7 (4 cols) */}
            <div
              className="lg:col-span-4 relative rounded-[20px] p-6 shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px]"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgb(255, 255, 255) -400%, rgb(51, 116, 24) 100%)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${floats05Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide m-0">
                  <a
                    href="https://www.facebook.com/watch/?v=1028368598538960"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#5DD62C] no-underline"
                  >
                    SHORT FILM 7
                  </a>
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <a
                  href="https://www.facebook.com/watch/?v=1028368598538960"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 px-5 rounded-full bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm no-underline"
                >
                  LAPATA MARD
                </a>
              </div>
            </div>

            {/* Card 8: SHORT FILM 8 (2 cols) */}
            <div className="lg:col-span-2 relative rounded-[20px] p-6 bg-[#F8F8F8] text-[#0F0F0F] shadow-xl overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div
                className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${rainy10Shape})` }}
              />
              <div className="relative z-10">
                <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-[#0F0F0F] tracking-wide m-0">
                  <a
                    href="https://www.facebook.com/watch/?v=1560324398144591"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0F0F0F] hover:text-[#337418] no-underline"
                  >
                    SHORT FILM 8
                  </a>
                </h3>
              </div>
              <div className="relative z-10 mt-4">
                <a
                  href="https://www.facebook.com/watch/?v=1560324398144591"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 px-4 rounded-full bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-['Montserrat'] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm no-underline whitespace-nowrap"
                >
                  THE THEIF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}