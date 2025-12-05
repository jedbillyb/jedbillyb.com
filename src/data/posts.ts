export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content?: string;
}

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Algorithmic Trading",
    excerpt:
      "A beginner's guide to understanding and implementing basic trading algorithms using Python and popular financial APIs.",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    tags: ["Trading", "Python", "Finance"],
    content: `
### Getting Started with Algorithmic Trading

This is a placeholder article. Replace with the real post content.

`,
  },
  {
    id: "2",
    title: "Building a Real-Time Stock Dashboard",
    excerpt:
      "How I built a real-time stock tracking dashboard using React, WebSockets, and the Alpha Vantage API.",
    date: "Nov 20, 2024",
    readTime: "12 min read",
    tags: ["React", "WebSockets", "Tutorial"],
    content: `
### Building a Real-Time Stock Dashboard

This is a placeholder article. Replace with the real post content.

`,
  },
  {
    id: "3",
    title: "My Journey Into Stock Trading",
    excerpt:
      "Reflections on my first year as a retail investor - lessons learned, mistakes made, and strategies that worked.",
    date: "Nov 5, 2024",
    readTime: "6 min read",
    tags: ["Personal", "Investing"],
    content: `
### My Journey Into Stock Trading

This is a placeholder article. Replace with the real post content.

`,
  },
];

export default posts;
