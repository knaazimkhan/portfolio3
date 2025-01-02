'use client';

import { useState } from 'react';
import { BlogCard } from '@/components/blog/blog-card';
import { BlogSearch } from '@/components/blog/blog-search';
import type { BlogPostMeta } from '@/lib/mdx';

interface BlogListProps {
  initialPosts: BlogPostMeta[];
}

export const BlogList = ({ initialPosts }: BlogListProps) => {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  return (
    <>
      <BlogSearch posts={initialPosts} onSearch={setFilteredPosts} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No posts found matching your search.</p>
          </div>
        )}
      </div>
    </>
  );
}; 