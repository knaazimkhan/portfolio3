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
import { ErrorBoundary } from "@/components/error-boundary";

export default function HomePage() {
  return (
    <PageTransition>
      <main id="main-content" tabIndex={-1} className="flex min-h-screen flex-col">
        <h1 className="sr-only">Portfolio - Your Name</h1>
        <div className="flex-1">
          {/* Hero section is not lazy loaded as it's above the fold */}
          <ErrorBoundary>
            <HeroSection />
          </ErrorBoundary>

          {/* Lazy load below-fold sections */}
          <ErrorBoundary>
            <Suspense>
              <ProjectsSection />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense>
              <SkillsSection />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense>
              <ExperienceSection />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense>
              <EducationSection />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense>
              <BlogSection />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense>
              <TestimonialsSection />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense>
              <ContactSection />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </PageTransition>
  );
}
