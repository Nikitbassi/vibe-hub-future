
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  fullHeight,
  padding = 'md'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-24'
  };

  return (
    <section 
      id={id} 
      className={cn(
        fullHeight ? 'min-h-screen' : '',
        paddingClasses[padding],
        className
      )}
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
