"use client";

import React, { useState } from "react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { HoverCard } from "@/components/ui/hover-card";
import { SkillCardSkeleton } from "@/components/ui/skill-card-skeleton";
import { skillCategories } from "@/data/skills";
import * as Icons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

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

const SkillCard = ({ category, index }: { category: any; index: number }) => (
  <ScrollAnimation
    animation="fade"
    delay={index * 0.1}
    className="h-full"
  >
    <HoverCard>
      <div className="h-full rounded-lg border bg-background/50 p-6 backdrop-blur-sm hover:shadow-lg transition-shadow">
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
          {category.skills.map((skill: any, skillIndex: number) => (
            <ScrollAnimation
              key={skill.id}
              animation="fade"
              delay={index * 0.1 + skillIndex * 0.05}
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
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </HoverCard>
  </ScrollAnimation>
);

export const SkillsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useState(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return (
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkillCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="slide" className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}; 