import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Image as ImageIcon, Film, Grid3X3 } from "lucide-react";
import fastImage from "../assets/fast.jpeg";
import kekeImage from "../assets/keke.jpeg";
import twoManImage from "../assets/2man.jpeg";
import shopImage from "../assets/shop.jpeg";
import grindImage from "../assets/grind.jpeg";
import carwashImage from "../assets/carwash.jpeg";
import polImage from "../assets/pol.jpeg";
import makeupImage from "../assets/makeup.jpeg";
import v2Video from "../assets/v2.mp4";

// Sample gallery items - you can add your own videos and images here
const galleryItems = [
    {
        id: 1,
        type: "image",
        thumbnail: fastImage,
        src: fastImage,
        title: "Fast Food Retail Outlet",
        category: "Empowerment"
    },
    {
        id: 2,
        type: "image",
        thumbnail: kekeImage,
        src: kekeImage,
        title: "Mobile Barber Shop",
        category: "Empowerment"
    },
    {
        id: 3,
        type: "image",
        thumbnail: twoManImage,
        src: twoManImage,
        title: "SET Construction Training",
        category: "Training"
    },
    {
        id: 4,
        type: "image",
        thumbnail: shopImage,
        src: shopImage,
        title: "ICT Business Solutions Center",
        category: "Technology"
    },
    {
        id: 5,
        type: "image",
        thumbnail: grindImage,
        src: grindImage,
        title: "Grinding Machine Workshop",
        category: "Empowerment"
    },
    {
        id: 6,
        type: "image",
        thumbnail: carwashImage,
        src: carwashImage,
        title: "Mobile Car Wash Service",
        category: "Empowerment"
    },
    {
        id: 7,
        type: "image",
        thumbnail: polImage,
        src: polImage,
        title: "Poultry Farming Initiative",
        category: "Agriculture"
    },
    {
        id: 8,
        type: "image",
        thumbnail: makeupImage,
        src: makeupImage,
        title: "Beauty & Makeup Studio",
        category: "Empowerment"
    },
    {
        id: 9,
        type: "video",
        thumbnail: makeupImage,
        src: v2Video,
        title: "Empowerment Program Showcase",
        category: "Empowerment"
    },
    {
        id: 10,
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
        src: "https://assets.mixkit.co/videos/preview/mixkit-conveyor-belt-in-a-large-factory-4491-large.mp4",
        title: "Industrial Excellence",
        category: "Manufacturing"
    },
    {
        id: 11,
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
        title: "Tech Innovation Hub",
        category: "Technology"
    },
    {
        id: 12,
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=600",
        src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-solar-power-farm-44540-large.mp4",
        title: "Sustainable Energy",
        category: "Energy"
    },
];

const filterTabs = [
    { id: "all", label: "All", icon: Grid3X3 },
    { id: "video", label: "Videos", icon: Film },
    { id: "image", label: "Images", icon: ImageIcon },
];

export const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredItems = activeFilter === "all"
        ? galleryItems
        : galleryItems.filter(item => item.type === activeFilter);

    return (
        <section id="gallery" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                            Our Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                            Impact <span className="text-secondary italic">Gallery</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
                            Explore our collection of images and videos showcasing the impact of TEFMIN across Nigeria.
                        </p>
                    </motion.div>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-100 dark:border-gray-700">
                        {filterTabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveFilter(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeFilter === tab.id
                                        ? "bg-primary text-white shadow-lg"
                                        : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-secondary"
                                        }`}
                                >
                                    <Icon size={16} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                onClick={() => setSelectedItem(item)}
                            >
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white text-lg font-bold">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Play Icon for Videos */}
                                {item.type === "video" && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                                            <Play size={24} className="text-white ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                )}

                                {/* Type Badge */}
                                <div className="absolute top-4 right-4">
                                    <div className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${item.type === "video"
                                        ? "bg-red-500/80 text-white"
                                        : "bg-white/80 text-gray-800"
                                        } backdrop-blur-sm`}>
                                        {item.type === "video" ? <Film size={12} /> : <ImageIcon size={12} />}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-gray-400">No items found in this category.</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute -top-12 right-0 p-3 text-white/70 hover:text-white transition-colors"
                            >
                                <X size={28} />
                            </button>

                            {/* Media Content */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                {selectedItem.type === "video" ? (
                                    <video
                                        autoPlay
                                        controls
                                        loop
                                        className="w-full aspect-video bg-black"
                                    >
                                        <source src={selectedItem.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img
                                        src={selectedItem.src}
                                        alt={selectedItem.title}
                                        className="w-full h-auto max-h-[80vh] object-contain bg-black"
                                    />
                                )}
                            </div>

                            {/* Caption */}
                            <div className="mt-6 text-center">
                                <span className="text-secondary text-xs font-bold uppercase tracking-widest">
                                    {selectedItem.category}
                                </span>
                                <h3 className="text-white text-2xl font-bold mt-2">
                                    {selectedItem.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
