export type ExperienceType = 
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Freelance"
  | "Internship";

export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: ExperienceType;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  skills: string[];
  logo?: string;
  companyUrl?: string;
  achievements?: string[];
  team?: string;
  featured?: boolean;
}; 