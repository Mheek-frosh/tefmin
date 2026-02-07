import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, TrendingUp, ChevronUp, X, MessageCircle, Share2, Twitter, Send } from "lucide-react";
import { Newsletter } from "../components/Newsletter";
import blog1 from "../assets/blog1.jpeg";

const blogPosts = [
    {
        id: "srms-pension-solution",
        title: "Digital Transformation in Pension Systems: NGF and SRMS Partner for 'I'm Alive' Solution Adoption",
        excerpt: "SRMS seeks a strategic partnership with the Nigeria Governor’s Forum (NGF) to implement the innovative 'I'm Alive' pension verification system across all 36 states.",
        fullContent: `In a landmark move towards digital governance and social security reform, Secure Records Management Solutions (SRMS) has engaged with the Nigeria Governor’s Forum (NGF) to propose the nationwide adoption of the "I’m Alive" pension verification solution.

The "I’m Alive" solution is a state-of-the-art technological platform designed to solve one of the most persistent challenges in Nigeria's public sector: the periodic verification of pensioners. Traditionally, elderly citizens have been forced to travel long distances and wait in grueling queues to prove they are still alive to receive their hard-earned benefits. SRMS's innovation replaces this cumbersome process with a seamless, mobile-first experience.

Leveraging sophisticated facial recognition, liveness detection, and biometric matching, the "I’m Alive" solution allows pensioners to verify their status from the comfort of their homes using a smartphone or at designated local access points. This adoption by state governments, facilitated by the NGF, promises to eliminate "ghost pensioners," drastically reduce administrative costs, and most importantly, restore dignity to our senior citizens.

During a recent strategic session with key stakeholders from the NGF, SRMS leadership demonstrated how the platform integrates with existing state payroll systems to provide real-time data accuracy. The partnership aims to create a uniform, secure, and transparent verification standard across all 36 states of the Federation.

"Our goal is to ensure that no Nigerian pensioner ever has to suffer the indignity of a verification queue again," stated a representative from the SRMS leadership. "By partnering with the NGF, we can scale this solution to every corner of the country, ensuring that the right benefits reach the right people at the right time."

This initiative marks a significant milestone for TEFMIN and its partners as we continue to drive institutional strengthening and human-centric technological adoption across Nigeria.`,
        category: "Innovation",
        image: blog1,
        date: "February 7, 2026",
        readTime: "7 min read",
        featured: true,
        author: "TEFMIN Communications",
    },
    {
        id: 1,
        title: "Nigeria's Path to Industrial Self-Sufficiency: A 2026 Vision",
        excerpt: "Exploring how local manufacturing can transform our economy and create millions of jobs for Nigerian youth.",
        fullContent: `Nigeria stands at a pivotal moment in its economic history. With a population exceeding 200 million and a median age of just 18 years, the country possesses an extraordinary demographic dividend that, if properly harnessed, could transform it into Africa's manufacturing powerhouse.

The path to industrial self-sufficiency is not merely an economic strategy—it's a matter of national survival and dignity. For too long, we have exported raw materials only to import finished goods at premium prices. This cycle of dependency has drained our foreign reserves, weakened our currency, and left millions unemployed.

TEFMIN's vision for 2026 centers on three core pillars: First, the establishment of regional manufacturing hubs that leverage local resources and talent. Second, a comprehensive skills development program that prepares our youth for modern industrial work. Third, strategic partnerships with international technology providers to accelerate our learning curve.

The numbers tell a compelling story. Local manufacturing could reduce import dependency by 40% within five years, create over 2 million direct jobs, and generate $50 billion in economic value. But these figures only become reality through coordinated action between government, private sector, and civil society.

We are not starting from zero. Nigeria already has pockets of manufacturing excellence—from textile mills in Kaduna to cement plants in Ogun, from food processing facilities in Kano to pharmaceutical companies in Lagos. What we need now is to connect these dots, share best practices, and scale what works.

The future is not something that happens to us. It is something we create. And that future, we firmly believe, will be Made in Nigeria.`,
        category: "Industry",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        date: "February 5, 2026",
        readTime: "8 min read",
        featured: true,
        author: "TEFMIN Editorial Team",
    },
    {
        id: 2,
        title: "The Role of Technology in Modern African Manufacturing",
        excerpt: "How AI, automation, and IoT are revolutionizing production lines across the continent.",
        fullContent: `The Fourth Industrial Revolution is not just a buzzword—it's reshaping how goods are produced across the globe. For African manufacturers, this presents both a challenge and an unprecedented opportunity to leapfrog traditional industrialization pathways.

Artificial Intelligence is transforming quality control. Computer vision systems can now detect defects with 99.9% accuracy, far exceeding human capabilities. Nigerian manufacturers who adopt these technologies early gain a significant competitive advantage, reducing waste and improving product consistency.

The Internet of Things (IoT) enables predictive maintenance, potentially reducing downtime by up to 50%. Smart sensors monitor equipment health in real-time, alerting operators before failures occur. This is particularly valuable in contexts where spare parts may take weeks to import.

Automation doesn't mean eliminating jobs—it means elevating them. Workers transition from repetitive manual tasks to supervising intelligent systems, programming robots, and analyzing data. The key is investing in workforce retraining to ensure no one is left behind.

TEFMIN's technology partnerships are bringing these capabilities to Nigerian SMEs at accessible price points. Through shared manufacturing hubs, even small producers can access world-class automation without prohibitive capital investments.

The future of African manufacturing is intelligent, connected, and distinctly African—built by us, for us, with the best of global technology adapted to our unique contexts.`,
        category: "Technology",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        date: "February 3, 2026",
        readTime: "6 min read",
        featured: false,
        author: "Dr. Aisha Mohammed",
    },
    {
        id: 3,
        title: "Empowering Women Entrepreneurs in Northern Nigeria",
        excerpt: "Success stories from our empowerment cycles that have transformed communities.",
        fullContent: `In the bustling markets of Kano, a quiet revolution is underway. Women who once sold small quantities of groundnuts from roadside stalls now own processing facilities that export to international markets. This transformation didn't happen by accident—it's the result of deliberate, sustained empowerment programs.

TEFMIN's Women Enterprise Initiative has trained over 5,000 women entrepreneurs across Northern Nigeria since 2024. The program goes beyond basic business skills to include financial literacy, digital marketing, and export documentation.

What makes this initiative unique is its recognition that women face specific barriers. Childcare responsibilities, mobility constraints, and limited access to formal credit all require tailored solutions. Our rotating savings groups, for instance, provide the social infrastructure that formal banks cannot.

The multiplier effect is remarkable. Research shows that women reinvest 90% of their income into their families and communities, compared to 35% for men. Every woman we empower creates ripples that extend to her children, extended family, and neighbors.

Success stories abound: Hajiya Fatima now employs 23 women in her shea butter processing cooperative. Hauwa's poultry business supplies three major supermarket chains. Aisha's tailoring workshop has trained 40 apprentices who have gone on to start their own businesses.

The future of Nigerian enterprise is increasingly female, and TEFMIN is proud to be a catalyst for this transformation.`,
        category: "Empowerment",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
        date: "January 28, 2026",
        readTime: "5 min read",
        featured: false,
        author: "Amina Ibrahim",
    },
    {
        id: 4,
        title: "Sustainable Energy Solutions for Nigerian Industries",
        excerpt: "Implementing solar and hybrid power systems to reduce operational costs and carbon footprint.",
        fullContent: `Energy costs remain the single largest operational expense for most Nigerian manufacturers, often accounting for 40% or more of production costs. With grid electricity unreliable and diesel generators expensive and polluting, the business case for renewable energy has never been stronger.

Solar power costs have dropped by 89% over the past decade, making it increasingly competitive with fossil fuels. For manufacturers with significant daytime operations, rooftop solar can now provide electricity at a fraction of grid or generator costs.

Hybrid systems that combine solar, batteries, and backup generators offer the best of all worlds: clean power when the sun shines, stored power for cloudy periods, and generator backup for extended outages. Smart controllers optimize the mix automatically.

Beyond cost savings, renewable energy enhances competitiveness in global markets. International buyers increasingly require suppliers to demonstrate environmental responsibility. Carbon footprint certifications are becoming essential for export-oriented manufacturers.

TEFMIN's Energy Access Initiative partners with leading solar providers to offer financing solutions that make the transition affordable. Manufacturers can pay from savings, with no upfront capital required.

The journey to net-zero is not just an environmental imperative—it's a business opportunity. Nigerian manufacturers who embrace clean energy today will lead the industries of tomorrow.`,
        category: "Energy",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
        date: "January 22, 2026",
        readTime: "7 min read",
        featured: false,
        author: "Emmanuel Okonkwo",
    },
    {
        id: 5,
        title: "Building Local Supply Chains: From Farm to Factory",
        excerpt: "How TEFMIN is connecting local producers with manufacturing hubs across Nigeria.",
        fullContent: `Nigeria imports over $1 billion worth of raw materials annually that could be sourced domestically. This represents not just a drain on foreign exchange, but a missed opportunity to create jobs and value in local communities.

TEFMIN's Supply Chain Integration Program maps local production capabilities and connects them with industrial buyers. The platform now includes over 2,000 registered agricultural producers and 500 manufacturing enterprises.

Quality assurance is paramount. We've established testing laboratories that certify local materials meet international standards. This gives manufacturers confidence to switch from imports to local alternatives.

The benefits extend beyond cost savings. Shorter supply chains mean reduced lead times, lower inventory requirements, and greater flexibility to respond to market changes. When your supplier is 100 kilometers away rather than 10,000, adjustments happen in days rather than months.

For farmers and primary producers, industrial linkages provide stable, predictable demand. Contract farming arrangements guarantee prices and volumes, enabling investment in productivity improvements.

Case study: A textile manufacturer in Kano now sources 70% of its cotton locally, saving 35% on raw material costs while supporting over 500 farming families. The quality matches or exceeds imported alternatives.

The future of Nigerian industry is deeply rooted in Nigerian soil. Every local supply chain connection strengthens our collective resilience.`,
        category: "Supply Chain",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        date: "January 15, 2026",
        readTime: "6 min read",
        featured: false,
        author: "Blessing Adekunle",
    },
    {
        id: 6,
        title: "Youth Innovation Hubs: Nurturing the Next Generation",
        excerpt: "Inside our tech incubators that are producing Nigeria's future industry leaders.",
        fullContent: `Nigeria's youth bulge is often described as a ticking time bomb—millions of young people entering a job market that can't absorb them. TEFMIN sees it differently: as an unprecedented resource that, properly channeled, can drive national transformation.

Our Youth Innovation Hubs operate in six states, providing young entrepreneurs with the tools, mentorship, and connections they need to build successful ventures. These aren't just co-working spaces—they're intensive acceleration programs.

The curriculum combines technical skills with business acumen. Participants learn product development, financial management, marketing, and leadership. Industry experts provide hands-on mentorship, sharing lessons from their own entrepreneurial journeys.

Access to prototyping equipment, 3D printers, and manufacturing tools allows young innovators to transform ideas into tangible products. Many participants arrive with concepts; they leave with market-ready prototypes and initial customers.

The results speak for themselves: Hub alumni have raised over ₦500 million in investment, created 350 direct jobs, and generated ₦1.2 billion in revenue. Sixty percent of ventures remain operational after three years—well above typical startup survival rates.

More importantly, these young entrepreneurs are changing the narrative. They're proving that Nigerian youth are not problems to be solved but solutions waiting to be unleashed.

The future isn't something we wait for. It's something these young leaders are building, one innovation at a time.`,
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        date: "January 10, 2026",
        readTime: "4 min read",
        featured: false,
        author: "Chidi Emeka",
    },
    {
        id: 7,
        title: "Digital Transformation in Rural Agriculture",
        excerpt: "Bridging the digital divide for smallholder farmers through mobile-first solutions.",
        fullContent: `Rural agriculture remains the backbone of Nigeria's economy, yet many farmers are disconnected from modern markets and data-driven insights. TEFMIN's 'Digital Farm' initiative is changing this by bringing mobile technology to the heart of our rural communities.

Through a simple USSD interface, farmers can now access real-time weather forecasts, market prices, and expert advice on pest control. This information, previously unavailable or delayed, allows them to make informed decisions that directly impact their yields and income.

We've deployed solar-powered digital centers in over 50 villages, where farmers can learn how to use these tools and even access micro-financing tailored to their harvest cycles. The data collected from these interactions also helps us understand regional trends and anticipate food security challenges before they become crises.

The impact is measurable: farmers using our platform have seen an average 25% increase in productivity and a 30% rise in profit margins. By cutting out unnecessary middlemen and providing direct access to buyers, we are ensuring that the wealth generated on the farm stays with the farmers.

Technology is not a luxury for the urban elite; it is a fundamental tool for rural progress. As we scale this program, we are not just growing crops—we are growing a digital ecosystem that empowers everyone.`,
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
        date: "February 1, 2026",
        readTime: "5 min read",
        author: "Sarah Ogunlana",
    },
    {
        id: 8,
        title: "The Ethics of AI in African Industry",
        excerpt: "Navigating the complex landscape of automation while preserving human dignity.",
        fullContent: `As we integrate Artificial Intelligence into our manufacturing processes, we must ask ourselves: what kind of society are we building? At TEFMIN, we believe that technology should serve humanity, not replace it.

The 'Human-Centric Automation' framework we've developed focuses on augmenting human capabilities rather than simple substitution. For example, AI can handle heavy lifting or precision tasks that are dangerous for humans, while humans focus on creativity, complex problem-solving, and emotional intelligence—things AI still struggles with.

Ethical AI also means transparency and accountability. We ensure that all algorithmic decisions in our smart factories are auditable and unbiased. This is particularly important when AI is used in hiring or performance evaluation, where historical biases could otherwise be amplified.

Furthermore, we are committed to 'Just Transition' policies. Every time a process is automated, we provide the affected workers with re-skilling opportunities for higher-value roles within the same organization. Our goal is net job creation through the efficiency and growth that AI enables.

The future of African industry will be automated, but it must also be ethical. By setting these standards now, we ensure that the benefits of the Fourth Industrial Revolution are shared by all.`,
        category: "Technology",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800",
        date: "January 30, 2026",
        readTime: "7 min read",
        author: "Prof. Kolawole Balogun",
    },
    {
        id: 9,
        title: "Circular Economy: Waste to Wealth in Lagos",
        excerpt: "How local startups are turning industrial plastic waste into construction materials.",
        fullContent: `Lagos generates thousands of tons of plastic waste every day, much of it from industrial packaging. Instead of seeing this as a problem, a new wave of 'green-preneurs' sees it as a raw material for the city's future.

TEFMIN is proud to support several startups that have developed proprietary technology to melt down diverse plastic resins and mold them into high-density building blocks. These blocks are not only more durable than traditional concrete but also have better thermal insulation properties.

One such startup, 'EcoBuild', has already paved three community centers using bricks made entirely from recycled industrial wrappers. This approach solves two problems at once: it cleans up the environment and provides affordable, sustainable building materials for our growing population.

We are also working with large manufacturers to implement 'Closed-Loop' systems, where they take back their own packaging from customers and feed it back into their production lines. This reduces their raw material costs and eliminates their environmental footprint.

The circular economy is not just an environmental dream; it's a multi-billion naira industry waiting to be tapped. In Nigeria, we have the ingenuity and the necessity to lead the world in waste-to-wealth innovation.`,
        category: "Industry",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
        date: "January 25, 2026",
        readTime: "6 min read",
        author: "Funke Adewale",
    },
];

