import dynamic from 'next/dynamic';

export const AboutSection = dynamic(() => import('@/components/sections/AboutSection').then(mod => mod.AboutSection), {
  ssr: true
});

export const BlogSection = dynamic(() => import('@/components/sections/BlogSection').then(mod => mod.BlogSection), {
  ssr: true
});

export const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection').then(mod => mod.ProjectsSection), {
  ssr: true
});

export const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection').then(mod => mod.SkillsSection), {
  ssr: true
});

export const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection').then(mod => mod.ExperienceSection), {
  ssr: true
});

export const EducationSection = dynamic(() => import('@/components/sections/EducationSection').then(mod => mod.EducationSection), {
  ssr: true
});

export const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(mod => mod.TestimonialsSection), {
  ssr: true
});

export const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(mod => mod.ContactSection), {
  ssr: true
}); 