import { ProjectCardSkeleton } from "@/components/ui/project-card-skeleton";

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen py-12">
      <div className="sr-only" role="status" aria-live="polite">
        Loading projects...
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="region"
          aria-label="Loading projects grid"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={`project-skeleton-${i}`} role="presentation">
              <ProjectCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 