"use client";

import React, { useState, useEffect } from "react";
import { FaCalendar, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { ExperienceTimelineSkeleton } from "@/components/ui/experience-timeline-skeleton";
import { experiences } from "@/data/experiences";
import Image from "next/image";
import { Experience } from "@/types/experience";

const ExperienceCard = ({ item, index, isEven }: { item: Experience; index: number; isEven: boolean }) => (
  <ScrollAnimation
    animation="fade"
    delay={index * 0.1}
    className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-12 ${
      isEven ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Timeline dot */}
    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 mt-6 z-10">
      <ScrollAnimation animation="scale" delay={index * 0.1 + 0.2}>
        <div className="w-4 h-4 bg-primary rounded-full" />
      </ScrollAnimation>
    </div>

    {/* Content */}
    <div className="flex-1 md:text-right">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
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
              {item.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </HoverCardTrigger>

        <HoverCardContent 
          side={isEven ? "left" : "right"} 
          className="w-96 p-6 backdrop-blur-sm border border-primary/10 shadow-lg"
          sideOffset={20}
        >
          <div className="space-y-6">
            {/* Company and Role Summary */}
            <div className="flex items-center gap-3 pb-4 border-b border-primary/10">
              <div className="relative w-10 h-10">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h4 className="font-semibold">{item.role}</h4>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Key Responsibilities
              </h4>
              <ScrollAnimation animation="fade" delay={0.1}>
                <ul className="space-y-2">
                  {item.responsibilities?.map((resp: string, i: number) => (
                    <li 
                      key={i} 
                      className="text-sm text-muted-foreground flex items-start gap-2 group hover:text-foreground transition-colors"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span className="flex-1">{resp}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>

            {/* Achievements */}
            {item.achievements?.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Key Achievements
                </h4>
                <ScrollAnimation animation="fade" delay={0.2}>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement: string, i: number) => (
                      <li 
                        key={i} 
                        className="text-sm text-muted-foreground flex items-start gap-2 group hover:text-foreground transition-colors"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollAnimation>
              </div>
            )}
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>

    {/* Empty space for timeline alignment */}
    <div className="flex-1" />
  </ScrollAnimation>
);

export const ExperienceSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-20 px-4">
        <GradientBackground variant="muted">
          <div className="container mx-auto max-w-6xl">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
              {Array.from({ length: 3 }).map((_, i) => (
                <ExperienceTimelineSkeleton key={i} index={i} />
              ))}
            </div>
          </div>
        </GradientBackground>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 px-4">
      <GradientBackground variant="muted">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slide" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional journey and key achievements
            </p>
          </ScrollAnimation>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />

            {experiences.map((item, index) => (
              <ExperienceCard
                key={item.id}
                item={item}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </GradientBackground>
    </section>
  );
}; 