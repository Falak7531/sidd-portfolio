import React from 'react';
import footerLogo from '../assets/footer_logo.png';
import odooLogoTiny from '../assets/odoo_logo_tiny.png';
import { LinkedInIcon, YouTubeIcon, InstagramIcon, EnvelopeIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#F8F8F8]">
      <section className="pt-[32px]">
        <div className="ref-container">
          {/* Social icons */}
          <div className="mb-6 text-center select-none">
            <a
              href="/website/social/linkedin"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-block align-middle m-[0.2rem] text-[#F8F8F8] hover:text-[#5DD62C] no-underline transition-colors"
            >
              <span className="flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-[#202020] hover:border-[#5DD62C] border border-neutral-800 rounded-full shadow-sm">
                <LinkedInIcon className="w-[15px] h-[15px]" />
              </span>
            </a>
            <a
              href="/website/social/youtube"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="inline-block align-middle m-[0.2rem] text-[#F8F8F8] hover:text-[#5DD62C] no-underline transition-colors"
            >
              <span className="flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-[#202020] hover:border-[#5DD62C] border border-neutral-800 rounded-full shadow-sm">
                <YouTubeIcon className="w-[15px] h-[15px]" />
              </span>
            </a>
            <a
              href="/website/social/instagram"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-block align-middle m-[0.2rem] text-[#F8F8F8] hover:text-[#5DD62C] no-underline transition-colors"
            >
              <span className="flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-[#202020] hover:border-[#5DD62C] border border-neutral-800 rounded-full shadow-sm">
                <InstagramIcon className="w-[15px] h-[15px]" />
              </span>
            </a>
          </div>

          <p className="mb-4">
            <br />
          </p>

          {/* Email */}
          <ul className="list-none pl-0 mb-4 text-center">
            <li className="inline-flex items-center justify-center mx-4">
              <EnvelopeIcon className="w-[16px] h-[16px] mr-2 text-[#5DD62C] inline-block" />
              <a
                href="mailto:bhavnish121@gmail.com"
                className="text-[#5DD62C] hover:text-[#337418] transition-colors no-underline font-medium"
              >
                bhavnish121@gmail.com
              </a>
            </li>
          </ul>

          {/* Decorative center logo */}
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full lg:w-2/12 lg:ml-[41.666667%] px-[15px] pt-0">
              <a href="/" className="block">
                <img
                  src={footerLogo}
                  alt=""
                  className="max-w-full h-auto mx-auto block"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright bar */}
      <div className="bg-[#050505] border-t border-neutral-900">
        <div className="ref-container py-4">
          <div className="flex flex-wrap gap-y-2 -mx-[15px]">
            <div className="w-full sm:flex-1 px-[15px] text-center sm:text-left text-[#F8F8F8]/60 text-sm">
              <span className="mr-2">Copyright © Bhavnish Sharma</span>
            </div>
            <div className="w-full md:flex-1 px-[15px] text-center md:text-right text-[0.875em] mt-auto mb-0 text-[#F8F8F8]/70">
              <div>
                Powered by{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://www.odoo.com?utm_source=db&utm_medium=website"
                  className="inline-block py-[0.35em] px-[0.65em] text-[0.75em] font-bold leading-none text-[#F8F8F8] bg-[#202020] border border-neutral-700 rounded-[0.4rem] align-baseline no-underline"
                >
                  <img
                    alt="Odoo"
                    src={odooLogoTiny}
                    width="62"
                    height="20"
                    className="w-auto h-[1em] align-baseline inline opacity-90"
                  />
                </a>{' '}
                - Create a{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://www.odoo.com/app/website?utm_source=db&utm_medium=website"
                  className="text-[#5DD62C] hover:text-[#337418] transition-colors no-underline"
                >
                  free website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
