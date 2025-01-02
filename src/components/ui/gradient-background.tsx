"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  children: React.ReactNode;
  variant?: "default" | "subtle" | "vibrant" | "muted";
  className?: string;
}

export const GradientBackground = ({
  children,
  variant = "default",
  className,
}: GradientBackgroundProps) => {
  const gradientClasses = {
    default:
      "bg-gradient-to-r from-blue-100 via-purple-50 to-pink-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50",
    subtle:
      "bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950/50 dark:via-gray-900/50 dark:to-gray-950/50",
    vibrant:
      "bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-950/50 dark:via-purple-950/50 dark:to-indigo-950/50",
    muted:
      "bg-gradient-to-r from-neutral-100 via-stone-100 to-neutral-100 dark:from-neutral-950/50 dark:via-stone-950/50 dark:to-neutral-950/50",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "relative overflow-hidden",
        gradientClasses[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
}; 