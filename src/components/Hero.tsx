
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const headingElements = heroRef.current.querySelectorAll('.animate-on-mouse');
      
      headingElements.forEach((element, index) => {
        const factor = (index + 1) * 5;
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 md:px-8"
    >
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-nborange opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-nbyellow opacity-10 blur-[100px]"></div>
      
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-6 font-display text-balance max-w-4xl">
        <span className="block animate-on-mouse opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Creating Tomorrow's
        </span>
        <span className="block animate-on-mouse text-gradient opacity-0 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          Digital Experiences
        </span>
        <span className="block animate-on-mouse opacity-0 animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          Today
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-nbgray max-w-2xl text-center mt-4 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
        NB Media is the undisputed leader in YouTube content creation with a vibrant, Gen Z-friendly culture.
      </p>
      
      <div className="mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}>
        <a 
          href="#about" 
          className="cursor-hover rounded-full border-2 border-nborange px-8 py-3 text-white font-medium transition-all duration-300 hover:bg-nborange hover:text-white"
        >
          Discover Our Story
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" 
        style={{ animationDelay: "1.7s", animationFillMode: "forwards" }}
      >
        <p className="text-nbgray text-sm mb-2">Scroll to explore</p>
        <div className="w-0.5 h-8 bg-nbgray/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-nborange h-1/2 animate-[scroll_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
