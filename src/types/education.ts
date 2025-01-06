export interface Education {
  id: string;
  institution: string;
  logo: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  grade?: string;
  description: string[];
  focusAreas?: string[];
  activities?: string[];
  achievements: string[];
} 