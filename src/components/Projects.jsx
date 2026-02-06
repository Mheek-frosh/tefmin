import { motion } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";
import { GlassContainer } from "./ui/GlassContainer";

const projects = [
    {
        title: "Lagos Tech Hub",
        category: "Infrastructure",
        description: "Developing the largest industrial technology ecosystem in West Africa.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Lagos Innovation Hub",
        category: "Innovation",
        description: "A state-of-the-art startup incubator fostering the next generation of Nigerian tech leaders.",
        image: "/lagos_startup_hub.png",
    },
    {
        title: "Sustainable Energy Initiative",
        category: "Energy",
        description: "Implementing large-scale solar solutions to power rural Nigerian communities.",
        image: "/sustainable_energy.png",
    },
    {
        title: "Eco-Friendly Logistics",
        category: "Supply Chain",
        description: "Revolutionizing distribution with zero-emission delivery solutions.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Textile Excellence Center",
        category: "Manufacturing",
        description: "Modernizing Nigerian textile production with high-tech automated machinery.",
        image: "/textile_excellence.png",
    },
    {
        title: "Nigerian Artisans Export",
        category: "Empowerment",
        description: "Connecting local excellence with global luxury markets.",
        image: "https://images.unsplash.com/photo-1541944743827-e04bb645f9a3?auto=format&fit=crop&q=80&w=800",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            Transformative <span className="text-primary dark:text-secondary">Projects</span> across Nigeria
                        </motion.h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            We take pride in our diverse portfolio of initiatives that drive industrial growth and empower local communities.
                        </p>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="hidden md:block"
                    >
                        <a href="#" className="flex items-center gap-2 text-primary dark:text-secondary font-bold hover:text-secondary dark:hover:text-white transition-colors group">
                            View All Case Studies
                            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative rounded-3xl overflow-hidden mb-6 h-[400px]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute top-6 right-6">
                                    <div className="glass px-4 py-2 rounded-full text-xs font-bold text-primary flex items-center gap-2">
                                        <Tag size={14} />
                                        {project.category}
                                    </div>
                                </div>

                                <div className="absolute bottom-8 left-8 right-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-white/70 line-clamp-2">{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
