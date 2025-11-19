import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { resumeData } from '../data/resumeData';

const Education = () => {
  const { education } = resumeData;

  const formatDate = (dateString: string | null)  => {
   if (!dateString) return 'Present';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short',
      year: 'numeric'
    });
  };

  const getDateRange = (startDate: string, endDate: string ) => {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <section id="education" className="section bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and qualifications."
        />
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.id}
              title={edu.degree}
              subtitle={edu.institution}
              date={getDateRange(edu.startDate, edu.endDate)}
              location={edu.location}
              className={index === education.length - 1 ? 'pb-0' : ''}
            >
              <p className="text-secondary-600 dark:text-secondary-300">
                {edu.description}
              </p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;