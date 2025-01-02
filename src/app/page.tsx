import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageTransition } from "@/components/ui/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </div>
      </main>
    </PageTransition>
  );
}
