import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaTools,
  FaMobile,
  FaDesktop,
  FaServer,
  FaCode,
  FaGlobe,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiGithub,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
  category: string;
  description: string;
  tags: string[];
  proficiency?: number;
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: FaReact,
    category: "Frontend",
    description: "Building modern web applications with React and its ecosystem",
    tags: ["Hooks", "Context", "Redux", "React Query"],
    proficiency: 95,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    description: "Creating server-side rendered and static websites",
    tags: ["SSR", "SSG", "API Routes", "Middleware"],
    proficiency: 90,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Languages",
    description: "Writing type-safe JavaScript code",
    tags: ["Types", "Interfaces", "Generics"],
    proficiency: 85,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "Backend",
    description: "Building scalable backend services",
    tags: ["Express", "NestJS", "APIs"],
    proficiency: 80,
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    category: "Frontend",
    description: "Creating beautiful and responsive designs",
    tags: ["Utility Classes", "Components", "Responsive"],
    proficiency: 90,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    category: "Backend",
    description: "Type-safe database access and migrations",
    tags: ["ORM", "Migrations", "Schema"],
    proficiency: 75,
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    category: "Backend",
    description: "Building flexible and efficient APIs",
    tags: ["Queries", "Mutations", "Apollo"],
    proficiency: 70,
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "DevOps",
    description: "Containerizing applications for deployment",
    tags: ["Containers", "Compose", "Images"],
    proficiency: 65,
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    category: "DevOps",
    description: "Orchestrating containerized applications",
    tags: ["Pods", "Services", "Deployments"],
    proficiency: 60,
  },
  {
    name: "AWS",
    icon: FaAws,
    category: "Cloud",
    description: "Deploying and managing cloud infrastructure",
    tags: ["EC2", "S3", "Lambda"],
    proficiency: 70,
  },
  {
    name: "Vercel",
    icon: SiVercel,
    category: "Cloud",
    description: "Deploying frontend applications",
    tags: ["Deployment", "Edge Functions", "Analytics"],
    proficiency: 85,
  },
  {
    name: "GitHub",
    icon: SiGithub,
    category: "Tools",
    description: "Version control and collaboration",
    tags: ["Git", "Actions", "Projects"],
    proficiency: 90,
  },
]; 