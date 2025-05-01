
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from './Section';

const BlogTeaser: React.FC = () => {
  return (
    <Section id="blog-teaser" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-12 hidden-element">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-nbgray mt-2">Fresh perspectives from the NB Media team</p>
          </div>
          <Link to="/blog" className="text-gradient font-medium inline-flex items-center hover:underline">
            View All
            <ArrowRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hidden-element">
          {[{
            title: "The Future of Short-Form Video Content",
            image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
            date: "May 1, 2025"
          }, {
            title: "Creating Authentic Content in an AI-Powered World",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
            date: "April 28, 2025"
          }, {
            title: "Behind Our Most Viral Video Ever",
            image: "https://images.unsplash.com/photo-1626908013943-df2991bb9f89",
            date: "April 21, 2025"
          }].map((post, index) => (
            <Link to="/blog" key={post.title} className="group block">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-nbdark via-transparent to-transparent opacity-50 z-10"></div>
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="mt-4">
                <p className="text-sm text-nbgray">{post.date}</p>
                <h3 className="text-xl font-bold mt-1 group-hover:text-gradient transition-all duration-300">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BlogTeaser;
