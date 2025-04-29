
import React, { useEffect, useRef } from 'react';
import Section from './Section';

const LifeAtNB: React.FC = () => {
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

  return (
    <Section id="life" className="bg-nbdark/50">
      <div ref={sectionRef}>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-center opacity-0 hidden-element transition-all duration-1000" style={{ transform: 'translateY(40px)' }}>
          Life at <span className="text-gradient">NB Media</span>
        </h2>
        
        <p className="text-lg text-nbgray text-center max-w-3xl mx-auto mb-12 opacity-0 hidden-element transition-all duration-1000 delay-300" style={{ transform: 'translateY(40px)' }}>
          Get a glimpse into our vibrant culture, creative process, and the amazing team that makes it all happen. We're not just colleagues, we're a family of creators.
        </p>
        
        {/* Instagram-like feed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 opacity-0 hidden-element transition-all duration-1000 delay-600" style={{ transform: 'translateY(40px)' }}>
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className="bg-white/5 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 cursor-hover"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-square w-full">
                <img 
                  src={post.imageUrl}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-nbgray">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 opacity-0 hidden-element transition-all duration-1000 delay-900" style={{ transform: 'translateY(40px)' }}>
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gradient font-medium cursor-hover"
          >
            Follow us on Instagram
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .hidden-element.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </Section>
  );
};

export default LifeAtNB;
