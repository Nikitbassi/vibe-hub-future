
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  fullHeight,
  padding = 'md',
  maxWidth = '7xl'
}) => {
  const paddingClasses = {
    none: '',
    xs: 'py-3',
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-24'
  };
  
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    'full': 'max-w-full'
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
      <div className={cn(maxWidthClasses[maxWidth], "mx-auto w-full px-4 md:px-8")}>
        {children}
      </div>
    </section>
  );
};

export default Section;
