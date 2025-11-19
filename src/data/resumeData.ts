import { ResumeData } from '../types';
import Profile from "../../public/perfil.jpg";
import Cover from "../../public/cover proyecto aws.png";

export const resumeData: ResumeData = {
  personal: {
    name: 'Claudia Gil',
    title: 'Junior Python Developer',
    bio: 'Software developer focused on automation, data analysis, and cloud technologies. Currently building real-world projects with Python, SQL, AWS and Make.',
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
      position: 'Human Resourses Assistant',
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
  degree: 'Python Fundamentals 1',
  institution: 'CISCO',
  location: 'Online',
  startDate: '2025-10',
  endDate: null,
  description: 'Ongoing online course at Desafío LATAM focused on using Python to clean, transform, and visualize data. Working with tools like Pandas, NumPy, Matplotlib, and Seaborn to perform exploratory analysis and extract insights for better decision-making.'
},
{
  id: 2,
  degree: 'AWS Cloud Architect Training',
  institution: 'Morris & Opazo - AWS re/Start',
  location: 'Online',
  startDate: '2024-12',
  endDate: '2025-02',
  description: 'Completed the AWS re/Start program, focused on cloud computing fundamentals, networking, Linux, databases, and core AWS services such as EC2, S3, and RDS. Included practical exercises in Python, automation tools, and preparation for the AWS Cloud Practitioner certification.'
},
{
  id: 3,
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
    { id: 2, name: 'MySQL', proficiency: 60 },               
    { id: 3, name: 'SQL', proficiency: 70 },                 
    { id: 4, name: 'Power BI', proficiency: 65 },            
    { id: 5, name: 'Data Analysis', proficiency: 50 },             
    { id: 6, name: 'Linux', proficiency: 50 },               
    { id: 7, name: 'Make', proficiency: 50 },                 
    { id: 8, name: 'Zapier', proficiency: 55 },          
    { id: 9, name: 'Node.js', proficiency: 20 },   
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