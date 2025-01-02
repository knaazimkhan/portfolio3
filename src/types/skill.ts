export type SkillCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: Skill[];
};

export type Skill = {
  id: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  yearsOfExperience?: number;
  icon?: string;
  color?: string;
}; 