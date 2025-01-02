"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Badge } from "@/components/ui/badge";
import { HoverCard } from "@/components/ui/hover-card";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";

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

const categories = ["all", "web", "mobile", "desktop", "other"] as const;

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div variants={itemVariants}>
    <div className="group relative rounded-lg border bg-background/50 overflow-hidden backdrop-blur-sm">
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="object-cover transition-transform group-hover:scale-105"
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
  </motion.div>
);

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("all");

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "all" || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 px-4">
      <GradientBackground variant="default">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade">
            <AnimatedText
              text="Featured Projects"
              animation="bounce"
              className="text-3xl font-bold text-center mb-4"
            />
            <ParallaxScroll offset={20}>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                A showcase of my best work and personal projects
              </p>
            </ParallaxScroll>
          </ScrollAnimation>

          <div className="flex justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </GradientBackground>
    </section>
  );
}; 