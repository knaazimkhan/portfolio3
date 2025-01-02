'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from '@/components/blog/blog-card';
import { BlogSearch } from '@/components/blog/blog-search';
import type { BlogPostMeta } from '@/lib/mdx';

interface BlogListProps {
  initialPosts: BlogPostMeta[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const BlogList = ({ initialPosts }: BlogListProps) => {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  return (
    <>
      <BlogSearch posts={initialPosts} onSearch={setFilteredPosts} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredPosts.map((post) => (
          <motion.div key={post.slug} variants={item}>
            <BlogCard post={post} />
          </motion.div>
        ))}
        {filteredPosts.length === 0 && (
          <motion.div
            variants={item}
            className="col-span-full text-center py-12"
          >
            <p className="text-muted-foreground">No posts found matching your search.</p>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}; 