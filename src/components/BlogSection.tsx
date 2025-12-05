import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { posts } from "@/data/posts";
import heroBg from "@/assets/hero-bg.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

// posts imported from shared data

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 group cursor-pointer min-h-[180px] card-hover">
    <div className="card-image rounded-t-md" style={{ backgroundImage: `url(${heroBg})` }} role="img" aria-label={`${post.title} thumbnail`} />
    <CardHeader>
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {post.readTime}
        </span>
      </div>
      <CardTitle className="text-xl font-heading text-foreground group-hover:text-accent transition-colors">
        {post.title}
      </CardTitle>
      <CardDescription className="text-muted-foreground line-clamp-2">
        {post.excerpt}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <span className="text-accent flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Read more <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </CardContent>
  </Card>
);

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4 text-center">
          Blog
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Thoughts on trading, development, and everything in between.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block">
              <BlogCard post={post} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
