import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import h1Image from "../assets/h1.png";
import h2Image from "../assets/h2.png";
import h3Image from "../assets/h3.png";

const heroSlides = [
    {
        id: 1,
        image: h1Image,
        title: "Building Institutions",
        subtitle: "That Power Africa's Tomorrow",
        description: "Designing systems where talent meets opportunity and innovation meets impact."
    },
    {
        id: 2,
        image: h2Image,
        title: "Building Industries",
        subtitle: "That Power Africa's Tomorrow",
        description: "Strengthening Nigeria's economic backbone through strategic partnerships."
    },
    {
        id: 3,
        image: h3Image,
        title: "Building Ideas",
        subtitle: "That Power Africa's Tomorrow",
        description: "Scaling solutions that unlock long-term national value and global competitiveness."
    }
];

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    const slide = heroSlides[currentSlide];

    return (
        <>
            <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
                {/* Image Carousel Background */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/70 to-primary/40" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Carousel Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`transition-all ${index === currentSlide
                                ? "w-12 bg-secondary"
                                : "w-3 bg-white/40 hover:bg-white/60"
                                } h-3 rounded-full`}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Founding Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8"
                            >
                                <span className="text-xs font-black uppercase tracking-widest text-secondary">Founded 2011</span>
                            </motion.div>

                            {/* Main Heading */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-8"
                                >
                                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-4 tracking-tighter">
                                        The Future Made in Nigeria
                                    </h1>
                                    <p className="text-xl md:text-2xl font-bold text-secondary uppercase tracking-[0.3em] mb-4">
                                        Empowering People, Building the Future
                                    </p>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 italic leading-tight">
                                        {slide.title}, {slide.subtitle}
                                    </h2>
                                </motion.div>
                            </AnimatePresence>

                            {/* Description */}
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={`desc-${currentSlide}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-lg md:text-2xl text-white/90 mb-6 leading-relaxed max-w-4xl mx-auto font-medium"
                                >
                                    {slide.description}
                                </motion.p>
                            </AnimatePresence>



                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                                <Link to="/projects" className="w-full sm:w-auto">
                                    <Button className="w-full sm:w-auto text-lg px-8 md:px-12 py-4 md:py-5 shadow-2xl shadow-primary/40 group">
                                        <span className="flex items-center justify-center gap-3">
                                            Explore Our Work
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Button>
                                </Link>
                                <Link to="/partner" className="w-full sm:w-auto">
                                    <Button variant="outline" className="w-full sm:w-auto text-lg px-8 md:px-12 py-4 md:py-5 border-white/30 text-white backdrop-blur-sm hover:bg-white hover:text-primary transition-all">
                                        Partner With Us
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Supporting Statement Section */}
            <section className="py-20 bg-gray-900 dark:bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <p className="text-2xl md:text-4xl font-light text-white/60 mb-6 leading-relaxed">
                            We are not just building projects.
                        </p>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-12 leading-tight">
                            We are architecting <span className="text-secondary italic">systems</span>
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                            >
                                <p className="text-lg md:text-xl font-semibold text-white/90">
                                    Where talent meets opportunity
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                            >
                                <p className="text-lg md:text-xl font-semibold text-white/90">
                                    Innovation meets impact
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                            >
                                <p className="text-lg md:text-xl font-semibold text-white/90">
                                    Local excellence competes globally
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="space-y-4 text-xl md:text-2xl font-bold"
                        >
                            <p className="text-white">
                                Rooted in <span className="text-secondary">Nigeria</span>.
                            </p>
                            <p className="text-white">
                                Relevant to <span className="text-secondary">Africa</span>.
                            </p>
                            <p className="text-white">
                                Built for the <span className="text-secondary">world</span>.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};
