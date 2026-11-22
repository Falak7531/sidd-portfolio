import React from 'react';
import HomeHero from '../components/home/HomeHero';
import PortfolioBanner from '../components/home/PortfolioBanner';
import ShotOnIphone from '../components/home/ShotOnIphone';
import FilmCategories from '../components/home/FilmCategories';
import DocumentarySection from '../components/home/DocumentarySection';
import VideoGallery from '../components/home/VideoGallery';
import InstagramSection from '../components/home/InstagramSection';

export default function HomePage({ onNavigate }) {
  return (
    <div className="w-full flex flex-col bg-[#0F0F0F]">
      <HomeHero />
      <PortfolioBanner onNavigate={onNavigate} />
      <ShotOnIphone />
      <FilmCategories onNavigate={onNavigate} />
      <DocumentarySection />
      <VideoGallery />
      <InstagramSection />
    </div>
  );
}
