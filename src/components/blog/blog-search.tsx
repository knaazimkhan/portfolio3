import { useState, useCallback, ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import type { BlogPostMeta } from '@/lib/mdx';

interface BlogSearchProps {
  posts: BlogPostMeta[];
  onSearch: (filteredPosts: BlogPostMeta[]) => void;
}

export const BlogSearch = ({ posts, onSearch }: BlogSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    
    const filtered = posts.filter((post) => {
      const searchContent = `${post.title} ${post.description} ${post.tags.join(' ')}`.toLowerCase();
      return searchContent.includes(term.toLowerCase());
    });
    
    onSearch(filtered);
  }, [posts, onSearch]);

  return (
    <div className="relative mb-8">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search posts by title, description, or tags..."
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
          className="pl-10"
        />
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
      </div>
    </div>
  );
}; 