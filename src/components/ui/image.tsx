import { useState } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { Loading } from "./loading";

interface ImageProps extends Omit<NextImageProps, "alt"> {
  alt: string;
  fallback?: string;
  aspectRatio?: "square" | "video" | "auto";
}

export const Image = ({
  alt,
  className,
  fallback = "/images/placeholder.png",
  aspectRatio = "auto",
  src,
  ...props
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "aspect-auto",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <Loading size="sm" />
        </div>
      )}
      <NextImage
        className={cn(
          "object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        src={error ? fallback : src}
        {...props}
      />
    </div>
  );
}; 