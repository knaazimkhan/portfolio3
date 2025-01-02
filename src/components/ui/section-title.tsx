'use client';

import { motion } from 'framer-motion';
import { ScrollAnimation } from './scroll-animation';
import { AnimatedText } from './animated-text';
import { ParallaxScroll } from './parallax-scroll';

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
  titleAnimation?: 'bounce' | 'wave' | 'slide' | 'fade';
  descriptionAnimation?: 'fade' | 'slide' | 'scale' | 'rotate';
  parallaxOffset?: number;
}

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.05,
    },
  }),
};

export const SectionTitle = ({
  title,
  description,
  className = '',
  titleAnimation = 'bounce',
  descriptionAnimation = 'fade',
  parallaxOffset = 20,
}: SectionTitleProps) => {
  return (
    <ScrollAnimation>
      <motion.div
        className={`text-center mb-12 ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={titleVariants} className="overflow-hidden">
          <motion.div className="flex justify-center flex-wrap relative">
            {title.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className={`section-title-glow inline-block ${
                  char === ' ' ? 'w-[0.3em]' : ''
                } text-4xl font-bold`}
                style={{
                  background: 'var(--title-gradient)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: `
                    0 0 20px var(--primary-glow),
                    0 0 40px var(--primary-glow-strong)
                  `,
                  transform: 'perspective(1000px)',
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  transition: { duration: 0.2 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <AnimatedText
            text={title}
            animation={titleAnimation}
            className="sr-only"
          />
        </motion.div>

        {description && (
          <ParallaxScroll offset={parallaxOffset}>
            <motion.div variants={descriptionVariants}>
              <ScrollAnimation animation={descriptionAnimation}>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                  {description}
                </p>
              </ScrollAnimation>
            </motion.div>
          </ParallaxScroll>
        )}
      </motion.div>
    </ScrollAnimation>
  );
}; 