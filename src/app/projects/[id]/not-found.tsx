import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-muted-foreground text-center mb-8">
        Sorry, the project you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/#projects"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        View All Projects
      </Link>
    </main>
  );
} 