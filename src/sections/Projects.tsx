import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { resumeData } from '../data/resumeData';

const Projects = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="section bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Projects" 
          subtitle="A selection of projects I´ve developed while learning, experimenting, and applying real-world solutions through code."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;