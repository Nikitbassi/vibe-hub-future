
import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import { Instagram, Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SocialLinks from './SocialLinks';

const LifeAtNB: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
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

  // Simulating Instagram feed images
  const instagramPosts = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      caption: 'Team brainstorming session! #creativity #nbmedia',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      caption: 'Behind the scenes of our latest production. #contentcreation',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      caption: "Tech setup for today's shoot! #production #tech",
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      caption: 'Coding the future of content. #developers #tech',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      caption: 'Office views that inspire. #workspace #creativity',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
      caption: 'Creative minds at work! #teamwork #nbmedia',
    },
  ];

  // Updated Instagram Reels with the new links provided
  const instagramReels = [
    {
      id: 'DH-_3RqIAzj',
      caption: 'Coco Reel',
      type: 'reel',
    },
    {
      id: 'DI_WpxWSPZL',
      caption: 'Maggie Reel',
      type: 'reel',
    },
    {
      id: 'DJEe8ZySpOm',
      caption: 'Dance Reel',
      type: 'reel',
    },
    {
      id: 'DG0lwYYyJS5',
      caption: 'Kerala Retreat Reel',
      type: 'reel',
    },
    {
      id: 'DIyi2AiSp9Y',
      caption: '1 Sec of Office Moments',
      type: 'reel',
    },
    {
      id: 'DJB_QN5yNBq',
      caption: 'I like you but I don\'t like it when...',
      type: 'reel',
    },
  ];

  // CSS for enhanced animations and Instagram reel styling
  const animationStyles = `
    .hidden-element {
      opacity: 0;
      transform: translateY(40px);
      transition: all 1s cubic-bezier(0.17, 0.55, 0.55, 1);
    }
    
    .hidden-element.show {
      opacity: 1;
      transform: translateY(0);
    }
    
    .insta-post {
      transition: all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1);
    }
    
    .insta-post:hover {
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      z-index: 10;
    }
    
    .insta-post.active {
      transform: translateY(-15px) scale(1.05);
      box-shadow: 0 15px 40px rgba(0,0,0,0.2);
      z-index: 20;
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
    
    .follow-btn {
      position: relative;
      overflow: hidden;
    }
    
    .follow-btn:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(255,122,0,0), rgba(255,122,0,0.2), rgba(255,122,0,0));
      transform: translateX(-100%);
      transition: transform 0.6s;
      z-index: -1;
    }
    
    .follow-btn:hover:before {
      transform: translateX(100%);
    }

    .reel-container {
      position: relative;
      aspect-ratio: 9/16;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color: #000;
    }

    .reel-container:hover {
      transform: scale(1.03);
      box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    }

    .reel-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1rem;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      color: white;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .reel-container:hover .reel-overlay {
      opacity: 1;
    }

    .instagram-embed {
      width: 100%;
      height: 100%;
      border: 0;
      overflow: hidden;
      background: #000;
      border-radius: 12px;
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(4px);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      opacity: 0.8;
      transition: opacity 0.3s ease, transform 0.3s ease;
      z-index: 5;
    }

    .reel-container:hover .play-button {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.1);
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .reel-container {
        aspect-ratio: 9/16;
      }
      
      .play-button {
        width: 40px;
        height: 40px;
      }
    }
  `;

  return (
    <Section id="life" className="bg-nbdark/50">
      <div ref={sectionRef}>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-center opacity-0 hidden-element transition-all duration-1000" style={{ transform: 'translateY(40px)' }}>
          Life at <span className="text-gradient">NB Media</span>
        </h2>
        
        <p className="text-lg text-nbgray text-center max-w-3xl mx-auto mb-12 opacity-0 hidden-element transition-all duration-1000 delay-300" style={{ transform: 'translateY(40px)' }}>
          Get a glimpse into our vibrant culture, creative process, and the amazing team that makes it all happen. We're not just colleagues, we're a family of creators.
        </p>

        {/* Instagram Reels Section */}
        <div className="mb-16 opacity-0 hidden-element transition-all duration-1000 delay-400" style={{ transform: 'translateY(40px)' }}>
          <div className="flex items-center justify-center mb-8">
            <Instagram className="mr-2 text-white" />
            <h3 className="text-2xl font-bold font-display">Our Instagram Reels</h3>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {instagramReels.map((reel) => (
                <CarouselItem key={reel.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                  <div className="reel-container">
                    <iframe
                      className="instagram-embed"
                      src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                      title={`Instagram ${reel.type}: ${reel.caption}`}
                      loading="lazy"
                      allowTransparency={true}
                      allowFullScreen={true}
                    ></iframe>
                    <div className="reel-overlay">
                      <p className="text-sm">{reel.caption}</p>
                      <div className="mt-2 flex items-center text-xs text-white/70">
                        <span>@nbmediaa</span>
                      </div>
                    </div>
                    <div className="play-button">
                      <Play className="h-6 w-6" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative inset-auto mx-1" />
              <CarouselNext className="relative inset-auto mx-1" />
            </div>
          </Carousel>
        </div>
        
        {/* Instagram Feed Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 opacity-0 hidden-element transition-all duration-1000 delay-600" style={{ transform: 'translateY(40px)' }}>
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`insta-post bg-white/5 rounded-xl overflow-hidden transition-all duration-300 cursor-hover relative ${activeIndex === index ? 'active' : ''}`}
              style={{ animationDelay: `${0.1 * index}s` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={post.imageUrl}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-nbgray">{post.caption}</p>
              </div>
              <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 opacity-0 hidden-element transition-all duration-1000 delay-900" style={{ transform: 'translateY(40px)' }}>
          <a 
            href="https://www.instagram.com/nbmediaa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="follow-btn inline-flex items-center gap-2 text-gradient font-medium cursor-hover px-6 py-3 rounded-full border border-nborange/50 hover:border-nborange transition-all duration-300"
          >
            Follow us on Instagram
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className="mt-8 text-center opacity-0 hidden-element transition-all duration-1000 delay-1000" style={{ transform: 'translateY(40px)' }}>
          <SocialLinks className="justify-center" iconSize={24} />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
    </Section>
  );
};

export default LifeAtNB;
