import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { Button } from './ui/button';
import { BriefcaseBusiness } from 'lucide-react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-nbdark border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/">
              <h2 className="text-2xl font-bold font-display mb-4">
                <span className="text-gradient">NB</span>Media
              </h2>
            </Link>
            <p className="text-nbgray mb-6 max-w-md">
              Creating tomorrow's digital experiences today. We're the undisputed leader in YouTube content creation with a vibrant, Gen Z-friendly culture.
            </p>
            <SocialLinks />
          </div>
          
          <div className="md:text-center">
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-nbgray hover:text-nborange transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-nbgray hover:text-nborange transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#life" className="text-nbgray hover:text-nborange transition-colors duration-300">
                  Life at NB
                </a>
              </li>
              <li>
                <a href="#faq" className="text-nbgray hover:text-nborange transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/careers" className="text-nbgray hover:text-nborange transition-colors duration-300">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-nbgray">hello@nbmedia.com</li>
              <li className="text-nbgray">+1 (555) 123-4567</li>
              <li className="text-nbgray">
                123 Content Creator Ave<br />
                Digital City, DC 12345
              </li>
            </ul>
          </div>
        </div>
        
        {/* Join Our Team Button */}
        <div className="mt-10 flex justify-center">
          <a href="https://www.keka.com/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-white font-medium px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 bg-orange-500 hover:bg-orange-400 rounded-md">
              <BriefcaseBusiness className="w-5 h-5" />
              Join Our Team
            </Button>
          </a>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-nbgray text-sm">
            © {currentYear} NB Media. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-nbgray">
              <li>
                <a href="#" className="hover:text-nborange transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-nborange transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;