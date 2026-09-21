import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "How AI Is Revolutionising Digital Marketing in 2025",
    excerpt:
      "From hyper-personalised ad campaigns to predictive analytics, discover how artificial intelligence is reshaping the way brands connect with their audiences and drive real ROI.",
    category: "AI & Technology",
    categoryColor: "bg-purple-500",
    date: "September 15, 2025",
    readTime: "6 min read",
    author: "Suraj Bakale",
    authorRole: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop",
    tag: "AI",
  },
  {
    id: 2,
    title: "10 Branding Mistakes That Are Killing Your Business Growth",
    excerpt:
      "A weak brand identity silently erodes trust and revenue. We break down the most common branding pitfalls and exactly how to fix them before they cost you more.",
    category: "Branding",
    categoryColor: "bg-orange-500",
    date: "August 28, 2025",
    readTime: "8 min read",
    author: "Freya Hariya",
    authorRole: "Digital Marketer",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&auto=format&fit=crop",
    tag: "Branding",
  },
  {
    id: 3,
    title: "SEO in 2025: What Still Works & What to Leave Behind",
    excerpt:
      "Search algorithms evolve constantly. This guide covers the ranking factors that matter right now—Core Web Vitals, E-E-A-T, AI Overviews—and the outdated tactics you should drop immediately.",
    category: "SEO",
    categoryColor: "bg-green-500",
    date: "August 10, 2025",
    readTime: "10 min read",
    author: "Atul G",
    authorRole: "Search Engine Expert",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80&auto=format&fit=crop",
    tag: "SEO",
  },
  {
    id: 4,
    title: "The Power of Short-Form Video: Reels, Shorts & TikTok Strategy",
    excerpt:
      "Attention spans are shrinking, but opportunities are exploding. Learn how to craft short-form video content that stops the scroll, builds community, and converts viewers into buyers.",
    category: "Social Media",
    categoryColor: "bg-pink-500",
    date: "July 22, 2025",
    readTime: "7 min read",
    author: "Freya Hariya",
    authorRole: "Digital Marketer",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80&auto=format&fit=crop",
    tag: "Social Media",
  },
  {
    id: 5,
    title: "UI/UX Design Trends Dominating the Web in 2025",
    excerpt:
      "Glassmorphism is out, spatial design is in. Explore the freshest UI/UX trends—from bento grid layouts to AI-generated micro-interactions—that are setting the standard for world-class digital experiences.",
    category: "Design",
    categoryColor: "bg-blue-500",
    date: "July 5, 2025",
    readTime: "9 min read",
    author: "Darshani Raut",
    authorRole: "Designer",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format&fit=crop",
    tag: "Design",
  },
  {
    id: 6,
    title: "E-Commerce Growth Hacks: Scaling Your Store on Amazon & Shopify",
    excerpt:
      "With millions of products competing for attention, winning on marketplace platforms requires more than great listings. Uncover the advanced strategies our experts use to multiply client revenue.",
    category: "E-Commerce",
    categoryColor: "bg-yellow-500",
    date: "June 18, 2025",
    readTime: "11 min read",
    author: "Suraj Bakale",
    authorRole: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&auto=format&fit=crop",
    tag: "E-Commerce",
  },
  {
    id: 7,
    title: "Influencer Marketing ROI: How to Choose the Right Creator",
    excerpt:
      "Not every influencer will move the needle for your brand. We reveal the engagement metrics, audience authenticity checks, and negotiation tactics that separate high-ROI partnerships from expensive mistakes.",
    category: "Influencer Marketing",
    categoryColor: "bg-red-500",
    date: "May 30, 2025",
    readTime: "8 min read",
    author: "Freya Hariya",
    authorRole: "Digital Marketer",
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80&auto=format&fit=crop",
    tag: "Influencer",
  },
  {
    id: 8,
    title: "Web3 & the Future of Brand Loyalty Programmes",
    excerpt:
      "Blockchain-powered loyalty tokens and NFT memberships are more than a buzzword—they're the next frontier of customer retention. Here's how forward-thinking brands are already using Web3 to build unbreakable communities.",
    category: "Web3",
    categoryColor: "bg-indigo-500",
    date: "May 12, 2025",
    readTime: "12 min read",
    author: "Ashutosh Kale",
    authorRole: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80&auto=format&fit=crop",
    tag: "Web3",
  },
];

const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <HeroSlider
        label="INSIGHTS & BLOG"
        title="Ideas That Move"
        rotatingWords={["Brands Forward", "Markets Forward", "Culture Forward"]}
        description="Stay ahead of the curve with expert perspectives on digital marketing, design, AI, and the future of brand building."
        ctaText="Explore Articles"
        ctaLink="/insights"
        backgroundImage=""
      />

      {/* Filter Tabs */}
      <section className="py-10 bg-surface-dark border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "border-white/10 text-surface-dark-foreground/60 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-surface-dark">
        <div className="container mx-auto px-6">
          {/* Featured post (first card larger) */}
          {activeCategory === "All" && (
            <div className="mb-12">
              <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 md:flex">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    src={blogs[0].image}
                    alt={blogs[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`${blogs[0].categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {blogs[0].category}
                    </span>
                    <span className="text-xs text-surface-dark-foreground/40 uppercase tracking-widest">Featured</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-surface-dark-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {blogs[0].title}
                  </h2>
                  <p className="text-surface-dark-foreground/60 text-sm leading-relaxed mb-6">
                    {blogs[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-surface-dark-foreground/40 mb-8">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {blogs[0].date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {blogs[0].readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-surface-dark-foreground">{blogs[0].author}</p>
                      <p className="text-xs text-surface-dark-foreground/40">{blogs[0].authorRole}</p>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-semibold text-primary group/btn">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === "All" ? filtered.slice(1) : filtered).map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Category badge */}
                  <span className={`absolute top-4 left-4 ${blog.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 text-xs text-surface-dark-foreground/40 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {blog.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-surface-dark-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-surface-dark-foreground/55 text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
                    {blog.excerpt}
                  </p>

                  {/* Tag */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <Tag className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs text-primary font-medium">{blog.tag}</span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <p className="text-xs font-semibold text-surface-dark-foreground">{blog.author}</p>
                      <p className="text-[11px] text-surface-dark-foreground/40">{blog.authorRole}</p>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-primary group/btn">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-surface-dark-foreground/40">
              <p className="text-lg">No articles found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-surface-dark via-surface-dark to-primary/10 border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <p className="section-label mb-4">STAY IN THE LOOP</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-dark-foreground mb-4">
            Get Fresh Insights{" "}
            <span className="text-gradient-orange">Delivered Weekly</span>
          </h2>
          <p className="text-surface-dark-foreground/60 mb-8 text-sm leading-relaxed">
            Join 2,000+ marketers and founders who receive our curated digest of
            the latest trends, strategies, and case studies every week.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-surface-dark-foreground placeholder:text-surface-dark-foreground/30 text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3 bg-gradient-orange text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
