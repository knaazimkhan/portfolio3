"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";
import { HoverCard } from "@/components/ui/hover-card";
import { SkillCardSkeleton } from "@/components/ui/skill-card-skeleton";
import { skillCategories } from "@/data/skills";
import * as Icons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const getIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName] || (SiIcons as any)[iconName];
  return IconComponent ? <IconComponent /> : null;
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "beginner":
      return "bg-yellow-500/10 text-yellow-500";
    case "intermediate":
      return "bg-blue-500/10 text-blue-500";
    case "advanced":
      return "bg-green-500/10 text-green-500";
    case "expert":
      return "bg-purple-500/10 text-purple-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

export const SkillsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 px-4">
      <GradientBackground variant="vibrant">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade">
            <AnimatedText
              text="Skills & Expertise"
              animation="bounce"
              className="text-3xl font-bold text-center mb-4"
            />
            <ParallaxScroll offset={20}>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and areas of expertise
              </p>
            </ParallaxScroll>
          </ScrollAnimation>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {isLoading ? (
              // Show skeletons while loading
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SkillCardSkeleton />
                </motion.div>
              ))
            ) : (
              // Show actual skill categories
              skillCategories.map((category) => (
                <motion.div key={category.id} variants={itemVariants}>
                  <HoverCard>
                    <motion.div whileHover={{ scale: 1.02 }} className="h-full rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {getIcon(category.icon)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill.id}
                            variants={skillVariants}
                            className="group relative rounded-lg border p-3 transition-colors hover:border-primary"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {skill.icon && (
                                  <div
                                    className="text-lg"
                                    style={{ color: skill.color }}
                                  >
                                    {getIcon(skill.icon)}
                                  </div>
                                )}
                                <span className="font-medium">{skill.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                {skill.yearsOfExperience && (
                                  <span className="text-xs text-muted-foreground">
                                    {skill.yearsOfExperience}+ years
                                  </span>
                                )}
                                <span
                                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${getLevelColor(
                                    skill.level
                                  )}`}
                                >
                                  {skill.level}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </HoverCard>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </GradientBackground>
    </section>
  );
}; 