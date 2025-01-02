"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaTrophy, FaUsers, FaBook } from "react-icons/fa";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { EducationCardSkeleton } from "@/components/ui/education-card-skeleton";
import { education } from "@/data/education";
import Image from "next/image";

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

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export const EducationSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="education" className="py-20 px-4">
      <GradientBackground variant="muted">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade">
            <AnimatedText
              text="Education"
              animation="bounce"
              className="text-3xl font-bold text-center mb-4"
            />
            <ParallaxScroll offset={20}>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                My academic journey and achievements in the field of computer science
              </p>
            </ParallaxScroll>
          </ScrollAnimation>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {isLoading ? (
              // Show skeletons while loading
              Array.from({ length: 2 }).map((_, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <EducationCardSkeleton />
                </motion.div>
              ))
            ) : (
              // Show actual education items
              education.map((edu) => (
                <motion.div key={edu.id} variants={itemVariants}>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="h-full group relative rounded-lg border bg-background/50 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1 space-y-1.5">
                            <div className="flex items-center gap-2">
                              <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                                <Image
                                  src={edu.logo}
                                  alt={edu.institution}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-semibold">{edu.degree} in {edu.field}</h3>
                                <p className="text-base text-muted-foreground">
                                  {edu.institution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <FaCalendar className="h-4 w-4" />
                            <span>
                              {edu.startDate} - {edu.endDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          {edu.grade && (
                            <Badge variant="outline">{edu.grade}</Badge>
                          )}
                        </div>
                      </motion.div>
                    </HoverCardTrigger>

                    <HoverCardContent className="w-80">
                      <div className="grid gap-4">
                        {/* Description */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 font-medium">
                            <FaBook className="h-4 w-4 text-primary" />
                            <h4>Focus Areas</h4>
                          </div>
                          <motion.ul
                            className="ml-4 list-disc space-y-1 text-sm text-muted-foreground"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {edu.description.map((item, i) => (
                              <motion.li key={i} variants={listItemVariants}>
                                {item}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 font-medium">
                            <FaTrophy className="h-4 w-4 text-primary" />
                            <h4>Achievements</h4>
                          </div>
                          <motion.ul
                            className="ml-4 list-disc space-y-1 text-sm text-muted-foreground"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {edu.achievements.map((item, i) => (
                              <motion.li key={i} variants={listItemVariants}>
                                {item}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>

                        {/* Activities */}
                        {edu.activities && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 font-medium">
                              <FaUsers className="h-4 w-4 text-primary" />
                              <h4>Activities</h4>
                            </div>
                            <motion.ul
                              className="ml-4 list-disc space-y-1 text-sm text-muted-foreground"
                              variants={listVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {edu.activities.map((item, i) => (
                                <motion.li key={i} variants={listItemVariants}>
                                  {item}
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>
                        )}
                      </div>
                    </HoverCardContent>
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