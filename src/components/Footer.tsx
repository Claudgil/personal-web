import { Github, Linkedin, Twitter } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Footer = () => {
  const { personal } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-50 dark:bg-secondary-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {personal.name}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300">
              {personal.title}
            </p>
          </div>

          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a 
              href={personal.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={personal.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            {personal.social.twitter && (
              <a 
                href={personal.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            )}
          </div>

          <div className="text-sm text-secondary-500 dark:text-secondary-400">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;