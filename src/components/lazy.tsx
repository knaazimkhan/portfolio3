'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Loading states
import { BlogSectionSkeleton } from '@/components/ui/blog-section-skeleton';
import { ProjectCardSkeleton } from '@/components/ui/project-card-skeleton';
import { SkillCardSkeleton } from '@/components/ui/skill-card-skeleton';
import { ExperienceTimelineSkeleton } from '@/components/ui/experience-timeline-skeleton';
import { EducationCardSkeleton } from '@/components/ui/education-card-skeleton';
import { TestimonialsSkeleton } from '@/components/ui/testimonials-skeleton';
import { ContactSectionSkeleton } from '@/components/ui/contact-section-skeleton';

// Lazy load sections
export const BlogSection = dynamic(
  () => import('@/components/sections/BlogSection').then(mod => mod.BlogSection),
  {
    loading: () => <BlogSectionSkeleton />,
    ssr: false
  }
);

export const ProjectsSection = dynamic(
  () => import('@/components/sections/ProjectsSection').then(mod => mod.ProjectsSection),
  {
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    ),
    ssr: false
  }
);

export const SkillsSection = dynamic(
  () => import('@/components/sections/SkillsSection').then(mod => mod.SkillsSection),
  {
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkillCardSkeleton key={i} />
        ))}
      </div>
    ),
    ssr: false
  }
);

export const ExperienceSection = dynamic(
  () => import('@/components/sections/ExperienceSection').then(mod => mod.ExperienceSection),
  {
    loading: () => (
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
        {Array.from({ length: 3 }).map((_, i) => (
          <ExperienceTimelineSkeleton key={i} index={i} />
        ))}
      </div>
    ),
    ssr: false
  }
);

export const EducationSection = dynamic(
  () => import('@/components/sections/EducationSection').then(mod => mod.EducationSection),
  {
    loading: () => (
      <div className="grid gap-8 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <EducationCardSkeleton key={i} />
        ))}
      </div>
    ),
    ssr: false
  }
);

export const TestimonialsSection = dynamic(
  () => import('@/components/sections/TestimonialsSection').then(mod => mod.TestimonialsSection),
  {
    loading: () => <TestimonialsSkeleton />,
    ssr: false
  }
);

export const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection').then(mod => mod.ContactSection),
  {
    loading: () => <ContactSectionSkeleton />,
    ssr: false
  }
); 