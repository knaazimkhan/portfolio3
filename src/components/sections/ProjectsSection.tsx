"use client";

import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Badge } from "@/components/ui/badge";
import { HoverCard } from "@/components/ui/hover-card";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ProjectCardSkeleton } from "@/components/ui/project-card-skeleton";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";

const categories = ["all", "web", "mobile", "desktop", "other"] as const;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <ScrollAnimation
    animation="fade"
    delay={index * 0.1}
    className="h-full"
  >
    <HoverCard>
      <div className="group relative rounded-lg border bg-background/50 overflow-hidden backdrop-blur-sm">
        <Link href={`/projects/${project.id}`} className="block">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {project.inProgress && (
              <div className="absolute top-2 right-2">
                <Badge variant="default">In Progress</Badge>
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3 p-6 pt-0">
          {project.links.github && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.links.github, '_blank', 'noopener noreferrer');
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="View Source Code"
            >
              <FaGithub className="w-5 h-5" />
            </button>
          )}
          {project.links.demo && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.links.demo, '_blank', 'noopener noreferrer');
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="View Demo"
            >
              <FaPlay className="w-5 h-5" />
            </button>
          )}
          {project.links.live && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.links.live, '_blank', 'noopener noreferrer');
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Visit Live Site"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </HoverCard>
  </ScrollAnimation>
);

export const ProjectsSection = () => {
  const [category, setCategory] = useState<typeof categories[number]>("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useState(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  });

  const filteredProjects = projects.filter(
    (project) => category === "all" || project.category === category
  );

  if (isLoading) {
    return (
      <section className="py-20 px-4">
        <GradientBackground>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </GradientBackground>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4">
      <GradientBackground>
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="slide" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my best work and personal projects.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade" className="flex justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
                aria-label={`Filter by ${cat}`}
                aria-pressed={category === cat}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </GradientBackground>
    </section>
  );
}; 