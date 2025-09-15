import React from "react";
import { useParams } from "react-router-dom";

const posts = {
  1: {
    title: "The Future of Work with AI Tools: How Technology is Redefining Productivity",
    content: "AI tools are revolutionizing the workplace by automating repetitive tasks, enabling smarter decision-making, and boosting team efficiency. Discover how technology is reshaping productivity and what it means for the future of work. From virtual assistants to intelligent automation, learn how businesses and professionals can leverage AI to stay ahead in a rapidly changing world.",
    sidebar: "Related: Workplace Automation, Productivity, AI Trends"
  },
  2: {
    title: "Why Every Business Needs AI Chatbots & Virtual Assistants in 2025",
    content: "AI chatbots and virtual assistants are transforming customer service, sales, and business operations. Learn why these tools are essential for modern businesses and how they drive growth and satisfaction.",
    sidebar: "Related: Chatbots, Virtual Assistants, Business Growth"
  },
  3: {
    title: "Top 5 AI Tools Every Creator Should Try This Year",
    content: "Explore a curated list of the most innovative AI tools for creators, designers, and marketers. Find out which platforms are leading the way in 2025 and how they can help you create, design, and market more effectively.",
    sidebar: "Related: AI for Creators, Design Tools, Marketing"
  }
};

const BlogDetails = (props) => {
  const params = useParams();
  const id = props.id || params.id;
  const post = posts[id];

  if (!post) return <div>Post not found.</div>;

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[700px] md:min-h-[800px] w-full flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">Blog Details</h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium max-w-3xl mx-auto">Read the full story and insights from our latest blog post.</p>
        </div>
      </section>
      {/* Existing content below */}
      <div className="container mx-auto py-8 flex flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p>{post.content}</p>
        </div>
        <aside className="md:w-1/3 md:pl-8 mt-8 md:mt-0">
          <h2 className="font-semibold">Sidebar</h2>
          <p>{post.sidebar}</p>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetails;