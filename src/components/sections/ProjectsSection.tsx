"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Badge } from "@/components/ui/badge";
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
    className="group relative rounded-lg border bg-background/50 overflow-hidden backdrop-blur-sm"
  >
    <Link href={`/projects/${project.id}`} className="block">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub Repository</span>
            </Link>
          )}
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaPlay className="w-5 h-5" />
              <span className="sr-only">Live Demo</span>
            </Link>
          )}
          {project.links.live && (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span className="sr-only">Visit Project</span>
            </Link>
          )}
        </div>
      </div>
    </Link>
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
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="slide" className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in web development.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade" className="flex justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                category === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}; 