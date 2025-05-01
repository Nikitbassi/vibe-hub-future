
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Section from './Section';

const CareersCTA: React.FC = () => {
  return (
    <Section id="careers-teaser" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-nborange/20 to-nbyellow/20"></div>
      <div className="max-w-3xl mx-auto relative z-10 text-center hidden-element">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
          Ready to <span className="text-gradient">Create</span> With Us?
        </h2>
        <p className="text-lg text-nbgray mb-10">
          Join our team of creators, dreamers, and innovators who are redefining the content landscape.
        </p>
        <Link to="/careers">
          <Button size="lg" className="bg-gradient-to-r from-nborange to-nbyellow text-white font-medium px-10 py-6 rounded-md transition-all duration-300 hover:shadow-glow hover:scale-105 text-xl">
            View Open Positions
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default CareersCTA;
