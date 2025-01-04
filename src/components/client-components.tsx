'use client';

import dynamic from 'next/dynamic';

export const AboutSection = dynamic(
  () => import('@/components/sections/AboutSection').then((mod) => mod.AboutSection)
);

export const BlogSection = dynamic(
  () => import('@/components/sections/BlogSection').then((mod) => mod.BlogSection)
);

export const ProjectsSection = dynamic(
  () => import('@/components/sections/ProjectsSection').then((mod) => mod.ProjectsSection)
);

export const SkillsSection = dynamic(
  () => import('@/components/sections/SkillsSection').then((mod) => mod.SkillsSection)
);

export const ExperienceSection = dynamic(
  () => import('@/components/sections/ExperienceSection').then((mod) => mod.ExperienceSection)
);

export const EducationSection = dynamic(
  () => import('@/components/sections/EducationSection').then((mod) => mod.EducationSection)
);

export const TestimonialsSection = dynamic(
  () => import('@/components/sections/TestimonialsSection').then((mod) => mod.TestimonialsSection)
);

export const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection').then((mod) => mod.ContactSection)
); 