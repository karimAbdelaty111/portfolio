export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  architecture?: string;
  challenges?: string[];
  developmentProcess?: string[];
  resultsAndStatus: string;
  githubUrl: string;
  liveDemoUrl?: string;
  image: string;
  placeholderBadge?: string;
  realGalleryImages?: string[];
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  companyOrProgram: string;
  location: string;
  period: string;
  status?: string;
  type: 'project' | 'training';
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  university: string;
  faculty: string;
  department: string;
  location: string;
  period: string;
  status: string;
  relevantTopics: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  program: string;
  track: string;
  round: string;
  status: string;
  dateOrPeriod: string;
  description: string;
  credentialUrl?: string;
}
