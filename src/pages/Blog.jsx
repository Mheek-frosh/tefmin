import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { Button } from "../components/ui/Button";
import { projectItems } from "../data/projectsData";
import blog1 from "../assets/blog1.jpeg";
import cultural from "../assets/cultural.png";
import spain from "../assets/spain.jpeg";
import a1 from "../assets/a1.jpeg";
import a2 from "../assets/a2.jpeg";
import a3 from "../assets/a3.jpeg";
import p1 from "../assets/p1.jpeg";

const blogPosts = [
    {
        id: "pyes-initiative",
        title: "PYES Initiative: Empowering the Next Generation of Nigerian Entrepreneurs",
        excerpt: "National youth empowerment scheme providing tools and training for sustainable livelihoods and economic independence.",
        fullContent: `The Presidential Youth Empowerment Scheme (PYES) represents a transformative initiative aimed at empowering Nigerian youth through skills acquisition, entrepreneurship training, and access to modern business tools. Launched at the prestigious Aso Rock Villa in Abuja, this program provides young entrepreneurs with tricycles, motorcycles, and essential business equipment to kickstart their ventures.

The scheme focuses on creating sustainable livelihoods, reducing unemployment, and fostering economic independence among Nigeria's youth population. Through strategic partnerships with government agencies and private sector stakeholders, PYES has already impacted thousands of young Nigerians, providing them with the resources and training needed to build successful businesses and contribute meaningfully to the nation's economic growth.

By providing the necessary tools and training, PYES ensures that beneficiaries are not just given fish, but taught how to fish. This sustainable approach is key to long-term economic stability and youth engagement in the industrial sector.`,
        category: "Empowerment",
        image: p1,
        date: "February 13, 2026",
        readTime: "8 min read",
        author: "TEFMIN Empowerment Team",
        featured: true,
    },
    {
        id: "srms-pension-solution",
        title: "Digital Transformation in Pension Systems: NGF and SRMS Partner for 'I'm Alive' Solution Adoption",
        excerpt: "SRMS seeks a strategic partnership with the Nigeria Governor's Forum (NGF) to implement the innovative 'I'm Alive' pension verification system across all 36 states.",
        fullContent: `In a landmark move towards digital governance and social security reform, Secure Records Management Solutions (SRMS) has engaged with the Nigeria Governor's Forum (NGF) to propose the nationwide adoption of the "I'm Alive" pension verification solution.

The "I'm Alive" solution is a state-of-the-art technological platform designed to solve one of the most persistent challenges in Nigeria's public sector: the periodic verification of pensioners. Traditionally, elderly citizens have been forced to travel long distances and wait in grueling queues to prove they are still alive to receive their hard-earned benefits. SRMS's innovation replaces this cumbersome process with a seamless, mobile-first experience.

Leveraging sophisticated facial recognition, liveness detection, and biometric matching, the "I'm Alive" solution allows pensioners to verify their status from the comfort of their homes using a smartphone or at designated local access points. This adoption by state governments, facilitated by the NGF, promises to eliminate "ghost pensioners," drastically reduce administrative costs, and most importantly, restore dignity to our senior citizens.

During a recent strategic session with key stakeholders from the NGF, SRMS leadership demonstrated how the platform integrates with existing state payroll systems to provide real-time data accuracy. The partnership aims to create a uniform, secure, and transparent verification standard across all 36 states of the Federation.

"Our goal is to ensure that no Nigerian pensioner ever has to suffer the indignity of a verification queue again," stated a representative from the SRMS leadership. "By partnering with the NGF, we can scale this solution to every corner of the country, ensuring that the right benefits reach the right people at the right time."

This initiative marks a significant milestone for TEFMIN and its partners as we continue to drive institutional strengthening and human-centric technological adoption across Nigeria.`,
        category: "Innovation",
        image: blog1,
        date: "February 7, 2026",
        readTime: "7 min read",
        author: "TEFMIN Communications",
    },
    {
        id: "spain-azud-visit",
        title: "On a working visit to AZUD Industries in Spain",
        excerpt: "TEFMIN delegation visits AZUD Industries in Spain to explore advanced irrigation technologies and sustainable agricultural solutions for Nigerian farmers.",
        fullContent: `In a significant step towards modernizing Nigeria's agricultural sector, a TEFMIN delegation recently undertook a working visit to AZUD Industries in Spain, one of the world's leading manufacturers of irrigation systems and agricultural technology solutions.

The visit, which took place at AZUD's state-of-the-art manufacturing facility, focused on exploring advanced irrigation technologies that could transform water management practices across Nigerian farms. With climate change increasingly affecting rainfall patterns and water availability, efficient irrigation systems have become critical for agricultural productivity and food security.

AZUD Industries, with over 35 years of experience in precision irrigation, showcased their latest innovations in drip irrigation, filtration systems, and fertigation technology. These systems can reduce water consumption by up to 60% while increasing crop yields by 40%—metrics that are particularly relevant for Nigeria's agricultural transformation agenda.

During the facility tour, the TEFMIN team observed the manufacturing process of micro-drip emitters, self-cleaning filters, and automated irrigation controllers. The precision engineering and quality control standards demonstrated by AZUD align perfectly with TEFMIN's commitment to bringing world-class technology to Nigerian farmers.

Discussions centered on potential partnership models that would enable technology transfer, local assembly of irrigation components, and training programs for Nigerian agricultural engineers. AZUD expressed strong interest in establishing a regional hub in Nigeria to serve the West African market, creating jobs while making advanced irrigation technology more accessible and affordable.

The visit also included technical sessions on solar-powered irrigation systems—a perfect fit for Nigeria's abundant sunshine and rural electrification challenges. AZUD's solar pumping solutions can operate entirely off-grid, providing reliable water access to remote farming communities without dependence on diesel generators or unreliable grid power.

One particularly promising area of collaboration involves AZUD's precision fertigation systems, which deliver nutrients directly through irrigation water with computer-controlled precision. This technology can dramatically reduce fertilizer waste while optimizing plant nutrition—addressing both economic and environmental concerns.

The TEFMIN delegation included agricultural engineers, irrigation specialists, and representatives from farmer cooperatives who provided valuable insights into the specific challenges and requirements of Nigerian agriculture. This ground-level perspective helped shape discussions around product adaptation and localization strategies.

AZUD's commitment to sustainability resonated strongly with TEFMIN's values. Their systems not only conserve water but also reduce energy consumption, minimize chemical runoff, and support organic farming practices. These environmental benefits align with Nigeria's climate commitments and the growing global demand for sustainably produced agricultural products.

Looking ahead, both organizations have committed to developing a detailed implementation roadmap. This includes pilot projects in select Nigerian states, training programs for local technicians, and exploration of financing mechanisms that make the technology accessible to smallholder farmers—not just large commercial operations.

The Spain visit represents more than a technology scouting mission—it's about building lasting partnerships that bring global expertise to Nigerian challenges while creating opportunities for local innovation and entrepreneurship. As we work to feed a growing population while managing scarce water resources, collaborations like this become essential building blocks of our agricultural future.`,
        category: "Innovation",
        image: spain,
        date: "February 10, 2026",
        readTime: "8 min read",
        author: "TEFMIN International Relations",
    },
    {
        id: "alhamadinah-integrated-farms",
        title: "Alhamadinah Integrated Farms: A New Era of Sustainable Agriculture and Industrial Innovation",
        excerpt: "Exploring the groundbreaking transformation of Alhamadinah Integrated Farms into a model of sustainable, high-tech agricultural excellence.",
        fullContent: `Alhamadinah Integrated Farms is setting a new standard for modern agriculture in Nigeria. Through a strategic partnership with TEFMIN, the farm has implemented cutting-edge integrated management systems that harmonize diverse agricultural activities into a cohesive, high-efficiency operation.

The core of Alhamadinah's success lies in its 'Circle of Life' approach, where waste from one section becomes the nutrient source for another. This closed-loop system not only reduces environmental impact but also significantly lowers operational costs. Our consultation has helped transition the farm toward 100% sustainable practices, ensuring long-term soil health and productivity.

Sustainability is no longer a luxury; it is a necessity for the future of Nigerian agriculture. Alhamadinah Integrated Farms has become a beacon of hope, demonstrating that eco-friendly farming is not only possible but highly profitable. Through TEFMIN's consultation, Alhamadinah has adopted advanced water conservation techniques, including solar-powered drip irrigation systems that deliver water directly to the plant roots. This has reduced water consumption by 40% while maintaining optimal growth conditions even during the dry season.

The farm also utilizes organic fertilization methods, leveraging poultry and livestock waste processed through industrial-grade composting units. These practices have revitalized the land, producing nutrient-dense crops that command premium prices in both local and international markets.

Strategic consultation is the bridge between potential and performance. In the case of Alhamadinah Integrated Farms, TEFMIN's involvement has been transformative, moving the operation from traditional methods to a data-driven, industrial-scale enterprise. Our advisory services covered everything from organizational structure to supply chain optimization. We helped Alhamadinah establish direct links with industrial buyers, ensuring that their products reach the market at the peak of freshness and value. This vertical integration has significantly increased the farm's profit margins.

Furthermore, we've implemented comprehensive training programs for the farm staff, ensuring that the local community benefits from the knowledge and technology transfer. Alhamadinah is now not just a farm, but a center of excellence for agricultural innovation in the region.`,
        category: "Innovation",
        image: a1,
        images: [a1, a2, a3],
        date: "February 12, 2026",
        readTime: "12 min read",
        author: "TEFMIN & Alhamadinah Team",
        featured: true,
    },
];

