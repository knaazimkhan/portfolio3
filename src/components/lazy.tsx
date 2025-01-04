import dynamic from 'next/dynamic';

const Loading = () => <div>Loading...</div>;

export const AboutSection = dynamic(
  () => import('@/components/sections/AboutSection').then((mod) => mod.AboutSection),
  { loading: Loading }
);

export const BlogSection = dynamic(
  () => import('@/components/sections/BlogSection').then((mod) => mod.BlogSection),
  { loading: Loading }
);

export const ProjectsSection = dynamic(
  () => import('@/components/sections/ProjectsSection').then((mod) => mod.ProjectsSection),
  { loading: Loading }
);

export const SkillsSection = dynamic(
  () => import('@/components/sections/SkillsSection').then((mod) => mod.SkillsSection),
  { loading: Loading }
);

export const ExperienceSection = dynamic(
  () => import('@/components/sections/ExperienceSection').then((mod) => mod.ExperienceSection),
  { loading: Loading }
);

export const EducationSection = dynamic(
  () => import('@/components/sections/EducationSection').then((mod) => mod.EducationSection),
  { loading: Loading }
);

export const TestimonialsSection = dynamic(
  () => import('@/components/sections/TestimonialsSection').then((mod) => mod.TestimonialsSection),
  { loading: Loading }
);

export const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection').then((mod) => mod.ContactSection),
  { loading: Loading }
); 