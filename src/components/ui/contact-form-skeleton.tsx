import { Skeleton } from "@/components/ui/skeleton";

export const ContactFormSkeleton = () => {
  return (
    <section
      className="w-full max-w-2xl mx-auto py-12 px-4 md:px-6 space-y-8"
      aria-label="Loading contact form"
      role="progressbar"
      aria-busy="true"
    >
      {/* Section title and description */}
      <div className="text-center space-y-4">
        <Skeleton className="h-10 w-64 mx-auto" />
        <Skeleton className="h-4 w-full max-w-md mx-auto" />
      </div>

      {/* Contact form */}
      <div className="space-y-6">
        {/* Name field */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-12 w-full" />
        </div>

        {/* Email field */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-12 w-full" />
        </div>

        {/* Subject field */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>

        {/* Message field */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-32 w-full" />
        </div>

        {/* reCAPTCHA */}
        <Skeleton className="h-24 w-full max-w-[304px]" />

        {/* Submit button */}
        <Skeleton className="h-12 w-full md:w-48" />
      </div>

      {/* Alternative contact methods */}
      <div className="pt-8 space-y-6">
        <Skeleton className="h-6 w-48 mx-auto" />
        
        {/* Social links */}
        <div className="flex justify-center gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="w-10 h-10 rounded-full" />
          ))}
        </div>

        {/* Location/timezone info */}
        <div className="flex items-center justify-center gap-2">
          <Skeleton className="w-4 h-4" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </section>
  );
}; 