"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaCalendar, FaExternalLinkAlt } from "react-icons/fa";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";
import { testimonials } from "@/data/testimonials";
import { SectionTitle } from '@/components/ui/section-title';
import { TestimonialsSkeleton } from "@/components/ui/testimonials-skeleton";

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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const TestimonialsSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const testimonialIndex = Math.abs(page % testimonials.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [page, autoplay]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 px-4">
        <GradientBackground variant="subtle">
          <div className="container mx-auto max-w-6xl">
            <TestimonialsSkeleton />
          </div>
        </GradientBackground>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 px-4">
      <GradientBackground variant="subtle">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle
            title="Client Testimonials"
            description="What people say about working with me"
            titleAnimation="wave"
            descriptionAnimation="slide"
            parallaxOffset={30}
          />

          <motion.div
            className="relative h-[500px] md:h-[400px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onHoverStart={() => setAutoplay(false)}
            onHoverEnd={() => setAutoplay(true)}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-background/50 backdrop-blur-sm rounded-lg border p-8 md:p-12 max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                      <Image
                        src={testimonials[testimonialIndex].avatar}
                        alt={testimonials[testimonialIndex].name}
                        width={128}
                        height={128}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <FaQuoteLeft className="w-8 h-8 text-primary/20 mb-4 mx-auto md:mx-0" />
                      <blockquote className="text-lg md:text-xl mb-4">
                        {testimonials[testimonialIndex].text}
                      </blockquote>
                      <div className="space-y-2">
                        <div className="font-semibold text-xl">
                          {testimonials[testimonialIndex].name}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonials[testimonialIndex].title} at {testimonials[testimonialIndex].company}
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                          {testimonials[testimonialIndex].location && (
                            <span className="flex items-center gap-1">
                              <FaMapMarkerAlt className="w-4 h-4" />
                              {testimonials[testimonialIndex].location}
                            </span>
                          )}
                          {testimonials[testimonialIndex].date && (
                            <span className="flex items-center gap-1">
                              <FaCalendar className="w-4 h-4" />
                              {testimonials[testimonialIndex].date}
                            </span>
                          )}
                        </div>
                        {testimonials[testimonialIndex].rating && (
                          <div className="flex items-center justify-center md:justify-start gap-1">
                            {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                              <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                            ))}
                          </div>
                        )}
                        {testimonials[testimonialIndex].projectName && (
                          <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                            <span className="text-primary">Project: {testimonials[testimonialIndex].projectName}</span>
                            {testimonials[testimonialIndex].projectUrl && (
                              <a
                                href={testimonials[testimonialIndex].projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors"
                                aria-label={`Visit ${testimonials[testimonialIndex].projectName}`}
                              >
                                <FaExternalLinkAlt className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute z-10 w-full top-1/2 -translate-y-1/2 flex justify-between px-4">
              <button
                onClick={() => paginate(-1)}
                className="p-2 rounded-full bg-background/50 backdrop-blur-sm border shadow-sm hover:bg-background/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-2 rounded-full bg-background/50 backdrop-blur-sm border shadow-sm hover:bg-background/80 transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage([index, index > testimonialIndex ? 1 : -1])}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === testimonialIndex
                      ? "bg-primary"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </GradientBackground>
    </section>
  );
}; 