const categories = ["All", "Innovation", "Renewable Energy", "Startup Advice", "Consultation", "Industry", "Technology", "Empowerment"];

export default function BlogPage() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Pagination functions
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Get first 3 projects for Related Projects section
    const relatedProjects = projectItems.slice(0, 3);

    const handleProjectClick = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <div className="pt-32 pb-24 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 font-sans">
            {/* Header */}
            <section className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black dark:text-white mb-10 tracking-tight">
                    Blog News
                </h1>

                {/* Search Bar matching the design */}
                <div className="relative max-w-5xl mx-auto mb-10">
                    <div className="relative">
                        <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search blog posts"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-16 pr-6 py-4 rounded-xl bg-gray-100/80 dark:bg-gray-800 border-none text-gray-600 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-0 transition-all text-lg"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setCurrentPage(1);
                            }}
                            className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeCategory === category
                                ? "bg-[#FFC107] text-black"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {currentPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="bg-white dark:bg-gray-800 rounded-none overflow-hidden group flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300 p-6 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="h-64 sm:h-72 overflow-hidden rounded-2xl mb-6 relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1">
                                <div className="text-gray-400 text-sm font-medium mb-3">
                                    {post.category}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>

                                <button className="bg-[#1A1A1A] hover:bg-black text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors w-fit">
                                    Read More
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => paginate(idx + 1)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currentPage === idx + 1
                                        ? "bg-[#FFC107] text-black shadow-md"
                                        : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                                        }`}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                            {/* Ellipsis if needed, simply showing all pages for now as list is small */}
                            {totalPages > 5 && <span className="flex items-end px-2 text-gray-400">...</span>}
                            {totalPages > 5 && (
                                <button className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-gray-500 hover:bg-gray-100">
                                    {totalPages}
                                </button>
                            )}
                        </div>

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </section>

            {/* Related Projects Section */}
            <section className="max-w-7xl mx-auto px-6 mt-32 mb-24">
                <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-12 text-center">
                    Related Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                            onClick={() => handleProjectClick(project.id)}
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 h-full flex flex-col transition-all hover:shadow-2xl">
                                <div className="relative h-[240px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="glass px-4 py-2 rounded-full text-xs font-bold text-primary dark:text-secondary">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {project.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500">#{tag}</span>
                                            ))}
                                        </div>
                                        <Button variant="ghost" className="p-0 flex items-center gap-2 group-hover:text-primary text-xs">
                                            Read More <ArrowRight size={14} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <div className="mt-24">
                <Newsletter />
            </div>
        </div>
    );
}
