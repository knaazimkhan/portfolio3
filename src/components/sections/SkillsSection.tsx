"use client";

import React, { useState } from "react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SkillCardSkeleton } from "@/components/ui/skill-card-skeleton";
import { skillCategories } from "@/data/skills";
import * as Icons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const getIcon = (iconName: string) => {
  const FaIcon = (Icons as any)[`Fa${iconName}`];
  const SiIcon = (SiIcons as any)[`Si${iconName}`];
  return FaIcon || SiIcon || Icons.FaCode;
};

const getLevelColor = (level: number) => {
  if (level >= 90) return "text-green-500";
  if (level >= 70) return "text-blue-500";
  if (level >= 50) return "text-yellow-500";
  return "text-gray-500";
};

const SkillCard = ({ category, index }: { category: any; index: number }) => (
  <ScrollAnimation
    animation="scale"
    delay={index * 0.1}
    className="group relative rounded-lg border bg-background/50 p-6 backdrop-blur-sm hover:shadow-lg transition-shadow"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {React.createElement(getIcon(category.icon), { className: "w-6 h-6" })}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{category.name}</h3>
        <p className="text-sm text-muted-foreground">{category.description}</p>
      </div>
    </div>

    <div className="space-y-4">
      {category.skills.map((skill: any, skillIndex: number) => (
        <ScrollAnimation
          key={skill.name}
          animation="fade"
          delay={index * 0.1 + skillIndex * 0.05}
          className="group relative rounded-lg border p-3 hover:border-primary transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {React.createElement(getIcon(skill.icon), { 
                className: "w-5 h-5 text-muted-foreground" 
              })}
              <span>{skill.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${getLevelColor(skill.level)}`}>
                {skill.level}%
              </span>
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${getLevelColor(skill.level)} bg-current transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
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
            A comprehensive overview of my technical skills and proficiency levels in various technologies.
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