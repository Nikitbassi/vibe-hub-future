
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import LifeAtNB from '@/components/LifeAtNB';
import CareersCTA from '@/components/CareersCTA';
import BlogTeaser from '@/components/BlogTeaser';
import FAQ from '@/components/FAQ';

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
              top: element.offsetTop - 80,
              // Adjust for header height
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

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(element => observer.observe(element));
    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return <div className="relative min-h-screen bg-nbdark text-white hide-cursor">
      <AnimatedCursor />
      <Navbar />
      
      <Hero />
      <AboutSection />
      <LifeAtNB />
      <CareersCTA />
      <FAQ />
      <BlogTeaser />
      
      <Footer />
      
      <style dangerouslySetInnerHTML={{
      __html: `
        .hidden-element {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.17, 0.55, 0.55, 1);
        }
        
        .hidden-element.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes scroll {
          0% {
            top: -100%;
          }
          100% {
            top: 100%;
          }
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        .shadow-glow {
          box-shadow: 0 0 25px rgba(255, 122, 0, 0.6);
        }
      `
    }} />
    </div>;
};
export default Index;
