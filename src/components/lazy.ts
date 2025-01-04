import dynamic from 'next/dynamic';

export const AboutSection = dynamic(() => import('@/components/sections/AboutSection').then(mod => mod.AboutSection), {
  ssr: true,
});

// ... existing exports ... 