"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Badge } from "@/components/ui/badge";
import { HoverCard } from "@/components/ui/hover-card";
import { GradientBackground } from "@/components/ui/gradient-background";
import { SkillsSkeleton } from "@/components/ui/skills-skeleton";
import { skills } from "@/data/skills";
import { useLoading } from "@/hooks/use-loading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const isLoading = useLoading();

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  if (isLoading) {
    return (
      <section id="skills" className="py-20 px-4">
        <GradientBackground variant="subtle">
          <div className="container mx-auto max-w-6xl">
            <SkillsSkeleton />
          </div>
        </GradientBackground>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 px-4">
      <GradientBackground variant="subtle">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slide" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive list of my technical skills and the technologies I work with.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade" className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
              aria-label="Show all skills"
              aria-pressed={selectedCategory === null}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
                aria-label={`Filter by ${category}`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </ScrollAnimation>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredSkills.map((skill, index) => (
              <HoverCard key={skill.name}>
                <motion.div
                  variants={itemVariants}
                  className="group relative p-6 bg-background/50 backdrop-blur-sm rounded-lg border text-center hover:border-primary transition-colors"
                >
                  <div className="mb-4">
                    <skill.icon className="w-12 h-12 mx-auto text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {skill.proficiency && (
                    <div className="mt-4">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500 ease-out"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Proficiency: {skill.proficiency}%
                      </p>
                    </div>
                  )}
                </motion.div>
              </HoverCard>
            ))}
          </motion.div>
        </div>
      </GradientBackground>
    </section>
  );
}; 