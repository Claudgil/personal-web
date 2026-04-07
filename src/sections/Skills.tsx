import { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
//import ProgressBar from '../components/ProgressBar';
import * as resumeData from '../data/resumeData';
import AWS from "../../public/aws-re-start-graduate.png";
//import Zaki from "../../public/ZakiData.png";
import IAAutomation from "../../public/Certificado_Transformación_digital_con_IA_y_Automatización.jpg";
import english from "../../public/EFSET.jpg";
import python1 from "../../public/python-essentials-1.1.png";
import FundamentalsofTest from "../../public/Certificado_Fundamentos_TestAutomationEngineer.jpg";
import FundamentosEspTest from "../../public/Certificacion-especialidad-testautomation.jpg";

const Skills = () => {
  const { skills } = resumeData.resumeData;
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const ProgressBars = entry.target.querySelectorAll<HTMLDivElement>('[data-progress]');
            ProgressBars.forEach(bar => {
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
          
          {/* Languages*/}
          <div className="card md:col-span-2 lg:col-span-1 animate-on-scroll">
                        
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
            
            </div>
          
            <div className="card md:col-span-2 lg:col-span-3 items-center animate-on-scroll">
              <h4 className="font-semibold mb-3 text-secondary-800 dark:text-secondary-200">
                Certifications
              </h4>
              <div className="grid grid-cols-3 gap-3 md:gap-4 items-center">
                <div className="flex justify-center">
                  <img src={AWS} alt="AWS Certification" className="h-40 md:h-42 max-w-full" />
                </div>
                <div className="flex justify-center">
                  <img src={python1} alt="Python Essentials 1 Certification" className="h-40 md:h-42 max-w-full" />
                </div>              
                <div className="flex justify-center">
                  <img src={english} alt="English level Certification" className="h-80 md:h-82 max-w-full" />
                </div>
                <div className="flex justify-center">
                  <img src={FundamentosEspTest} alt="IA Automation Certification" className="h-80 md:h-100 max-w-full" />
                </div>
                <div className="flex justify-center">
                  <img src={FundamentalsofTest} alt="Fundamentals of Test Automation Engineer" className="h-80 md:h-82 max-w-full" />
                </div>
                <div className="flex justify-center">
                  <img src={IAAutomation} alt="IA Automation Certification" className="h-80 md:h-100 max-w-full" />
                </div>
                {/*<div className="flex justify-center">
                  <img src={Zaki} alt="Zaki Certification" className="h-80 md:h-100 max-w-full" />
                </div>*/}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;