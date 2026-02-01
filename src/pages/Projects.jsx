import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";

const projectItems = [
    {
        id: 1,
        title: "Lagos Tech Hub",
        category: "Infrastructure",
        description: "Developing the largest industrial technology ecosystem in West Africa. This project focuses on providing state-of-the-art facilities for local tech startups and manufacturers.",
        longDescription: "The Lagos Tech Hub is a flagship project of TEFMIN, designed to serve as a catalyst for industrial innovation. Spread across 50 hectares, it features dedicated zones for electronics manufacturing, software development labs, and sustainable energy research. Since its inception, it has housed over 150 startups and generated 2,000+ local jobs.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        tags: ["Tech", "Infrastructure", "Innovation"],
        stats: { jobs: "2,000+", impact: "Lagos State" }
    },
    {
        id: 2,
        title: "Eco-Friendly Logistics",
        category: "Supply Chain",
        description: "Revolutionizing distribution with zero-emission delivery solutions. We've introduced a fleet of electric vehicles to handle last-mile delivery in Nigeria's urban centers.",
        longDescription: "Our Eco-Friendly Logistics initiative addresses the carbon footprint of Nigeria's growing e-commerce sector. By partnering with local EV manufacturers, we've deployed 500 electric delivery bikes and 50 vans in Lagos and Abuja. This project has reduced local CO2 emissions by an estimated 1,200 tons annually while lowering operational costs for SMEs.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        tags: ["Green", "Logistics", "Sustainability"],
        stats: { emissions: "-1,200 tons", vehicles: "550" }
    },
    {
        id: 3,
        title: "Nigerian Artisans Export",
        category: "Empowerment",
        description: "Connecting local excellence with global luxury markets. We empower traditional craftsmen to reach international buyers through modern digital platforms.",
        longDescription: "The Artisans Export program bridges the gap between traditional Nigerian craftsmanship and the global luxury market. Through training in quality control, branding, and cross-border logistics, we've enabled 5,000+ artisans to sell their products in Europe and North America, increasing their average income by 400%.",
        image: "https://images.unsplash.com/photo-1541944743827-e04bb645f9a3?auto=format&fit=crop&q=80&w=800",
        tags: ["Artisans", "Export", "Growth"],
        stats: { artisans: "5,000+", income: "+400%" }
    },
    {
        id: 4,
        title: "Agro-Industrial Park",
        category: "Agriculture",
        description: "Integrating modern processing facilities directly into farming communities. This project helps reduce post-harvest losses and adds value to local produce.",
        longDescription: "Located in the heart of the Middle Belt, our Agro-Industrial Parks provide farmers with immediate access to cold storage, milling, and packaging services. By processing produce on-site, we've reduced post-harvest losses from 40% to 5%, ensuring better food security and higher returns for over 10,000 farming households.",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
        tags: ["Agro", "Industrial", "Rural"],
        stats: { farmers: "10,000+", wastage: "-35%" }
    },
    {
        id: 5,
        title: "Renewable Energy Grid",
        category: "Energy",
        description: "Powering industrial zones with sustainable solar-wind hybrid solutions. Reducing dependence on unreliable fossil fuel grids.",
        longDescription: "Our Renewable Energy Grid project aims to provide 24/7 clean power to emerging industrial zones across Nigeria. By implementing decentralized micro-grids, we've empowered 50+ manufacturing plants to run at full capacity, lowering their energy costs by 60% and eliminating production downtime caused by power outages.",
        image: "https://images.unsplash.com/photo-1509391366360-feaf9fa44852?auto=format&fit=crop&q=80&w=800",
        tags: ["Solar", "CleanEnergy", "Industrial"],
        stats: { capacity: "50MW", savings: "60%" }
    },
    {
        id: 6,
        title: "Smart Textiles Factory",
        category: "Manufacturing",
        description: "Modernizing Nigeria's textile industry with automated weaving and eco-friendly dye techniques.",
        longDescription: "The Smart Textiles Factory uses high-precision looms and AI-driven quality control to produce premium African fabrics for global export. This facility revitalizes the local cotton supply chain while employing over 800 specialized textile workers.",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
        tags: ["Textiles", "Automation", "Jobs"],
        stats: { workers: "800+", output: "2M Meters" }
    },
    // Additional Dummy Projects for Pagination
    {
        id: 7,
        title: "Digital Literacy Program",
        category: "Education",
        description: "Equipping young Nigerians with coding and data analysis skills for the future industrial economy.",
        longDescription: "A nationwide initiative to train 50,000 students in modern digital tools. We partner with schools to integrate industrial software training into their curriculum.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        tags: ["Education", "Digital", "Youth"],
        stats: { students: "50,000", centers: "120" }
    },
    {
        id: 8,
        title: "Waste-to-Energy Plant",
        category: "Sustainability",
        description: "Converting urban municipal waste into clean synthetic gas and electricity for industrial use.",
        longDescription: "Our first pilot plant in Kano processes 500 tons of waste daily, generating 10MW of power. This project solves waste management issues while providing cheap energy.",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
        tags: ["Recycle", "Energy", "Kano"],
        stats: { waste: "500t/day", power: "10MW" }
    },
    {
        id: 9,
        title: "Local Pharma Research",
        category: "Health",
        description: "Developing specialized laboratories for the production of essential vaccines and medications within Nigeria.",
        longDescription: "TEFMIN Pharma Lab focuses on reducing Nigeria's dependence on imported drugs. We research local herbal efficacy and translate it into standardized pharmaceutical products.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e024?auto=format&fit=crop&q=80&w=800",
        tags: ["Health", "Pharma", "Research"],
        stats: { vaccines: "3 types", labs: "5" }
    },
    {
        id: 10,
        title: "Bio-Fertilizer Project",
        category: "Agriculture",
        description: "Producing organic fertilizers from agricultural waste to boost soil health and crop yields.",
        longDescription: "Our bio-fertilizer initiative reduces chemical dependence in Nigerian farming. By using organic waste, we produce high-nutrient fertilizers that have increased average yields by 25%.",
        image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800",
        tags: ["Organic", "Farming", "Bio"],
        stats: { yield: "+25%", waste_used: "1000t" }
    },
    {
        id: 11,
        title: "Metal Recycling Hub",
        category: "Industrial",
        description: "Advanced smelting facilities focused on recovering high-grade steel and aluminum from scrap metal.",
        longDescription: "The Metal Recycling Hub in Port Harcourt recovers thousands of tons of metal yearly. This reduces the need for primary mining and provides cheap raw materials for construction.",
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
        tags: ["Steel", "Recycle", "Construction"],
        stats: { steel: "10k tons", jobs: "300" }
    },
    {
        id: 12,
        title: "Data Sovereignty Center",
        category: "Tech",
        description: "Establishing Tier-4 data centers to host Nigerian industrial and governmental data locally.",
        longDescription: "Hosting our own data ensures security and high-speed access for local industries. Our centers are powered by 100% renewable energy and follow global safety standards.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
        tags: ["Data", "Cloud", "Sovereignty"],
        stats: { uptime: "99.99%", capacity: "100PB" }
    }
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(projectItems.length / itemsPerPage);

    // Slice projects for current page
    const displayedProjects = projectItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                            Our <span className="text-primary">Projects</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Explore the diverse portfolio of TEFMIN initiatives that are reshaping Nigeria's industrial landscape.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 h-full flex flex-col">
                                <div className="relative h-[240px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="glass px-4 py-2 rounded-full text-xs font-bold text-primary">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                    <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {project.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] font-black uppercase text-gray-400">#{tag}</span>
                                            ))}
                                        </div>
                                        <Button variant="ghost" className="p-0 flex items-center gap-2 group-hover:text-primary text-xs">
                                            Details <ArrowRight size={14} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-4 rounded-full border border-gray-200 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400 text-gray-400"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex gap-2">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => goToPage(i + 1)}
                                className={`h-12 w-12 rounded-2xl font-black text-sm transition-all border ${currentPage === (i + 1)
                                        ? "bg-primary text-secondary border-primary shadow-xl shadow-primary/20 scale-110"
                                        : "bg-white text-gray-400 border-gray-100 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-4 rounded-full border border-gray-200 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400 text-gray-400"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-8 right-8 z-10 p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-900" />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="h-[400px] lg:h-auto overflow-hidden">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8 md:p-12 lg:p-16">
                                    <span className="text-primary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 px-4 py-2 rounded-full">
                                        {selectedProject.category}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                        {selectedProject.longDescription}
                                    </p>

                                    <div className="grid grid-cols-2 gap-8 p-8 bg-gray-50 rounded-3xl mb-8">
                                        {Object.entries(selectedProject.stats).map(([key, value]) => (
                                            <div key={key}>
                                                <h4 className="text-3xl font-black text-primary mb-1">{value}</h4>
                                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{key}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <Button className="flex-grow py-4 shadow-xl">Partner on this Project</Button>
                                        <Button variant="outline" className="p-4"><ExternalLink size={20} /></Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
