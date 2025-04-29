
import React, { useEffect, useRef } from 'react';
import Section from './Section';

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(element => observer.observe(element));

    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  // CSS for animation
  const animationStyles = `
    .hidden-element.show {
      opacity: 1;
      transform: translateY(0);
    }
    
    @keyframes scroll {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
  `;

  return (
    <Section id="about" className="relative overflow-hidden">
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 opacity-0 hidden-element transition-all duration-1000" style={{ transform: 'translateY(40px)' }}>
            The <span className="text-gradient">Visionary</span> Behind NB Media
          </h2>
          
          <div className="space-y-4 opacity-0 hidden-element transition-all duration-1000 delay-300" style={{ transform: 'translateY(40px)' }}>
            <p className="text-lg text-nbgray">
              Founded with a bold vision and an unwavering passion for digital storytelling, NB Media has grown from a one-person YouTube channel to a creative powerhouse reshaping the content creation landscape.
            </p>
            
            <p className="text-lg text-nbgray">
              Our founder's journey from humble beginnings to industry prominence inspires everything we do. We believe in authenticity, creativity, and pushing boundaries to deliver content that resonates with the new generation.
            </p>
            
            <blockquote className="border-l-4 border-nborange pl-4 mt-6 italic">
              "We don't just create content, we craft experiences that inspire and connect with audiences on a deeper level."
            </blockquote>
          </div>
        </div>
        
        <div className="relative aspect-square w-full max-w-md mx-auto md:ml-auto opacity-0 hidden-element transition-all duration-1000 delay-600" style={{ transform: 'translateY(40px)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-nborange to-nbyellow opacity-60 rounded-2xl transform rotate-3"></div>
          <div className="absolute inset-0 bg-nbdark rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Founder working on content" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-24 opacity-0 hidden-element transition-all duration-1000 delay-900" style={{ transform: 'translateY(40px)' }}>
        <h3 className="text-2xl md:text-3xl font-bold font-display mb-8">What Sets Us <span className="text-gradient">Apart</span></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-hover">
            <h4 className="text-xl font-display font-bold mb-3">Innovative Vision</h4>
            <p className="text-nbgray">We constantly push boundaries and explore new creative territories to stay ahead of digital trends.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-hover">
            <h4 className="text-xl font-display font-bold mb-3">Authentic Voice</h4>
            <p className="text-nbgray">Our content reflects genuine passion, creating meaningful connections with our audience.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-hover">
            <h4 className="text-xl font-display font-bold mb-3">Vibrant Culture</h4>
            <p className="text-nbgray">We foster a dynamic, creative environment where talent thrives and innovation flourishes.</p>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
    </Section>
  );
};

export default AboutUs;
