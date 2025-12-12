import { Calendar, User } from "lucide-react";
import PageHeader from "../components/PageHeader";

const blogPosts = [
  {
    title: "The Future of Cloud Computing in 2025",
    excerpt:
      "Explore emerging trends and technologies that will shape enterprise cloud strategies in the coming year.",
    date: "Jan 15, 2025",
    author: "John Smith",
    category: "Cloud Strategy",
  },
  {
    title: "AI-Powered Data Analytics: A Game Changer",
    excerpt:
      "Discover how AI and machine learning are transforming data analysis and business intelligence.",
    date: "Jan 10, 2025",
    author: "Sarah Johnson",
    category: "Data & AI",
  },
  {
    title: "DevOps Best Practices for Enterprise",
    excerpt:
      "Learn key strategies for implementing DevOps in large-scale enterprise environments.",
    date: "Jan 5, 2025",
    author: "Mike Davis",
    category: "DevOps",
  },
  {
    title: "Digital Transformation Success Stories",
    excerpt:
      "Real-world case studies of organizations that achieved remarkable results through digital transformation.",
    date: "Dec 28, 2024",
    author: "Emily Chen",
    category: "Digital Transformation",
  },
  {
    title: "Cybersecurity in the Cloud Era",
    excerpt:
      "Essential security practices and frameworks for protecting your cloud infrastructure.",
    date: "Dec 20, 2024",
    author: "Robert Wilson",
    category: "Security",
  },
  {
    title: "Scaling Your Startup with Cloud Infrastructure",
    excerpt:
      "How startups can leverage cloud services to scale rapidly without heavy capital investments.",
    date: "Dec 15, 2024",
    author: "Lisa Anderson",
    category: "Startup",
  },
];

export default function BlogsPage() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <PageHeader title="Blog & Insights">
          <p className="text-lg text-white/70 ">
            Stay updated with the latest insights, trends, and best practices in
            cloud computing and digital transformation.
          </p>
        </PageHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="p-6 rounded-xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group "
            >
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
                {post.category}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {post.title}
              </h3>

              <p className="text-white/70 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
