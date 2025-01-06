export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export type IconName = 
  | "FaGithub"
  | "FaLinkedin"
  | "FaTwitter"
  | "FaDiscord"
  | "FaEnvelope"
  | "FaMapMarkerAlt"
  | "FaGraduationCap"
  | "FaCalendar"
  | "FaTrophy"
  | "FaUsers"
  | "FaBook"
  | "SiTailwindcss"
  | "SiNextdotjs"
  | "SiTypescript"
  | "SiJavascript"
  | "SiMongodb"
  | "SiPostgresql"
  | "SiPrisma"
  | "SiDocker"
  | "SiGit"
  | "SiFigma"
  | "SiFramer";

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  yearsOfExperience?: number;
  icon?: IconName;
  color?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  details?: string[];
  skills: Skill[];
} 