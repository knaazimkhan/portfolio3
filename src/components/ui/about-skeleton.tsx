"use client";

import { motion } from "framer-motion";

export const AboutSkeleton = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title Skeleton */}
        <div className="space-y-4 mb-12">
          <div className="h-8 w-48 bg-muted/60 rounded-lg animate-pulse" />
          <div className="h-4 w-96 bg-muted/60 rounded-lg animate-pulse" />
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Professional Overview Card */}
            <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
              <div className="h-6 w-48 bg-muted/60 rounded-lg animate-pulse mb-4" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-muted/60 rounded-lg animate-pulse" />
                <div className="h-4 w-5/6 bg-muted/60 rounded-lg animate-pulse" />
                <div className="h-4 w-4/6 bg-muted/60 rounded-lg animate-pulse" />
              </div>
            </div>

            {/* Leadership Card */}
            <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
              <div className="h-6 w-48 bg-muted/60 rounded-lg animate-pulse mb-4" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-muted/60 rounded-lg animate-pulse" />
                <div className="h-4 w-5/6 bg-muted/60 rounded-lg animate-pulse" />
                <div className="h-4 w-4/6 bg-muted/60 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Passion Card */}
            <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
              <div className="h-6 w-48 bg-muted/60 rounded-lg animate-pulse mb-4" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-muted/60 rounded-lg animate-pulse" />
                <div className="h-4 w-5/6 bg-muted/60 rounded-lg animate-pulse" />
                <div className="h-4 w-4/6 bg-muted/60 rounded-lg animate-pulse" />
              </div>
            </div>

            {/* Technical Expertise Card */}
            <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
              <div className="h-6 w-48 bg-muted/60 rounded-lg animate-pulse mb-4" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-muted/60 rounded-lg animate-pulse" />
                <div className="h-4 w-5/6 bg-muted/60 rounded-lg animate-pulse" />
                <div className="h-4 w-4/6 bg-muted/60 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 