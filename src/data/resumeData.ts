import { ResumeData } from '../types';
import Profile from "../../public/perfil.jpg";
import Cover from "../../public/cover proyecto aws.png";

export const resumeData: ResumeData = {
  personal: {
    name: 'Claudia Gil',
    title: 'Junior Python Developer | IA & Automations | CloudFormation',
    bio: 'Software developer focused on automation, data analysis, and cloud technologies. Currently building real-world projects with Python, SQL, AWS, Make and N8N.',
    email: 'claudiagil.leon@google.com',
    phone: 'not found',
    location: 'LATAM',
    //website: 'www.johndoe.com',
    profileImage: Profile,
    social: {
      linkedin: 'https://www.linkedin.com/in/claudiagilleon',
      github: 'https://github.com/Claudgil',
      upwork: "https://www.upwork.com/freelancers/~01284a0e249a9b0e06?mp_source=share",
    },
  },
  experience: [
    {
      id: 1,
      position: 'Human Resources Assistant',
      company: 'Morris & Opazo',
      location: 'Chile',
      startDate: '2025-02',
      endDate: "2025-06",
      achievements: [
        'Project tracking using Clockify and certification management',
        'Internal communication campaigns',
        'Coordination of employee training and development',
        'Onboarding and offboarding process support',
      ],
    },
    {
      id: 2,
      position: 'Customer Claims Analyst (CNR)',
      company: 'Konecta Chile',
      location: 'Santiago, Chile',
      startDate: '2023-02',
      endDate: '2025-05',
      achievements: [
        'Customer service via digital channels and emails',
        'Case investigation and resolution through CRM systems',
        'Pattern analysis of claims to reduce response times',
        'Collaboration with internal teams to enhance customer experience',
      ],
    },
    {
      id: 3,
      position: 'Treasury Assistant',
      company: 'Grupo SERVIP',
      location: 'Santiago, Chile',
      startDate: '2019-11',
      endDate: '2021-12',
      achievements: [
        'Responsible for planning and executing cash movement operations',
        'Ensured compliance with security procedures',
        'Daily and monthly financial reporting',
      ],
    },
  ],
  education: [
{
  id: 1,
  degree: 'Test Automation Engineer - NODO',
  institution: 'Desafio Latam',
  location: 'Online',
  startDate: '2025-12',
  endDate: null,
  description: 'Hands-on training in software quality and automated testing. Covers QA fundamentals, test case design, web and API test automation using modern tools, best practices, and building real-world automation workflows.'
},
{
  id: 2,
  degree: 'Python Fundamentals 1',
  institution: 'CISCO',
  location: 'Online',
  startDate: '2025-11',
  endDate: null,
  description: 'Hands-on training in Python fundamentals, covering programming logic, data structures, control flow, and problem-solving. Includes applied exercises designed to build a strong foundation for real-world development.'
},
{
  id: 3,
  degree: 'AWS Cloud Architect Training',
  institution: 'Morris & Opazo - AWS re/Start',
  location: 'Online',
  startDate: '2024-12',
  endDate: '2025-02',
  description: 'Completed the AWS re/Start program, focused on cloud computing fundamentals, networking, Linux, databases, and core AWS services such as EC2, S3, and RDS. Included practical exercises in Python, automation tools, and preparation for the AWS Cloud Practitioner certification.'
},
{
  id: 4,
  degree: 'Career Accelerator with Power BI',
  institution: 'ZakiData',
  location: 'Online',
  startDate: '2024-03',
  endDate: '2024-03',
  description: '8-hour intensive course providing tools and guidance for using Power BI and creating interactive dashboards.'
}
  ],
skills: {
  technical: [
    { id: 1, name: 'Python', proficiency: 60 },              
    { id: 2, name: 'Git', proficiency: 60 },               
//    { id: 3, name: 'MySQL', proficiency: 50 },                 
//    { id: 4, name: 'SQL', proficiency: 60 },            
//    { id: 5, name: 'Data Analysis', proficiency: 50 },             
//    { id: 6, name: 'Linux', proficiency: 50 },               
    { id: 7, name: 'Node.js', proficiency: 55 },                 
    { id: 8, name: 'Zapier', proficiency: 50 },          
    { id: 9, name: 'Make', proficiency: 50 },
    { id: 10, name: 'N8N', proficiency: 30 },
    { id: 11, name: 'Postman', proficiency: 30 },
    { id: 12, name: 'Cypress', proficiency: 30 },
//    { id: 13, name: 'N8N', proficiency: 30 },   
  ],
    soft: [
      'Adaptability',
      'Problem Solving',
      'Effective Communication',
      'Team Collaboration',
      'Initiative and Self-learning',
      'Remote Work Management',
      'Empathy and Active Listening',
      'Time Management',
    ],
    languages: [
      { language: 'Spanish', proficiency: 'Native' },
      { language: 'English', proficiency: 'Conversational' },
      { language: 'Germany', proficiency: 'Basic Understanding' },
    ],
    certifications: [],
  },
  projects: [
    {
      id: 1,
      title: 'Food Service Order Optimization',
      description: 'Predictive model for restaurants to forecast demand and optimize orders and inventory, reducing waste during peak days and key seasonal dates',
      technologies: ['Python', 'Power BI', 'SQL', 'Streamlit', 'Anaconda', 'VS Code'],
      image: Cover,
      link: 'https://github.com/Claudgil/AWS_Proyecto',
      demoLink: 'https://talento.morrisopazo.com/blog/proyecto-optimizacion-de-pedidos-del-area-gastronomica-claudia-gil/',
    },
   // {
   //   id: 2,
   //   title: 'Task Management App',
   //   description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress through an intuitive drag-and-drop interface.',
   //   technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
   //   image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=600',
   //   link: 'https://github.com/johndoe/task-management-app',
   //   demoLink: 'https://task-app-demo.com',
   // },
   // {
   //   id: 3,
   //   title: 'Weather Dashboard',
   //   description: 'An interactive weather dashboard that displays current conditions and forecasts for multiple locations. Integrates with multiple weather APIs and includes customizable alerts and notifications.',
   //   technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'Geolocation API'],
   //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
   //   link: 'https://github.com/johndoe/weather-dashboard',
   //   demoLink: 'https://weather-dashboard-demo.com',
   // },
   // {
   //   id: 4,
   //   title: 'Portfolio Website Template',
   //   description: 'A customizable portfolio website template for developers and designers. Features a modular structure, dark/light mode, and various page layouts to showcase projects and skills.',
   //   technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
   //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
   //   link: 'https://github.com/johndoe/portfolio-template',
   //   demoLink: 'https://portfolio-template-demo.com',
   // },
  ],
};