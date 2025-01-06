"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import { ScrollAnimation } from "@/components/ui/scroll-animation";
// import { HoverCard } from "@/components/ui/hover-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";
import { HeroSectionSkeleton } from "@/components/ui/hero-section-skeleton";
import { ImageWithLoading } from "@/components/ui/image-with-loading";
import { useLoading } from "@/hooks/use-loading";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "React Specialist",
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
  const isLoading = useLoading();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === role) {
      // Wait before starting to delete
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Calculate new text
      const delta = isDeleting ? -1 : 1;
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length + delta));
      }, isDeleting ? 50 : 150);
    }

    return () => clearTimeout(timeout);
  }, [displayText, roleIndex, isDeleting]);

  if (isLoading) {
    return (
      <GradientBackground className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <HeroSectionSkeleton />
      </GradientBackground>
    );
  }

  return (
    <GradientBackground className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I&apos;m <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Naazim Khan</span>
              </h1>
              <div className="h-8 md:h-12">
                <AnimatedText
                  text={displayText}
                  className="text-2xl md:text-4xl text-muted-foreground"
                />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold italic bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text relative"
            >
              "Building tomorrow&apos;s web, today."
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground"
            >
              Passionate about creating innovative web solutions with modern technologies, specializing in scalable applications and exceptional user experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          <ParallaxScroll className="relative lg:block">
            <motion.div
              variants={itemVariants}
              className="relative w-[300px] md:w-[400px] aspect-square mx-auto rounded-full overflow-hidden shadow-2xl"
            >
              <ImageWithLoading
                src="/profile/profile.jpeg"
                alt="Profile"
                width={460}
                height={460}
                className="absolute inset-0 w-full h-full object-cover"
                priority={true}
                wrapperClassName="absolute inset-0"
              />
            </motion.div>
          </ParallaxScroll>
        </div>
      </motion.div>
    </GradientBackground>
  );
}; 