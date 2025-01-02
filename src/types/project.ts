export type ProjectLinks = {
  github?: string;
  live?: string;
  demo?: string;
};

export type ProjectChallenges = {
  technical?: string;
  performance?: string;
  scalability?: string;
};

export type ProjectSolutions = {
  architecture?: string;
  performance?: string;
  testing?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "desktop" | "other";
  links: ProjectLinks;
  featured?: boolean;
  inProgress?: boolean;
  completedAt?: string;
  highlights?: string[];
  challenges?: ProjectChallenges;
  solutions?: ProjectSolutions;
}; 