import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import WorkExperience from '../components/WorkExperience';
import AltCoworkingSection from '../components/AltCoworkingSection';
import ContactSection from '../components/ContactSection';

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-[#0F0F0F]">
      <Hero />
      <AboutSection />
      <WorkExperience />
      <AltCoworkingSection />
      <ContactSection />
    </div>
  );
}
