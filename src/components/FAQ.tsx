
import React, { useState } from 'react';
import Section from './Section';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What makes NB Media different from other content creators?",
      answer: "NB Media stands out with our unique blend of cutting-edge creativity, authenticity, and deep understanding of Gen Z culture. Our content isn't just engaging—it's crafted to resonate on a deeper level, creating meaningful connections with our audience in ways other creators simply can't match."
    },
    {
      question: "How did NB Media get started?",
      answer: "NB Media began as a passion project by our founder, who started with just a camera and a vision. From humble beginnings as a one-person YouTube channel, we've grown into a creative powerhouse through dedication, innovative thinking, and an unwavering commitment to authentic storytelling."
    },
    {
      question: "What type of content does NB Media produce?",
      answer: "We specialize in creating high-quality, engaging digital content across multiple platforms, with a particular focus on YouTube. Our content spans various genres including entertainment, educational content, lifestyle vlogs, behind-the-scenes looks at creative processes, and innovative storytelling formats that push the boundaries of digital media."
    },
    {
      question: "Does NB Media collaborate with brands?",
      answer: "Yes, we selectively partner with brands whose values align with ours. We believe in creating authentic, value-driven content that serves both our audience and our partners. Our approach to brand collaborations focuses on storytelling that feels natural and adds genuine value rather than traditional advertising."
    },
    {
      question: "How can I join the NB Media team?",
      answer: "We're always looking for passionate, creative individuals to join our growing team. Check out our Careers page for current openings, or reach out directly through our Contact page if you believe you have something unique to offer that isn't listed in our current positions."
    },
    {
      question: "Can NB Media help with my project or business?",
      answer: "While our primary focus is on creating our own content, we occasionally take on select client projects that align with our creative vision. Contact us with details about your project, and we'll let you know if it's something we can help bring to life."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-nborange/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-nbyellow/10 rounded-full blur-[100px] -z-10"></div>
      
      <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-center">
        Frequently Asked <span className="text-gradient">Questions</span>
      </h2>
      
      <p className="text-lg text-nbgray text-center max-w-3xl mx-auto mb-12">
        Curious about NB Media? Find answers to commonly asked questions below. If you can't find what you're looking for, don't hesitate to reach out.
      </p>
      
      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className={cn(
              "mb-4 border-b border-white/10 last:border-0 overflow-hidden",
              openIndex === index ? "pb-5" : ""
            )}
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-5 px-2 text-left focus:outline-none group"
            >
              <h3 className="text-xl font-display font-medium group-hover:text-nborange transition-colors duration-300">
                {item.question}
              </h3>
              <span className={cn(
                "transform transition-transform duration-300 text-nborange",
                openIndex === index ? "rotate-180" : ""
              )}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div 
              className={cn(
                "overflow-hidden transition-all duration-300 text-nbgray",
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="px-2 pb-2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-nbgray mb-4">Still have questions?</p>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 text-gradient font-medium cursor-hover px-6 py-3 rounded-full border border-nborange/50 hover:border-nborange transition-all duration-300 relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-nborange to-nbyellow opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="relative">Get in touch with us</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </Section>
  );
};

export default FAQ;
