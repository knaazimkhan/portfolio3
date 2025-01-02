"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { ExperienceTimelineSkeleton } from "@/components/ui/experience-timeline-skeleton";
import { experience } from "@/data/experience";
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

export const ExperienceSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className="py-20 px-4">
      <GradientBackground variant="muted">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade">
            <AnimatedText
              text="Work Experience"
              animation="bounce"
              className="text-3xl font-bold text-center mb-4"
            />
            <ParallaxScroll offset={20}>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                A timeline of my professional journey and key achievements
              </p>
            </ParallaxScroll>
          </ScrollAnimation>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {isLoading ? (
                // Show skeletons while loading
                Array.from({ length: 3 }).map((_, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ExperienceTimelineSkeleton index={index} />
                  </motion.div>
                ))
              ) : (
                // Show actual experience items
                experience.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-12 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 mt-6 z-10">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:text-right">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                          >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-4">
                              <div className="relative w-12 h-12">
                                <Image
                                  src={item.logo}
                                  alt={`${item.company} logo`}
                                  fill
                                  className="object-contain rounded-lg"
                                />
                              </div>
                              <div className="flex-grow">
                                <h3 className="text-xl font-semibold">{item.role}</h3>
                                <p className="text-primary hover:underline">
                                  {item.company}
                                </p>
                              </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <FaCalendar className="flex-shrink-0" />
                                <span>{item.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="flex-shrink-0" />
                                <span>{item.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FaBriefcase className="flex-shrink-0" />
                                <span>Full-time</span>
                              </div>
                            </div>

                            {/* Skills */}
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        </HoverCardTrigger>

                        <HoverCardContent
                          align={index % 2 === 0 ? "start" : "end"}
                          className="w-80"
                        >
                          <div className="space-y-2">
                            <h4 className="font-semibold">Description:</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>

                    {/* Empty space for timeline alignment */}
                    <div className="flex-1" />
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>
        </div>
      </GradientBackground>
    </section>
  );
}; 