const categories = ["All", "Industry", "Technology", "Empowerment", "Energy", "Innovation", "Supply Chain"];

// WhatsApp icon component
const WhatsApp = ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedPostId, setExpandedPostId] = useState(blogPosts[0].id);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [commentText, setCommentText] = useState("");

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const expandedPost = expandedPostId ? blogPosts.find(p => p.id === expandedPostId) : null;
    const gridPosts = filteredPosts.filter(p => p.id !== expandedPostId);

    const handleShare = (platform, post) => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(`${post.title} - Read more on TEFMIN Blog`);

        if (platform === 'whatsapp') {
            window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
        } else if (platform === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        }
    };

    const handlePostClick = (id) => {
        setExpandedPostId(id);
        setIsCollapsed(false);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    return (
        <div className="pt-32 pb-24 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            {/* Hero Header */}
            <section className="max-w-7xl mx-auto px-6 mb-10">
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
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                        Discover stories of innovation, empowerment, and industrial transformation across Nigeria and Africa.
                    </p>
                </motion.div>

                {/* Search and Filters */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
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

                    <div className="flex flex-wrap justify-center gap-2">
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

            {/* Expanded Post - Shows at top when a post is selected */}
            <section className="max-w-7xl mx-auto px-6 mb-12">
                <AnimatePresence mode="wait">
                    {expandedPost && (
                        <motion.div
                            key={`expanded-${expandedPost.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                height: isCollapsed ? "550px" : "auto"
                            }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="bg-white dark:bg-gray-800 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 relative"
                        >
                            {/* Top Right Close Button (X) - Now toggles collapse */}
                            <button
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-all shadow-lg active:scale-95 group border border-white/20"
                                title={isCollapsed ? "Expand Article" : "Collapse Article"}
                            >
                                {isCollapsed ? <ArrowRight size={24} className="rotate-90" /> : <X size={24} />}
                            </button>

                            {/* Expanded Header with Image */}
                            <div className={`relative transition-all duration-500 ${isCollapsed ? "h-[550px]" : "h-64 md:h-96"} overflow-hidden`}>
                                <img
                                    src={expandedPost.image}
                                    alt={expandedPost.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent ${isCollapsed ? "from-black/90" : ""}`} />

                                {/* Title Overlay */}
                                <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-12 transition-all duration-500 ${isCollapsed ? "pb-24" : ""}`}>
                                    <div className={`flex items-center gap-4 mb-4 ${isCollapsed ? "flex" : ""}`}>
                                        {expandedPost.featured && (
                                            <span className="px-4 py-1.5 rounded-full bg-secondary/80 text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                                <TrendingUp size={14} />
                                                Featured
                                            </span>
                                        )}
                                        <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                                            {expandedPost.category}
                                        </span>
                                    </div>
                                    <h2 className={`font-black text-white leading-tight max-w-4xl transition-all duration-500 ${isCollapsed ? "text-2xl md:text-3xl mb-4" : "text-3xl md:text-5xl mb-4"}`}>
                                        {expandedPost.title}
                                    </h2>
                                    <div className={`flex items-center gap-6 text-sm text-white/70 ${isCollapsed ? "flex" : ""}`}>
                                        <span className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {expandedPost.date}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Clock size={16} />
                                            {expandedPost.readTime}
                                        </span>
                                        {!isCollapsed && <span>By {expandedPost.author}</span>}
                                    </div>

                                    {/* Excerpt when collapsed */}
                                    {isCollapsed && (
                                        <p className="text-white/80 mt-6 md:text-lg line-clamp-2 max-w-2xl leading-relaxed">
                                            {expandedPost.excerpt}
                                        </p>
                                    )}
                                </div>

                                {/* Read More Indicator when collapsed */}
                                {isCollapsed && (
                                    <div className="absolute bottom-8 left-12 flex items-center gap-4">
                                        <button
                                            onClick={() => setIsCollapsed(false)}
                                            className="px-6 py-2.5 bg-secondary text-primary font-black text-xs uppercase tracking-widest rounded-xl flex items-center gap-3 hover:scale-105 transition-transform"
                                        >
                                            Continue Reading
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Article Content */}
                            <AnimatePresence>
                                {!isCollapsed && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="p-6 md:p-12 lg:p-16 relative"
                                    >
                                        <div className="max-w-4xl mx-auto">
                                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                                {expandedPost.fullContent.split('\n\n').map((paragraph, index) => (
                                                    <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>

                                            {/* Share Section */}
                                            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700">
                                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Share this article</h4>
                                                        <div className="flex gap-3">
                                                            <button
                                                                onClick={() => handleShare('whatsapp', expandedPost)}
                                                                className="flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm transition-colors"
                                                            >
                                                                <WhatsApp size={18} />
                                                                WhatsApp
                                                            </button>
                                                            <button
                                                                onClick={() => handleShare('twitter', expandedPost)}
                                                                className="flex items-center gap-2 px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold text-sm transition-colors"
                                                            >
                                                                <Twitter size={18} />
                                                                Twitter
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Right Collapse Button */}
                                        <button
                                            onClick={() => {
                                                setIsCollapsed(true);
                                                window.scrollTo({ top: 300, behavior: 'smooth' });
                                            }}
                                            className="absolute bottom-6 right-6 p-4 rounded-2xl bg-primary hover:bg-primary/90 text-white flex items-center gap-2 shadow-xl shadow-primary/20 transition-all active:scale-95 group border border-white/10"
                                        >
                                            <span className="text-xs font-black uppercase tracking-widest">Collapse</span>
                                            <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {gridPosts.map((post, index) => {
                        const isFeatured = index === 0;
                        return (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group cursor-pointer ${isFeatured ? "md:col-span-2 lg:col-span-2" : ""}`}
                                onClick={() => handlePostClick(post.id)}
                            >
                                <div className={`bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${isFeatured ? "md:flex-row h-full" : "h-full"}`}>
                                    <div className={`relative overflow-hidden ${isFeatured ? "md:w-1/2" : "h-64"}`}>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-primary dark:text-secondary text-[10px] font-black uppercase tracking-wider shadow-lg">
                                                {post.category}
                                            </span>
                                        </div>
                                        {isFeatured && (
                                            <div className="absolute top-4 right-4">
                                                <span className="px-4 py-1.5 rounded-full bg-secondary text-primary text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-2">
                                                    <TrendingUp size={12} />
                                                    Latest
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`p-8 flex flex-col justify-center ${isFeatured ? "md:w-1/2" : "flex-1"}`}>
                                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4 font-bold uppercase tracking-widest">
                                            <span className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Clock size={14} />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className={`${isFeatured ? "text-2xl md:text-3xl" : "text-xl"} font-black text-gray-900 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-secondary transition-colors leading-tight`}>
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed text-base">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-primary font-black text-xs uppercase tracking-tighter overflow-hidden">
                                                    {post.author.charAt(0)}
                                                </div>
                                                <span className="text-sm font-black text-gray-900 dark:text-white tracking-tight">{post.author}</span>
                                            </div>
                                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm">
                                                <ArrowRight size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
            {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">No articles found matching your criteria.</p>
                </div>
            )}

            {/* Comments & Social Section */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-[3rem] p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-secondary">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white">Join the Conversation</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Share your thoughts on our articles</p>
                        </div>
                    </div>

                    {/* Comment Form */}
                    <div className="mb-8">
                        <textarea
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Write a comment..."
                            rows={4}
                            className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                        />
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                            <p className="text-xs text-gray-400">Be respectful and constructive in your feedback.</p>
                            <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors flex items-center gap-2">
                                <Send size={18} />
                                Post Comment
                            </button>
                        </div>
                    </div>

                    {/* Social Share Buttons */}
                    <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 text-xl">
                            <Share2 size={22} className="text-primary dark:text-secondary" />
                            Share TEFMIN Insights
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent('Stay updated with TEFMIN Blog - Transforming Nigeria\'s Industry ' + window.location.href)}`, '_blank')}
                                className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-green-500/20"
                            >
                                <WhatsApp size={24} />
                                <span>Share on WhatsApp</span>
                            </button>
                            <button
                                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Discover insights on Nigerian industrial growth at TEFMIN Blog')}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-sky-500/20"
                            >
                                <Twitter size={24} />
                                <span>Share on Twitter</span>
                            </button>
                        </div>
                        <p className="text-center text-gray-400 text-xs mt-6 italic">
                            Help us spread the word about industrial transformation in Nigeria.
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <div className="mt-24">
                <Newsletter />
            </div>
        </div>
    );
}
