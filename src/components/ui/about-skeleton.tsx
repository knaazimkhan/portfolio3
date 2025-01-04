"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const AboutSkeleton = () => {
  return (
    <div
      className="w-full space-y-8"
      aria-label="Loading about section"
      role="progressbar"
      aria-busy="true"
    >
      {/* Title Skeleton */}
      <div className="space-y-4 mb-12">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-96" />
      </div>

      {/* Content Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Professional Overview Card */}
          <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>

          {/* Leadership Card */}
          <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Passion Card */}
          <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>

          {/* Technical Expertise Card */}
          <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 