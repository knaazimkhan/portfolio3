"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { HoverCard } from "@/components/ui/hover-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "TypeScript Expert",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const updateText = () => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
          return setTimeout(updateText, 100);
        }
        setTimeout(() => setIsDeleting(true), 1500);
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1));
          return setTimeout(updateText, 50);
        }
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timeout = setTimeout(updateText, 100);
    return () => clearTimeout(timeout);
  }, [displayText, roleIndex, isDeleting]);

  return (
    <GradientBackground className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <motion.div
        className="container max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6 text-center lg:text-left">
          <AnimatedText
            text={["Hi,", "I'm", "Your Name"]}
            animation="bounce"
            className="text-4xl font-bold sm:text-5xl lg:text-6xl"
          />
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground min-h-[2em]"
            variants={itemVariants}
          >
            I'm a{" "}
            <span className="text-primary font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </motion.p>
          <ParallaxScroll offset={20}>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Passionate about creating beautiful, responsive, and user-friendly web applications
              using modern technologies and best practices.
            </motion.p>
          </ParallaxScroll>
          <motion.div 
            className="flex gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <HoverCard>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Contact Me
                </Link>
              </motion.div>
            </HoverCard>
            <HoverCard>
              <motion.div whileHover={{ scale: 1.02 }}>
                <a
                  href="/resume.pdf"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  download
                >
                  Download CV
                </a>
              </motion.div>
            </HoverCard>
          </motion.div>
        </div>
        <ParallaxScroll offset={50}>
          <motion.div 
            className="relative aspect-square max-w-md mx-auto"
            variants={itemVariants}
          >
            <HoverCard>
              <motion.div whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}>
                <Image
                  src="/profile/avatar.svg"
                  alt="Profile picture"
                  width={400}
                  height={400}
                  className="object-cover rounded-full"
                  priority
                />
              </motion.div>
            </HoverCard>
          </motion.div>
        </ParallaxScroll>
      </motion.div>
    </GradientBackground>
  );
}; 