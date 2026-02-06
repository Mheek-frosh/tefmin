import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";

const blogPosts = [
    {
        id: 1,
        title: "Nigeria's Path to Industrial Self-Sufficiency: A 2026 Vision",
        excerpt: "Exploring how local manufacturing can transform our economy and create millions of jobs for Nigerian youth.",
        category: "Industry",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        date: "February 5, 2026",
        readTime: "8 min read",
        featured: true,
    },
    {
        id: 2,
        title: "The Role of Technology in Modern African Manufacturing",
        excerpt: "How AI, automation, and IoT are revolutionizing production lines across the continent.",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        date: "February 3, 2026",
        readTime: "6 min read",
        featured: false,
    },
    {
        id: 3,
        title: "Empowering Women Entrepreneurs in Northern Nigeria",
        excerpt: "Success stories from our empowerment cycles that have transformed communities.",
        category: "Empowerment",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
        date: "January 28, 2026",
        readTime: "5 min read",
        featured: false,
    },
    {
        id: 4,
        title: "Sustainable Energy Solutions for Nigerian Industries",
        excerpt: "Implementing solar and hybrid power systems to reduce operational costs and carbon footprint.",
        category: "Energy",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
        date: "January 22, 2026",
        readTime: "7 min read",
        featured: false,
    },
    {
        id: 5,
        title: "Building Local Supply Chains: From Farm to Factory",
        excerpt: "How TEFMIN is connecting local producers with manufacturing hubs across Nigeria.",
        category: "Supply Chain",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        date: "January 15, 2026",
        readTime: "6 min read",
        featured: false,
    },
    {
        id: 6,
        title: "Youth Innovation Hubs: Nurturing the Next Generation",
        excerpt: "Inside our tech incubators that are producing Nigeria's future industry leaders.",
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        date: "January 10, 2026",
        readTime: "4 min read",
        featured: false,
    },
];

const categories = ["All", "Industry", "Technology", "Empowerment", "Energy", "Innovation", "Supply Chain"];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    const filteredPosts = regularPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-32 pb-24 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            {/* Hero Header */}
            <section className="max-w-7xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                        Insights & Stories
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                        The TEFMIN <span className="text-primary dark:text-secondary italic">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover stories of innovation, empowerment, and industrial transformation across Nigeria and Africa.
                    </p>
                </motion.div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="max-w-7xl mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gray-50 dark:bg-gray-800 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-10 lg:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                        <TrendingUp size={14} />
                                        Featured
                                    </span>
                                    <span className="px-4 py-1.5 rounded-full bg-primary/5 dark:bg-primary/10 text-primary dark:text-secondary text-xs font-bold uppercase tracking-wider">
                                        {featuredPost.category}
                                    </span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
                                    <span className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        {featuredPost.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock size={16} />
                                        {featuredPost.readTime}
                                    </span>
                                </div>
                                <button className="inline-flex items-center gap-3 text-primary dark:text-secondary font-bold text-lg group/btn">
                                    Read Article
                                    <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </section>
            )}

            {/* Search and Filters */}
            <section className="max-w-7xl mx-auto px-6 mb-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    {/* Search */}
                    <div className="relative w-full lg:w-96">
                        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeCategory === category
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-primary/5 dark:bg-primary/10 text-primary dark:text-secondary text-xs font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">No articles found matching your criteria.</p>
                    </div>
                )}
            </section>

            {/* Newsletter */}
            <div className="mt-24">
                <Newsletter />
            </div>
        </div>
    );
}

