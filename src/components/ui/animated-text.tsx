"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string | string[];
  animation?: "bounce" | "wave" | "slide" | "fade";
  className?: string;
  delay?: number;
}

const animations = {
  bounce: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        delay: i * 0.1,
      },
    }),
  },
  wave: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        delay: i * 0.1,
      },
    }),
  },
  slide: {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        delay: i * 0.1,
      },
    }),
  },
  fade: {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  },
};

export const AnimatedText = ({
  text,
  animation = "bounce",
  className,
  delay = 0,
}: AnimatedTextProps) => {
  const words = Array.isArray(text) ? text : text.split(" ");

  return (
    <motion.div
      className={cn("flex flex-wrap gap-2", className)}
      initial="hidden"
      animate="visible"
      aria-label={Array.isArray(text) ? text.join(" ") : text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={animations[animation]}
          style={{ display: "inline-block" }}
          className={word === "Your" || word === "Name" ? "text-primary" : ""}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}; 