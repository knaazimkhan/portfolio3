import { HeroSectionSkeleton } from "@/components/ui/hero-section-skeleton";
import { ProjectCardSkeleton } from "@/components/ui/project-card-skeleton";
import { SkillCardSkeleton } from "@/components/ui/skill-card-skeleton";
import { ExperienceTimelineSkeleton } from "@/components/ui/experience-timeline-skeleton";
import { EducationCardSkeleton } from "@/components/ui/education-card-skeleton";
import { BlogSectionSkeleton } from "@/components/ui/blog-section-skeleton";
import { TestimonialsSkeleton } from "@/components/ui/testimonials-skeleton";
import { ContactFormSkeleton } from "@/components/ui/contact-form-skeleton";

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="sr-only" role="status" aria-live="polite">
        Loading portfolio content...
      </div>
      
      <div className="flex-1">
        <HeroSectionSkeleton />
        
        <section 
          className="py-12 px-4 md:px-6"
          aria-label="Loading projects section"
          role="region"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`project-skeleton-${i}`} role="presentation">
                <ProjectCardSkeleton />
              </div>
            ))}
          </div>
        </section>
        
        <section 
          className="py-12 px-4 md:px-6"
          aria-label="Loading skills section"
          role="region"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`skill-skeleton-${i}`} role="presentation">
                <SkillCardSkeleton />
              </div>
            ))}
          </div>
        </section>
        
        <section
          className="py-12 px-4 md:px-6"
          aria-label="Loading experience section"
          role="region"
        >
          <ExperienceTimelineSkeleton />
        </section>
        
        <section 
          className="py-12 px-4 md:px-6"
          aria-label="Loading education section"
          role="region"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={`education-skeleton-${i}`} role="presentation">
                <EducationCardSkeleton />
              </div>
            ))}
          </div>
        </section>
        
        <BlogSectionSkeleton />
        <TestimonialsSkeleton />
        <ContactFormSkeleton />
      </div>
    </main>
  );
} 