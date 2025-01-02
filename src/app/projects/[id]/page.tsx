import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaArrowLeft } from "react-icons/fa";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Link from "next/link";

interface Props {
  params: { id: string };
}

async function getProject(id: string) {
  const project = projects.find((p) => p.id === id);
  if (!project) return null;
  return project;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = await Promise.resolve(params.id);
  const project = await getProject(id);
  if (!project) return {};

  return {
    title: `${project.title} | Project`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const id = await Promise.resolve(params.id);
  const project = await getProject(id);
  if (!project) notFound();

  return (
    <main className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        <ScrollAnimation animation="fade">
          <AnimatedText
            text={project.title}
            animation="bounce"
            className="text-4xl font-bold text-center mb-4"
          />
          <ParallaxScroll offset={20}>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              {project.description}
            </p>
          </ParallaxScroll>
        </ScrollAnimation>

        <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid gap-12">
          {/* Project Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-muted-foreground mb-6">
              {project.longDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View Source</span>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Visit Site</span>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaPlay className="w-4 h-4" />
                  <span>View Demo</span>
                </a>
              )}
            </div>
          </section>

          {/* Key Features */}
          {project.highlights && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Technical Details */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h3>Technologies Used</h3>
              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              
              <h3>Implementation Highlights</h3>
              <ul>
                <li>Responsive design using TailwindCSS</li>
                <li>Type-safe development with TypeScript</li>
                <li>Performance optimizations</li>
                <li>Accessibility considerations</li>
              </ul>
            </div>
          </section>

          {/* Challenges Faced */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Challenges Faced</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <ul className="space-y-4">
                <li>
                  <strong>Technical Complexity:</strong> {project.challenges?.technical || 
                    "Managing complex state interactions and ensuring smooth user experience across different devices and browsers."}
                </li>
                <li>
                  <strong>Performance:</strong> {project.challenges?.performance || 
                    "Optimizing load times and runtime performance while maintaining rich functionality."}
                </li>
                <li>
                  <strong>Scalability:</strong> {project.challenges?.scalability || 
                    "Designing the architecture to handle future growth and feature additions."}
                </li>
              </ul>
            </div>
          </section>

          {/* Solutions Implemented */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Solutions Implemented</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <ul className="space-y-4">
                <li>
                  <strong>Architecture:</strong> {project.solutions?.architecture || 
                    "Implemented a modular architecture with clear separation of concerns for better maintainability."}
                </li>
                <li>
                  <strong>Performance Optimization:</strong> {project.solutions?.performance || 
                    "Utilized code splitting, lazy loading, and caching strategies to improve load times."}
                </li>
                <li>
                  <strong>Testing & Quality:</strong> {project.solutions?.testing || 
                    "Implemented comprehensive testing suite with unit tests and integration tests."}
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 