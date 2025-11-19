import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { resumeData } from '../data/resumeData';

const About = () => {
  const { personal } = resumeData;

  return (
    <section id="about" className="section bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my background, interests, and what drives me professionally."
        />
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
              Professional Summary
            </h3>
            <p className="mb-6 text-lg">
              {personal.bio}
            </p>
            <p className="mb-6">
              Creating intuitive and scalable solutions for freelancers and digital businesses.
            </p>
            <p>
              I value clean code, continuous learning, and purposeful tech that improves lives.
            </p>
          </div>
          
          <div className="lg:w-1/3 animate-on-scroll">
            <div className="card">
              <h3 className="text-xl font-bold mb-6 text-secondary-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-secondary-900 dark:text-white mb-1">Location</h4>
                    <p className="text-secondary-600 dark:text-secondary-300">{personal.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-secondary-900 dark:text-white mb-1">Email</h4>
                    <a 
                      href={`mailto:${personal.email}`} 
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-secondary-900 dark:text-white mb-1">Phone</h4>
                    <a 
                      href={`tel:${personal.phone}`} 
                      className="text-secondary-600 dark:text-secondary-300"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                
                {personal.website && (
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-secondary-900 dark:text-white mb-1">Website</h4>
                      <a 
                        href={`https://${personal.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {personal.website}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;