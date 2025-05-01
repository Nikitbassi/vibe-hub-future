
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CountUp from './CountUp';
import StatsSection from './StatsSection';
import Section from './Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 hidden-element">
            <h2 className="text-3xl font-bold font-display md:text-4xl">
              Creating Tomorrow's <span className="text-gradient">Digital Experiences</span> Today
            </h2>
            <p className="text-nbgray text-lg">
              NB Media is more than just a content creation company. We're pioneers in digital storytelling, crafting experiences that captivate Gen Z and beyond.
            </p>
            <p className="text-nbgray text-lg">
              With millions of views across multiple platforms, we've redefined what it means to create engaging, authentic content that resonates with today's audience.
            </p>
            <div className="pt-6">
              <Link to="/about" className="inline-flex items-center text-gradient font-medium hover:underline">
                Learn more about us 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 hidden-element">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Team collaboration" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden translate-y-8">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Content planning" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden -translate-y-8">
              <img src="https://images.unsplash.com/photo-1626908013943-df2991bb9f89" alt="Video production" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f" alt="Equipment setup" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>
          </div>
        </div>
        
        <StatsSection />
      </div>
    </Section>
  );
};

export default AboutSection;
