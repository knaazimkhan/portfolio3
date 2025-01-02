"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Badge } from "@/components/ui/badge";
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
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animation="fade">
            <AnimatedText
              text="Education"
              animation="bounce"
              className="text-3xl font-bold text-center mb-4"
            />
            <ParallaxScroll offset={20}>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                My academic journey and achievements
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
              education.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <div className="group relative rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={item.logo}
                          alt={`${item.institution} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{item.institution}</h3>
                        <p className="text-sm text-muted-foreground">{item.location}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium">{item.degree}</h4>
                        <p className="text-muted-foreground">{item.field}</p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.location}</span>
                      </div>

                      <p className="text-muted-foreground">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement) => (
                          <Badge key={achievement} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
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