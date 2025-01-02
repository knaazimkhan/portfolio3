export type Education = {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  grade?: string;
  activities?: string[];
  description?: string[];
  achievements?: string[];
  logo?: string;
}; 