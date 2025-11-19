import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className = '' }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="text-3xl font-bold mb-4 animate-on-scroll">
        {title}
      </h2>
      {subtitle && (
        <div className="max-w-2xl mx-auto text-secondary-600 dark:text-secondary-300 animate-on-scroll">
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;