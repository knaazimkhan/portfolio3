export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  featured: boolean;
  inProgress?: boolean;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  completedAt?: string;
  highlights: string[];
  challenges?: {
    technical?: string;
    performance?: string;
    scalability?: string;
  }; // Add this section
  solutions?: {
    architecture?: string;
    performance?: string;
    testing?: string;
  };
}