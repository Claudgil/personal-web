import { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  children?: ReactNode;
  className?: string;
}

const TimelineItem = ({
  title,
  subtitle,
  date,
  location,
  children,
  className = '',
}: TimelineItemProps) => {
  return (
    <div className={`relative pb-12 animate-on-scroll ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-900 ml-2.5"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-primary-500 border-2 border-white dark:border-secondary-900"></div>
      
      <div className="ml-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-1 sm:mb-0">{title}</h3>
          <span className="text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 py-1 px-2 rounded inline-flex whitespace-nowrap">
            {date}
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center text-secondary-600 dark:text-secondary-300 mb-3">
          <span className="font-medium">{subtitle}</span>
          {location && (
            <>
              <span className="hidden sm:inline mx-2">•</span>
              <span>{location}</span>
            </>
          )}
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default TimelineItem;