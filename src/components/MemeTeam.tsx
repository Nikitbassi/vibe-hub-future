
import React, { useState } from 'react';
import { Laugh } from 'lucide-react';
import Section from './Section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MemePost {
  id: string;
  imageUrl: string;
  caption: string;
}

const MemeTeam: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Meme content collection
  const memeReels = [
    {
      id: "meme1",
      imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
      caption: "Monday meetings be like...",
    },
    {
      id: "meme2",
      imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      caption: "When the deadline is tomorrow but you're vibing",
    },
    {
      id: "meme3",
      imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      caption: "POV: You're explaining your code to the senior dev",
    },
    {
      id: "meme4",
      imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
      caption: "When someone touches your code and it breaks",
    },
    {
      id: "meme5",
      imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce",
      caption: "That feeling when your code works on the first try",
    },
    {
      id: "meme6",
      imageUrl: "https://images.unsplash.com/photo-1568110929299-c0ee02fecda7",
      caption: "Friday 4:55pm vs Monday 9:05am",
    },
  ];

  return (
    <Section id="meme-team" className="bg-nbdark/50">
      <div className="flex items-center justify-center mb-8">
        <Laugh className="mr-2 text-white" />
        <h3 className="text-2xl md:text-3xl font-bold font-display">The <span className="text-gradient">Meme</span> Team</h3>
      </div>
      
      <p className="text-lg text-nbgray text-center max-w-3xl mx-auto mb-12 opacity-0 hidden-element transition-all duration-1000 delay-300" style={{ transform: 'translateY(40px)' }}>
        Working hard but laughing harder! Check out our team's creative side through the trending memes and reels we create.
      </p>

      {/* Meme Reels Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full opacity-0 hidden-element transition-all duration-1000 delay-400"
        style={{ transform: 'translateY(40px)' }}
      >
        <CarouselContent className="py-4">
          {memeReels.map((meme, index) => (
            <CarouselItem key={meme.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
              <div 
                className="meme-container relative rounded-xl overflow-hidden aspect-square cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent opacity-70 z-10"></div>
                <img 
                  src={meme.imageUrl} 
                  alt={`Meme: ${meme.caption}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <p className="text-white font-medium">{meme.caption}</p>
                  <div className="mt-2 flex items-center text-xs text-white/70">
                    <span>@nbmedia_memes</span>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-nborange/40 to-nbyellow/20 z-5 opacity-0 transition-opacity duration-300 ${activeIndex === index ? 'opacity-30' : ''}`}></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6">
          <CarouselPrevious className="relative inset-auto mx-1" />
          <CarouselNext className="relative inset-auto mx-1" />
        </div>
      </Carousel>

      <div className="text-center mt-12 opacity-0 hidden-element transition-all duration-1000 delay-900" style={{ transform: 'translateY(40px)' }}>
        <a 
          href="https://www.instagram.com/nbmediaa/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="follow-btn inline-flex items-center gap-2 text-gradient font-medium cursor-hover px-6 py-3 rounded-full border border-nborange/50 hover:border-nborange transition-all duration-300"
        >
          See more memes on Instagram
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </Section>
  );
};

export default MemeTeam;
