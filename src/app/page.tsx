import { Suspense } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import {
  BlogSection,
  ProjectsSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  TestimonialsSection,
  ContactSection,
} from '@/components/lazy';
import { PageTransition } from "@/components/ui/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <main id="main-content" tabIndex={-1} className="flex min-h-screen flex-col">
        <h1 className="sr-only">Portfolio - Your Name</h1>
        <div className="flex-1">
          {/* Hero section is not lazy loaded as it's above the fold */}
          <HeroSection />

        {/* Lazy load below-fold sections */}
        <Suspense>
          <ProjectsSection />
        </Suspense>

        <Suspense>
          <SkillsSection />
        </Suspense>

        <Suspense>
          <ExperienceSection />
        </Suspense>

        <Suspense>
          <EducationSection />
        </Suspense>

        <Suspense>
          <BlogSection />
        </Suspense>

        <Suspense>
          <TestimonialsSection />
        </Suspense>

          <Suspense>
            <ContactSection />
          </Suspense>
        </div>
      </main>
    </PageTransition>
  );
}
