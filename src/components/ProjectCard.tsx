import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card overflow-hidden group animate-on-scroll"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.image && (
        <div className="h-48 overflow-hidden relative mb-4">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent flex items-end p-4 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex gap-3">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/90 rounded-full text-secondary-900 hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="View code on GitHub"
              >
                <Github size={18} />
              </a>
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/90 rounded-full text-secondary-900 hover:bg-primary-500 hover:text-white transition-colors"
                  aria-label="View live demo"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-secondary-600 dark:text-secondary-300 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;