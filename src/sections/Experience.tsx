import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  const { experience } = resumeData;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short',
      year: 'numeric'
    });
  };

  const getDateRange = (startDate: string, endDate: string | null) => {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <section id="experience" className="section bg-secondary-50 dark:bg-secondary-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey and key roles that have shaped my career path."
        />
        
        <div className="max-w-3xl mx-auto">
          {experience.map((job, index) => (
            <TimelineItem
              key={job.id}
              title={job.position}
              subtitle={job.company}
              date={getDateRange(job.startDate, job.endDate)}
              location={job.location}
              className={index === experience.length - 1 ? 'pb-0' : ''}
            >
              <ul className="list-disc list-outside ml-5 text-secondary-700 dark:text-secondary-300 space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;