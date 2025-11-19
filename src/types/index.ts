export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter?: string;
  instagram?: string;
  dribbble?: string;
  behance?: string;
  upwork: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  profileImage?: string;
  social: SocialLinks;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  achievements: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface TechnicalSkill {
  id: number;
  name: string;
  proficiency: number;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: number;
}

export interface Skills {
  technical: TechnicalSkill[];
  soft: string[];
  languages: Language[];
  certifications: Certification[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link: string;
  demoLink?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  id: string;
  label: string;
}