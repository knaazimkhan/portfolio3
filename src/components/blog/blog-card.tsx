import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HoverCard } from '@/components/ui/hover-card';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import type { BlogPostMeta } from '@/lib/mdx';

interface BlogCardProps {
  post: BlogPostMeta;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <ScrollAnimation>
      <HoverCard>
        <Link href={`/blog/${post.slug}`}>
          <motion.article
            whileHover={{ scale: 1.02 }}
            className="group relative flex flex-col space-y-4 rounded-lg border bg-background/50 p-6 backdrop-blur-sm transition-colors hover:bg-background/80"
          >
            <div className="flex items-center gap-4">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium text-foreground">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="text-muted-foreground">{post.description}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{post.readingTime}</span>
            </div>
          </motion.article>
        </Link>
      </HoverCard>
    </ScrollAnimation>
  );
}; 