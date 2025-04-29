
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import LifeAtNB from '../components/LifeAtNB';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.substring(1));
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Adjust for header height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-nbdark text-white overflow-hidden hide-cursor">
      <AnimatedCursor />
      <Navbar />
      <Hero />
      <AboutUs />
      <LifeAtNB />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
