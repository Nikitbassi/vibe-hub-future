import React from 'react';
import { cn } from '@/lib/utils';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}
const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  fullHeight
}) => {
  return <section id={id} className="">
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>;
};
export default Section;