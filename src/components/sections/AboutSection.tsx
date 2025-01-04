"use client";

import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { HoverCard } from "@/components/ui/hover-card";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";
import { SectionTitle } from '@/components/ui/section-title';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <GradientBackground variant="subtle">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle
            title="About Me"
            description="Passionate about creating innovative solutions"
            titleAnimation="slide"
            descriptionAnimation="scale"
            parallaxOffset={40}
          />
          <motion.div
            className="grid gap-8 lg:grid-cols-2 items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Introduction */}
            <motion.div variants={itemVariants} className="space-y-6">
              <ParallaxScroll offset={20}>
                <HoverCard>
                  <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-4">
                      Professional Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Software Engineer with 6+ years of experience in full-stack development, specializing in Next.js, React.js, and Node.js. Proven expertise in building scalable applications, migrating legacy systems, and integrating payment gateways like Stripe and PayPal.
                    </p>
                  </div>
                </HoverCard>
              </ParallaxScroll>

              <ParallaxScroll offset={30}>
                <HoverCard>
                  <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-4">
                      Leadership & Impact
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Successfully led cross-team initiatives, mentored junior engineers, and delivered measurable results, including modernizing platforms using Payload CMS. Skilled in modern frameworks, cloud technologies, and database management, with a strong focus on innovation and collaboration to drive business outcomes.
                    </p>
                  </div>
                </HoverCard>
              </ParallaxScroll>
            </motion.div>

            {/* Passion & Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <ParallaxScroll offset={40}>
                <HoverCard>
                  <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-4">
                      Passion for Development
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Web development calls to all my passions, it incorporates creativity and problem solving and I'm allowed to break it to improve the code (in a separate Git branch, of course). Proficient in developing innovative solutions for e-commerce and product or service-based industries.
                    </p>
                  </div>
                </HoverCard>
              </ParallaxScroll>

              <ParallaxScroll offset={50}>
                <HoverCard>
                  <div className="p-6 bg-background/50 rounded-lg border backdrop-blur-sm">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-4">
                      Technical Expertise
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      My specialties include quickly learning new skills and programming languages, problem solving, domain driven design, responsive design principles, website optimization, and Model View Controller (MVC) methods of organizing code. Proficient in Next.js, Payload CMS, React.js, Node.js, Express.js, MySQL, MongoDB, JavaScript, TypeScript, HTML, CSS, TailwindCSS, and Git/GitHub.
                    </p>
                  </div>
                </HoverCard>
              </ParallaxScroll>
            </motion.div>
          </motion.div>
        </div>
      </GradientBackground>
    </section>
  );
}; 