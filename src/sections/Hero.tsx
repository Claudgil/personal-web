import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import CVEnglish from "../../public/CVClaudiaGilEnglish.pdf"
import CVSpanish from "../../public/CVClaudiaGilEspañol.pdf"


const Hero = () => {
  const { personal } = resumeData;

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 pb-12 px-4 bg-gradient-to-br from-white to-primary-50 dark:from-secondary-900 dark:to-secondary-800"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {personal.profileImage && (
            <div className="lg:order-2 lg:w-1/3 animate-on-scroll">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-secondary-800 shadow-xl">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent-500 text-white py-2 px-4 rounded-lg shadow-lg">
                  {personal.title}
                </div>
              </div>
            </div>
          )}

          <div className="lg:order-1 lg:w-2/3 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-on-scroll">
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">{personal.name.split(' ')[0]}</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl text-secondary-700 dark:text-secondary-300 mb-6 animate-on-scroll">
              {personal.title}
            </h2>

            <p className="text-lg max-w-2xl mx-auto lg:mx-0 mb-8 animate-on-scroll">
              {personal.bio}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-on-scroll">
              <a
                href={CVEnglish}
                download="ClaudiaGilCV..pdf"
                className="btn btn-primary"
              >
                <Download size={18} className="mr-2" />
                Download CV English
              </a>

              <a
                href={CVSpanish}
                download="ClaudiaGilCV.pdf"
                className="btn btn-primary"
              >
                <Download size={18} className="mr-2" />
                Download CV Spanish
              </a>

              <a
                href="#contact"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Mail size={18} className="mr-2" />
                Contact Me
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6 mb-10 animate-on-scroll">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            

            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 lg:mt-16 animate-on-scroll">
          <button
            onClick={handleExploreClick}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-secondary-800 text-primary-600 dark:text-primary-400 shadow-md hover:shadow-lg transform transition hover:-translate-y-1"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;