import React, { useState } from 'react';
import navLogo from '../assets/nav_logo.png';
import { BarsIcon } from './Icons';

export default function Navbar({ activePage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, page, href) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    window.history.pushState({}, '', href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#0F0F0F] text-[0.8125rem]">
      <div className="ref-container py-3 px-0">
        {/* Desktop Navbar */}
        <nav
          aria-label="Main"
          className="hidden lg:block bg-[#202020] text-[#F8F8F8] rounded-full px-4 shadow-sm border border-neutral-800"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => handleNavClick(e, 'home', '/')}
              className="mr-4 py-0 flex items-center shrink-0"
            >
              <img
                src={navLogo}
                alt="bhavnisharma"
                width="95"
                height="40"
                className="max-w-full h-[2.5rem] w-auto object-contain brightness-110"
              />
            </a>

            {/* Navigation Pills */}
            <ul
              role="menu"
              className="flex flex-row items-center mr-auto list-none m-0 p-0 flex-nowrap gap-1"
            >
              <li role="presentation">
                <a
                  role="menuitem"
                  href="/"
                  onClick={(e) => handleNavClick(e, 'home', '/')}
                  className={`block py-2 px-6 rounded-[10rem] no-underline transition-colors ${
                    activePage === 'home'
                      ? 'bg-[#5DD62C] text-[#0F0F0F] font-semibold shadow-sm'
                      : 'text-[#F8F8F8]/80 hover:text-[#5DD62C] hover:bg-[#337418]/20'
                  }`}
                >
                  <span>Home</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  role="menuitem"
                  href="/work"
                  onClick={(e) => handleNavClick(e, 'work', '/work')}
                  className={`block py-2 px-6 rounded-[10rem] no-underline transition-colors ${
                    activePage === 'work'
                      ? 'bg-[#5DD62C] text-[#0F0F0F] font-semibold shadow-sm'
                      : 'text-[#F8F8F8]/80 hover:text-[#5DD62C] hover:bg-[#337418]/20'
                  }`}
                >
                  <span>Work</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  role="menuitem"
                  href="/about"
                  onClick={(e) => handleNavClick(e, 'about', '/about')}
                  className={`block py-2 px-6 rounded-[10rem] no-underline transition-colors ${
                    activePage === 'about'
                      ? 'bg-[#5DD62C] text-[#0F0F0F] font-semibold shadow-sm'
                      : 'text-[#F8F8F8]/80 hover:text-[#5DD62C] hover:bg-[#337418]/20'
                  }`}
                >
                  <span>About</span>
                </a>
              </li>
            </ul>

            {/* Right side buttons */}
            <ul className="flex flex-row items-center gap-2 flex-wrap shrink-0 justify-end pl-3 list-none m-0 p-0">
              <li>
                <a
                  href="/web/login"
                  className="block py-2 px-3 rounded-[0.125rem] border border-neutral-700 text-[#F8F8F8]/80 hover:text-[#5DD62C] hover:border-[#5DD62C] no-underline transition-colors"
                >
                  Sign in
                </a>
              </li>
              <li>
                <div className="px-0">
                  <a
                    href="/contactus"
                    className="inline-block py-2 px-4 rounded-[0.125rem] bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-semibold border border-[#5DD62C] hover:border-[#337418] no-underline whitespace-nowrap transition-colors shadow-sm"
                  >
                    Contact Me
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav
          aria-label="Mobile"
          className="block lg:hidden bg-[#202020] text-[#F8F8F8] rounded-full mx-1 px-3 py-2 shadow-sm border border-neutral-800"
        >
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex grow items-center">
              <a
                href="/"
                onClick={(e) => handleNavClick(e, 'home', '/')}
                className="py-0 flex items-center"
              >
                <img
                  src={navLogo}
                  alt="bhavnisharma"
                  width="95"
                  height="40"
                  className="max-w-full h-[2.5rem] w-auto object-contain brightness-110"
                />
              </a>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F8F8F8]/80 hover:text-[#5DD62C] bg-transparent border-0 cursor-pointer"
              aria-label="Toggle navigation"
            >
              <BarsIcon className="w-[18px] h-[18px]" />
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-col gap-2 px-2 pb-2">
              <a
                href="/"
                onClick={(e) => handleNavClick(e, 'home', '/')}
                className={`block py-2 px-4 rounded-full no-underline transition-colors ${
                  activePage === 'home'
                    ? 'bg-[#5DD62C] text-[#0F0F0F] font-semibold'
                    : 'text-[#F8F8F8]/80 hover:text-[#5DD62C]'
                }`}
              >
                Home
              </a>
              <a
                href="/work"
                onClick={(e) => handleNavClick(e, 'work', '/work')}
                className={`block py-2 px-4 rounded-full no-underline transition-colors ${
                  activePage === 'work'
                    ? 'bg-[#5DD62C] text-[#0F0F0F] font-semibold'
                    : 'text-[#F8F8F8]/80 hover:text-[#5DD62C]'
                }`}
              >
                Work
              </a>
              <a
                href="/about"
                onClick={(e) => handleNavClick(e, 'about', '/about')}
                className={`block py-2 px-4 rounded-full no-underline transition-colors ${
                  activePage === 'about'
                    ? 'bg-[#5DD62C] text-[#0F0F0F] font-semibold'
                    : 'text-[#F8F8F8]/80 hover:text-[#5DD62C]'
                }`}
              >
                About
              </a>
              <div className="flex gap-2 mt-2">
                <a
                  href="/web/login"
                  className="flex-1 text-center py-2 px-4 rounded-[0.125rem] border border-neutral-700 text-[#F8F8F8]/80 hover:text-[#5DD62C] no-underline"
                >
                  Sign in
                </a>
                <a
                  href="/contactus"
                  className="flex-1 text-center py-2 px-4 rounded-[0.125rem] bg-[#5DD62C] hover:bg-[#337418] text-[#0F0F0F] hover:text-[#F8F8F8] font-semibold no-underline"
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
