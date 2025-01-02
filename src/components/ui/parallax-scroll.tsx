"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxScrollProps {
  children: React.ReactNode;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const ParallaxScroll = ({
  children,
  offset = 50,
  direction = "up",
  className,
}: ParallaxScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return [offset, -offset];
      case "down":
        return [-offset, offset];
      case "left":
        return [offset, -offset];
      case "right":
        return [-offset, offset];
      default:
        return [offset, -offset];
    }
  };

  const transformValue = getTransformValue();
  const yValue = useTransform(scrollYProgress, [0, 1], transformValue);
  const xValue = useTransform(scrollYProgress, [0, 1], transformValue);

  const transform = direction === "up" || direction === "down" ? { y: yValue } : { x: xValue };

  return (
    <motion.div ref={ref} style={transform} className={className}>
      {children}
    </motion.div>
  );
}; 