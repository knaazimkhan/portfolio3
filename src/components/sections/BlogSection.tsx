"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaClock, FaSearch } from "react-icons/fa";
// import { ScrollAnimation } from "@/components/ui/scroll-animation";
// import { AnimatedText } from "@/components/ui/animated-text";
// import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Badge } from "@/components/ui/badge";
import { HoverCard } from "@/components/ui/hover-card";
import { blogPosts } from "@/data/blog";
import { BlogPost, BlogCategory } from "@/types/blog";
import { SectionTitle } from '@/components/ui/section-title';
import { BlogSectionSkeleton } from "@/components/ui/blog-section-skeleton";
import { GradientBackground } from "@/components/ui/gradient-background";

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

const categories: BlogCategory[] = [
  "Web Development",
  "Mobile Development",
  "DevOps",
  "UI/UX",
  "Career",
  "Tutorial",
  "Technology",
];

const POSTS_PER_PAGE = 6;

export const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Filter by category
    if (selectedCategory !== "all") {
      posts = posts.filter((post) => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [selectedCategory, searchQuery]);

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  // Pagination
  const totalPages = Math.ceil(regularPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = regularPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of posts section
    document.getElementById("posts-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <section id="blog" className="py-20 px-4">
        <GradientBackground>
          <div className="container mx-auto max-w-6xl">
            <BlogSectionSkeleton />
          </div>
        </GradientBackground>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle
          title="Latest Articles"
          description="Thoughts, tutorials, and insights about web development"
          titleAnimation="bounce"
          descriptionAnimation="fade"
          parallaxOffset={20}
        />

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className="w-full px-4 py-2 pl-10 rounded-full border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => {
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              {featuredPosts.map((post) => (
                <FeaturedPostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {/* Regular Posts */}
          <div id="posts-grid" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-md bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-md ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-md bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedPostCard = ({ post }: { post: BlogPost }) => (
  <motion.div variants={itemVariants}>
    <Link href={`/blog/${post.slug}`}>
      <HoverCard>
        <motion.div whileHover={{ scale: 1.02 }} className="group relative rounded-lg border bg-background/50 overflow-hidden backdrop-blur-sm">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={675}
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute top-2 right-2">
              <Badge variant="default">Featured</Badge>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <span className="inline-flex items-center gap-1">
                <FaCalendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
              <span className="inline-flex items-center gap-1">
                <FaClock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-4">{post.description}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </HoverCard>
    </Link>
  </motion.div>
);

const PostCard = ({ post }: { post: BlogPost }) => (
  <motion.div variants={itemVariants}>
    <Link href={`/blog/${post.slug}`}>
      <HoverCard>
        <motion.div whileHover={{ scale: 1.02 }} className="group relative rounded-lg border bg-background/50 overflow-hidden backdrop-blur-sm">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={800}
              height={450}
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <span className="inline-flex items-center gap-1">
                <FaCalendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
              <span className="inline-flex items-center gap-1">
                <FaClock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">{post.description}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </HoverCard>
    </Link>
  </motion.div>
); 