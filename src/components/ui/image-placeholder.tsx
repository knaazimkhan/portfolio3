"use client";

import { useId } from "react";

export const ImagePlaceholder = ({
  width = "100%",
  height = "100%",
}: {
  width?: string | number;
  height?: string | number;
}) => {
  const id = useId();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 225"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={`placeholder-${id}`}
    >
      <title id={`placeholder-${id}`}>Placeholder image</title>
      <rect width="400" height="225" className="fill-muted" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M159.955 107.477c0-10.755 8.718-19.473 19.472-19.473s19.473 8.718 19.473 19.473c0 10.754-8.718 19.472-19.473 19.472-10.754 0-19.472-8.718-19.472-19.472zm19.472-11.283c-6.232 0-11.283 5.05-11.283 11.283 0 6.232 5.051 11.282 11.283 11.282 6.233 0 11.283-5.05 11.283-11.282 0-6.233-5.05-11.283-11.283-11.283z"
        className="fill-muted-foreground"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M159.955 107.477c0-10.755 8.718-19.473 19.472-19.473s19.473 8.718 19.473 19.473c0 10.754-8.718 19.472-19.473 19.472-10.754 0-19.472-8.718-19.472-19.472zm19.472-11.283c-6.232 0-11.283 5.05-11.283 11.283 0 6.232 5.051 11.282 11.283 11.282 6.233 0 11.283-5.05 11.283-11.282 0-6.233-5.05-11.283-11.283-11.283z"
        className="fill-muted-foreground"
      />
    </svg>
  );
}; 