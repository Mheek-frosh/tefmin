import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { projectItems } from "../data/projectsData";

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const project = projectItems.find(p => p.id === parseInt(id));

    // Get related projects (same category or random)
    const relatedProjects = useMemo(() => {
        if (!project) return [];

        // Filter projects excluding current one
        const otherProjects = projectItems.filter(p => p.id !== project.id);

        // Try to get projects from same category first
        const sameCategory = otherProjects.filter(p => p.category === project.category);

        // If we have enough from same category, use those, otherwise mix with others
        const candidates = sameCategory.length >= 3 ? sameCategory : otherProjects;

        // Shuffle and take first 3
        return candidates
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
    }, [project]);

    if (!project) {
        return (
            <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                    <Button onClick={() => navigate("/projects")}>Back to Projects</Button>
                </div>
            </div>
        );
    }

    const nextImage = () => {
        if (project.images) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    };

    const prevImage = () => {
        if (project.images) {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    const displayImage = project.images ? project.images[currentImageIndex] : project.image;
    const hasMultipleImages = project.images && project.images.length > 1;

    return (
        <div className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
            <div className="max-w-5xl mx-auto px-6">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate("/projects")}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold">Back to Projects</span>
                </motion.button>

                {/* Category Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <span className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                        {project.category}
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight"
                >
                    {project.title}
                </motion.h1>

                {/* Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-3 mb-12"
                >
                    {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                            #{tag}
                        </span>
                    ))}
                </motion.div>

                {/* Hero Image / Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden mb-12 bg-gray-200"
                >
                    <img
                        src={displayImage}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                    />

                    {hasMultipleImages && (
                        <>
                            {/* Previous Button */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all z-10"
                            >
                                <ChevronLeft size={24} className="text-gray-900" />
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all z-10"
                            >
                                <ChevronRight size={24} className="text-gray-900" />
                            </button>

                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-bold">
                                {currentImageIndex + 1} / {project.images.length}
                            </div>

                            {/* Thumbnail Indicators */}
                            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                                {project.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                                            ? "bg-white w-8"
                                            : "bg-white/50 hover:bg-white/75"
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </motion.div>

                {/* Content Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-16">
                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-12"
                    >
                        <p className="text-xl text-gray-700 leading-relaxed">
                            {project.longDescription}
                        </p>
                    </motion.div>

                    {/* Statistics Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gray-50 rounded-3xl mb-12"
                    >
                        {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                                <h4 className="text-3xl md:text-4xl font-black text-primary mb-2">{value}</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{key}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button
                            onClick={() => navigate("/partner")}
                            className="flex-grow py-4 shadow-xl"
                        >
                            Partner With Us
                        </Button>
                        <Button variant="outline" className="py-4 px-6 flex items-center justify-center gap-2">
                            <ExternalLink size={20} />
                            <span>Learn More</span>
                        </Button>
                    </motion.div >
                </div >

                {/* Related Projects Section */}
                < motion.div
                    initial={{ opacity: 0, y: 20 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
                        Related <span className="text-primary">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedProjects.map((relatedProject, index) => (
                            <motion.div
                                key={relatedProject.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer"
                                onClick={() => {
                                    setCurrentImageIndex(0);
                                    navigate(`/projects/${relatedProject.id}`);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col transition-shadow hover:shadow-xl">
                                    <div className="relative h-[200px] overflow-hidden">
                                        <img
                                            src={relatedProject.image}
                                            alt={relatedProject.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="glass px-3 py-1 rounded-full text-xs font-bold text-primary">
                                                {relatedProject.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                            {relatedProject.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">
                                            {relatedProject.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex gap-2">
                                                {relatedProject.tags.slice(0, 1).map(tag => (
                                                    <span key={tag} className="text-[10px] font-black uppercase text-gray-400">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                View <ArrowRight size={12} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div >
            </div >
        </div >
    );
}
