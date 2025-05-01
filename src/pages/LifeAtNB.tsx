
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';
import Section from '../components/Section';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Instagram, Users, Camera, Heart, Coffee, Sparkles } from 'lucide-react';

const LifeAtNBPage = () => {
  const [activePost, setActivePost] = useState<number | null>(null);

  // For intersection observer animations
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

  // Instagram post mockups
  const instagramPosts = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      caption: 'Team brainstorming session! #creativity #nbmedia',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      caption: 'When the coffee kicks in ☕ #mondaymotivation',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42',
      caption: 'Friday celebrations are a must! #weekendvibes',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      caption: 'Planning our next viral hit 📈 #contentcreation',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f',
      caption: 'When you find the perfect lighting ✨ #behindthescenes',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
      caption: 'Our new office space is 🔥 #nbmedia',
    },
  ];

  // Fun team quotes
  const teamQuotes = [
    { quote: "Meme breaks > coffee breaks", icon: Coffee },
    { quote: "We don't make content, we make history", icon: Sparkles },
    { quote: "Done is better than perfect, but we still aim for perfect", icon: Heart },
    { quote: "If your idea scares you, it's probably good", icon: Users },
  ];

  return (
    <div className="relative min-h-screen bg-nbdark text-white overflow-hidden hide-cursor">
      <AnimatedCursor />
      <Navbar />
      
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <Section className="relative overflow-hidden">
          <div className="absolute top-1/3 -left-64 w-96 h-96 rounded-full bg-nborange/20 blur-[100px]"></div>
          <div className="absolute bottom-0 -right-64 w-96 h-96 rounded-full bg-nbyellow/10 blur-[100px]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
              Life at <span className="text-gradient">NB Media</span>
            </h1>
            <p className="text-lg md:text-xl text-nbgray mb-12 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
              Where creativity thrives, laughs are constant, and memes are currency.
            </p>
          </div>
        </Section>
        
        {/* Instagram Feed */}
        <Section>
          <div className="flex items-center justify-center mb-8 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.6s", animationFillMode: "forwards"}}>
            <Instagram className="mr-3 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold font-display">Our Instagram Feed</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "0.8s", animationFillMode: "forwards"}}>
            {instagramPosts.map((post, index) => (
              <div 
                key={post.id}
                className="relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setActivePost(index)}
                onMouseLeave={() => setActivePost(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent opacity-${activePost === index ? '90' : '50'} transition-opacity duration-300 z-10`}></div>
                
                <img 
                  src={post.imageUrl} 
                  alt={`Instagram post ${post.id}`}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {post.caption}
                  </p>
                </div>
                
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center hidden-element opacity-0 animate-fade-in" style={{animationDelay: "1s", animationFillMode: "forwards"}}>
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gradient font-medium cursor-hover px-6 py-3 rounded-full border border-nborange/50 hover:border-nborange transition-all duration-300"
            >
              Follow us on Instagram
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </Section>
        
        {/* Team Quotes */}
        <Section className="bg-black/30">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-12 text-center hidden-element opacity-0 animate-fade-in" style={{animationDelay: "1.2s", animationFillMode: "forwards"}}>
            Things We Say <span className="text-gradient">Daily</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamQuotes.map((item, index) => (
              <div 
                key={item.quote} 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 transition-all duration-500 hover:border-nborange/50 hover:bg-white/10 hidden-element opacity-0 animate-fade-in"
                style={{animationDelay: `${1.4 + index * 0.2}s`, animationFillMode: "forwards"}}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-nborange to-nbyellow/70">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-lg font-medium">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Behind The Scenes */}
        <Section>
          <div className="flex items-center justify-center mb-8 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "2s", animationFillMode: "forwards"}}>
            <Camera className="mr-3 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold font-display">Behind The Scenes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 hidden-element opacity-0 animate-fade-in" style={{animationDelay: "2.2s", animationFillMode: "forwards"}}>
            <div className="relative rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent opacity-50 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0" 
                alt="Behind the scenes" 
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold font-display mb-2">Studio Setup</h3>
                <p className="text-nbgray text-sm">Where magic happens daily. Our main studio equipped with the latest gear.</p>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent opacity-50 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7" 
                alt="Content planning" 
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold font-display mb-2">Content Planning</h3>
                <p className="text-nbgray text-sm">The brainstorming room where viral ideas are born and refined.</p>
              </div>
            </div>
          </div>
        </Section>
        
        {/* CTA Section */}
        <Section className="bg-gradient-to-r from-nborange/20 to-nbyellow/20 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center hidden-element opacity-0 animate-fade-in" style={{animationDelay: "2.4s", animationFillMode: "forwards"}}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Think you'd <span className="text-gradient">vibe</span> with us?
            </h2>
            <p className="text-lg mb-8 text-nbgray">
              We're always looking for creative minds to join our team. If you're passionate about content creation and want to work in a fun, fast-paced environment, we want to hear from you!
            </p>
            <Link to="/careers">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-nborange to-nbyellow text-white font-medium px-12 py-6 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </Section>
      </div>
      
      <Footer />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hidden-element {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.17, 0.55, 0.55, 1);
        }
        
        .hidden-element.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        
        .pulse-animation {
          animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .float-animation {
          animation: float 5s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default LifeAtNBPage;
