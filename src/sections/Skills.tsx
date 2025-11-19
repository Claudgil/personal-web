import { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProgressBar from '../components/ProgressBar';
import { resumeData } from '../data/resumeData';
import AWS from "../../public/aws-re-start-graduate.png";
import Zaki from "../../public/ZakiData.png";

const Skills = () => {
  const { skills } = resumeData;
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll<HTMLDivElement>('[data-progress]');
            progressBars.forEach(bar => {
              const percentage = bar.getAttribute('data-progress');
              if (percentage) {
                bar.style.width = `${percentage}%`;
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section bg-secondary-50 dark:bg-secondary-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills" 
          subtitle="My technical expertise, soft skills, and professional qualifications."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div ref={progressRef} className="card animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-secondary-900 dark:text-white">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.technical.map((skill) => (
                <div key={skill.id} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary-100 dark:bg-secondary-700 rounded-full h-2.5">
                    <div 
                      data-progress={skill.proficiency}
                      className="h-2.5 rounded-full bg-primary-500"
                      style={{ width: '0%', transition: 'width 1s ease-in-out' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="card animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-secondary-900 dark:text-white">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.soft.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-secondary-100 dark:bg-secondary-700 rounded-lg px-4 py-3 text-center"
                >
                  <span className="font-medium text-secondary-800 dark:text-secondary-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Languages & Certifications */}
          <div className="card md:col-span-2 lg:col-span-1 animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-secondary-900 dark:text-white">
              Languages & Certifications
            </h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-secondary-800 dark:text-secondary-200">Languages</h4>
              <ul className="space-y-2">
                {skills.languages.map((lang, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-secondary-700 dark:text-secondary-300">{lang.language}</span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-secondary-800 dark:text-secondary-200">Certifications</h4>
              {/* <ul className="space-y-4">
                {skills.certifications.map((cert) => (
                  <li key={cert.id} className="border-l-2 border-primary-500 pl-4 py-1">
                    <h5 className="font-medium text-secondary-900 dark:text-white">{cert.name}</h5>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600 dark:text-secondary-400">{cert.issuer}</span>
                      <span className="text-secondary-500 dark:text-secondary-400">{cert.year}</span>
                    </div>
                  </li>
                ))}
              </ul> */}

              <img src={AWS} alt="" />
              <img src={Zaki} alt="" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;