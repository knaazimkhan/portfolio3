"use client";

import { cn } from "@/lib/utils";

interface LoadingProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Loading = ({ className, size = "md" }: LoadingProps) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-primary border-t-transparent",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

interface LoadingPageProps {
  className?: string;
}

export const LoadingPage = ({ className }: LoadingPageProps) => {
  return (
    <div
      className={cn(
        "flex min-h-[400px] w-full items-center justify-center",
        className
      )}
    >
      <Loading size="lg" />
    </div>
  );
}; 