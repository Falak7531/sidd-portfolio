import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';

export default function App() {
  const getInitialPage = () => {
    const path = window.location.pathname.toLowerCase();
    if (path === '/about') return 'about';
    if (path === '/work') return 'work';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/work') {
        setCurrentPage('work');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F] text-[#F8F8F8]">
      <Navbar activePage={currentPage} onNavigate={handleNavigate} />
      <main className="bg-[#0F0F0F] grow">
        {currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'work' ? (
          <WorkPage />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        )}
      </main>
      <Footer />
    </div>
  );
}
