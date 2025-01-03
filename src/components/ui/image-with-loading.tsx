"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithLoadingProps extends Omit<ImageProps, "onLoadingComplete" | "onError"> {
  wrapperClassName?: string;
  priority?: boolean;
}

export const ImageWithLoading = ({
  alt,
  src,
  className,
  wrapperClassName,
  priority = false,
  ...props
}: ImageWithLoadingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-muted",
          wrapperClassName
        )}
      >
        <span className="text-sm text-muted-foreground">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={cn("relative", wrapperClassName)}>
      {isLoading && (
        <Skeleton
          className={cn("absolute inset-0", className)}
        />
      )}
      <Image
        src={src}
        alt={alt}
        priority={priority}
        className={cn(isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-200", className)}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...props}
      />
    </div>
  );
}; 