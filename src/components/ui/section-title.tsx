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
        <motion.div variants={titleVariants}>
          <AnimatedText
            text={title}
            animation={titleAnimation}
            className="text-3xl font-bold mb-4"
          />
        </motion.div>

        {description && (
          <ParallaxScroll offset={parallaxOffset}>
            <motion.div variants={descriptionVariants}>
              <ScrollAnimation animation={descriptionAnimation}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
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