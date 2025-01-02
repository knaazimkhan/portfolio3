export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  yearsOfExperience?: number;
  icon?: string;
  color?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: Skill[];
} 