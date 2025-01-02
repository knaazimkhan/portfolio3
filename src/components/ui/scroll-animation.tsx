"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ScrollAnimationProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "fade" | "slide" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  once?: boolean;
};

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slide: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  scale: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  },
  rotate: {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
  },
};

export const ScrollAnimation = ({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  duration = 0.5,
  once = true,
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  const selectedAnimation = animations[animation];
  const transition = { delay, duration, ease: "easeOut" };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={selectedAnimation}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 