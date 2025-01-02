"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Badge } from "@/components/ui/badge";
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
        <div className="container mx-auto max-w-4xl">
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
                  <ExperienceTimelineSkeleton />
                </motion.div>
              ))
            ) : (
              // Show actual experience items
              experience.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative pl-8 sm:pl-32 py-6 group"
                >
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-muted before:ml-[6px] sm:before:ml-[29px] before:top-8 before:-bottom-[10px]">
                    <div className="absolute left-0 sm:left-[27px] flex items-center justify-center w-4 h-4">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    
                    <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-muted-foreground">
                      {item.date}
                    </div>
                    
                    <div className="sm:pl-12">
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10">
                            <Image
                              src={item.logo}
                              alt={`${item.company} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{item.role}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.company}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </GradientBackground>
    </section>
  );
}; 