import { useParams, Link } from "react-router-dom";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Post not found</h2>
          <p className="mt-4">The article you are looking for does not exist.</p>
          <Link to="/" className="mt-6 inline-block text-accent">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-sm text-muted-foreground">← Back</Link>
        <h1 className="text-4xl font-heading font-semibold mt-4 mb-2">{post.title}</h1>
        <div className="text-sm text-muted-foreground mb-6">
          {post.date} • {post.readTime}
        </div>
        <article className="prose max-w-none">
          {/* content is markdown-like plain text; render simply for now */}
          {post.content?.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
