"use client";

import React, { useState, useEffect } from "react";
import { FaCalendar, FaMapMarkerAlt, FaTrophy, FaUsers, FaBook } from "react-icons/fa";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { EducationCardSkeleton } from "@/components/ui/education-card-skeleton";
import { educations } from "@/data/educations";
import Image from "next/image";
import { Education } from "@/types/education";

const EducationCard = ({ edu, index }: { edu: Education; index: number }) => (
  <ScrollAnimation
    animation="fade"
    delay={index * 0.1}
    className="h-full"
  >
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="h-full group relative rounded-lg border bg-background/50 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg">
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
        </div>
      </HoverCardTrigger>

      <HoverCardContent className="w-80">
        <div className="grid gap-4">
          {/* Description */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-medium">
              <FaBook className="h-4 w-4 text-primary" />
              <h4>Focus Areas</h4>
            </div>
            <ScrollAnimation animation="fade" delay={0.1}>
              <ul className="ml-4 space-y-1">
                {edu.focusAreas?.map((area: string, i: number) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    • {area}
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>

          {/* Achievements */}
          {edu.achievements?.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <FaTrophy className="h-4 w-4 text-primary" />
                <h4>Achievements</h4>
              </div>
              <ScrollAnimation animation="fade" delay={0.2}>
                <ul className="ml-4 space-y-1">
                  {edu.achievements.map((achievement: string, i: number) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          )}

          {/* Activities */}
          {edu.activities && edu.activities.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <FaUsers className="h-4 w-4 text-primary" />
                <h4>Activities</h4>
              </div>
              <ScrollAnimation animation="fade" delay={0.3}>
                <ul className="ml-4 space-y-1">
                  {edu.activities.map((activity: string, i: number) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {activity}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  </ScrollAnimation>
);

export const EducationSection = () => {
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
            <div className="grid gap-8 md:grid-cols-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <EducationCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </GradientBackground>
      </section>
    );
  }

  return (
    <section id="education" className="py-20 px-4">
      <GradientBackground variant="muted">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slide" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey and achievements in the field of computer science
            </p>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2">
            {educations.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </GradientBackground>
    </section>
  );
}; 