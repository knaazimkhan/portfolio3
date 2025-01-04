import dynamic from 'next/dynamic';
import { AboutSkeleton } from '@/components/ui/about-skeleton';

export const AboutSection = dynamic(
  () => import('@/components/sections/AboutSection').then((mod) => mod.AboutSection),
  { loading: () => <AboutSkeleton /> }
);

export const BlogSection = dynamic(
  () => import('@/components/sections/BlogSection').then((mod) => mod.BlogSection),
  { loading: () => <div>Loading...</div> }
);

export const ProjectsSection = dynamic(
  () => import('@/components/sections/ProjectsSection').then((mod) => mod.ProjectsSection),
  { loading: () => <div>Loading...</div> }
);

export const SkillsSection = dynamic(
  () => import('@/components/sections/SkillsSection').then((mod) => mod.SkillsSection),
  { loading: () => <div>Loading...</div> }
);

export const ExperienceSection = dynamic(
  () => import('@/components/sections/ExperienceSection').then((mod) => mod.ExperienceSection),
  { loading: () => <div>Loading...</div> }
);

export const EducationSection = dynamic(
  () => import('@/components/sections/EducationSection').then((mod) => mod.EducationSection),
  { loading: () => <div>Loading...</div> }
);

export const TestimonialsSection = dynamic(
  () => import('@/components/sections/TestimonialsSection').then((mod) => mod.TestimonialsSection),
  { loading: () => <div>Loading...</div> }
);

export const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection').then((mod) => mod.ContactSection),
  { loading: () => <div>Loading...</div> }
); 