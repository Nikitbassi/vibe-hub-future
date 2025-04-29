
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'py-3 bg-nbdark/80 backdrop-blur-md' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/" className="cursor-hover">
            <h1 className="text-xl md:text-2xl font-bold font-display">
              <span className="text-gradient">NB</span>Media
            </h1>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-nborange transition-colors duration-300 cursor-hover">
              Home
            </Link>
            <a href="#about" className="text-white hover:text-nborange transition-colors duration-300 cursor-hover">
              About
            </a>
            <a href="#life" className="text-white hover:text-nborange transition-colors duration-300 cursor-hover">
              Life at NB
            </a>
            <Link to="/careers" className="text-white hover:text-nborange transition-colors duration-300 cursor-hover">
              Careers
            </Link>
            <SocialLinks iconSize={18} />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white cursor-hover"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-5">
              <span 
                className={`block absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ${
                  menuOpen ? 'rotate-45 top-2' : 'top-0'
                }`}
              ></span>
              <span 
                className={`block absolute h-0.5 w-6 bg-white transform transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                } top-2`}
              ></span>
              <span 
                className={`block absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ${
                  menuOpen ? '-rotate-45 top-2' : 'top-4'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-30 bg-nbdark transform transition-transform duration-500 pt-20 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <nav className="container mx-auto px-8 py-10 flex flex-col h-full">
          <Link 
            to="/" 
            className="text-3xl font-display my-4 cursor-hover"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <a 
            href="#about" 
            className="text-3xl font-display my-4 cursor-hover"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#life" 
            className="text-3xl font-display my-4 cursor-hover"
            onClick={() => setMenuOpen(false)}
          >
            Life at NB
          </a>
          <Link 
            to="/careers" 
            className="text-3xl font-display my-4 cursor-hover"
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </Link>
          <div className="mt-auto mb-8">
            <SocialLinks iconSize={24} className="justify-start" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
