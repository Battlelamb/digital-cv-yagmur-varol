
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`mb-8 ${className}`}>
      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 pb-2 border-b-2 border-gray-200">
        {title}
      </h3>
      {children}
    </section>
  );
};

export default Section;
