import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, Award, Briefcase, GraduationCap, Rocket, Target, Flag } from "lucide-react";
import { siteConfig, founderBio } from "../data/siteData";
import logo from "../assets/logo.png";
import workersImage from "../assets/nigerian_workers_happy.png";

export const About = () => {
    const [isFounderExpanded, setIsFounderExpanded] = useState(false);
    const { tagline } = siteConfig;

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-[#fafafa] dark:bg-gray-800 transition-colors duration-300">
            {/* Modern Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-8xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.15)] border-8 border-white dark:border-gray-700">
                                <img
                                    src={workersImage}
                                    alt="Modernizing the Heartbeat of Nigeria"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Stat Card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-2xl max-w-xs border-white/50 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-secondary shadow-lg">
                                        <Rocket size={24} />
                                    </div>
                                    <h4 className="text-2xl font-black text-gray-900 dark:text-white leading-none">2026 <br /><span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500">VISION GOAL</span></h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">Empowering over 1M+ Nigerians through industrial inclusion.</p>
                            </motion.div>
                        </motion.div>

                        {/* Background Decorative Frame */}
                        <div className="absolute -top-10 -right-10 w-full h-full border-2 border-secondary/20 rounded-[3rem] -z-0" />
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-6 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                                Our Identity
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-10 leading-[0.9] tracking-tighter">
                                Modernizing the <br />
                                <span className="text-primary dark:text-secondary italic">Heartbeat</span> of Nigeria.
                            </h2>

                            <div className="space-y-8 mb-12">
                                <div className="flex gap-6">
                                    <div className="shrink-0 h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary dark:text-secondary font-bold">1</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Mission</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            To build a self-reliant economy by fostering local manufacturing and industrial pride. We believe Nigeria has everything it needs to thrive.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary dark:text-secondary font-bold">2</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Strategy</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            By integrating technology with traditional craftsmanship, we create scalable solutions for modern Nigerian businesses.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 p-10 bg-primary rounded-[2.5rem] text-white">
                                <div>
                                    <Target className="text-secondary mb-4" size={32} />
                                    <h4 className="text-3xl font-black mb-1">95%</h4>
                                    <p className="text-xs uppercase tracking-widest text-white/60">Local Content Engagement</p>
                                </div>
                                <div>
                                    <Flag className="text-secondary mb-4" size={32} />
                                    <h4 className="text-3xl font-black mb-1">36</h4>
                                    <p className="text-xs uppercase tracking-widest text-white/60">States of Operation</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Founder Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32"
                >
                    <div className="text-center mb-16">
                        <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                            Leadership
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                            Meet Our <span className="text-secondary italic">Founder</span>
                        </h2>
                    </div>

                    <div className="relative max-w-none group">
                        {/* Founder Card with Premium Glass Effect */}
                        <div className="relative backdrop-blur-3xl bg-white/40 dark:bg-gray-900/40 rounded-[4rem] p-8 md:p-12 shadow-[0_48px_100px_-24px_rgba(0,0,0,0.15)] dark:shadow-2xl border border-white/40 dark:border-gray-700/50 overflow-hidden group-hover:shadow-[0_48px_100px_-24px_rgba(0,0,0,0.25)] transition-shadow duration-500">
                            {/* Background Decorative Gradient */}
                            <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-gradient-to-b lg:bg-gradient-to-l from-primary/10 dark:from-primary/20 to-transparent" />

                            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                                {/* Founder Image with Expand Button */}
                                <div className="relative group shrink-0 mb-8 lg:mb-0">
                                    <div className="w-full max-w-[450px] aspect-[4/5] lg:w-[450px] lg:h-[550px] rounded-[3rem] overflow-hidden border-4 border-white/50 dark:border-gray-600/50 shadow-2xl mx-auto lg:mx-0">
                                        <img
                                            src={founderBio.image}
                                            alt={founderBio.name}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Expand Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsFounderExpanded(true)}
                                        className="absolute -bottom-4 right-1/2 translate-x-1/2 lg:right-[-1rem] lg:translate-x-0 w-14 h-14 bg-primary hover:bg-primary/90 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 transition-colors"
                                    >
                                        <ChevronRight size={28} />
                                    </motion.button>

                                    {/* Decorative Ring */}
                                    <div className="absolute -inset-4 border-2 border-dashed border-secondary/30 rounded-[2.5rem] -z-10 hidden lg:block" />
                                </div>

                                {/* Founder Info */}
                                <div className="text-center lg:text-left flex-1">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                                        <Award size={14} />
                                        Visionary Leader
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter leading-tight">
                                        {founderBio.name}
                                    </h3>
                                    <p className="text-primary dark:text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-8">
                                        {founderBio.title}
                                    </p>
                                    <div className="relative mb-10">
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg md:text-xl font-medium italic border-l-4 border-secondary pl-6">
                                            "A lead consultant driving sustainable growth and transformation across Nigeria and Africa."
                                        </p>
                                        <p className="text-gray-400 dark:text-gray-500 text-xs mt-4 font-bold uppercase tracking-widest px-7">
                                            {tagline}
                                        </p>
                                    </div>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                        {founderBio.highlights.map((highlight, index) => {
                                            const Icon = highlight.icon;
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300"
                                                >
                                                    <Icon size={16} className="text-primary dark:text-secondary" />
                                                    {highlight.text}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* CTA to expand */}
                                    <button
                                        onClick={() => setIsFounderExpanded(true)}
                                        className="mt-8 inline-flex items-center gap-2 text-primary dark:text-secondary font-bold hover:underline underline-offset-4 group"
                                    >
                                        Read Full Biography
                                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Expanded Biography Modal */}
            <AnimatePresence>
                {isFounderExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                        onClick={() => setIsFounderExpanded(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 40 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header with gradient */}
                            <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/80 p-8 md:p-10 text-white">
                                <button
                                    onClick={() => setIsFounderExpanded(false)}
                                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/30 shrink-0">
                                        <img
                                            src={founderBio.image}
                                            alt={founderBio.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-black mb-1">{founderBio.name}</h3>
                                        <p className="text-secondary font-bold text-sm uppercase tracking-wider">{founderBio.title}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Biography Content */}
                            <div className="p-8 md:p-10">
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {founderBio.highlights.map((highlight, index) => {
                                        const Icon = highlight.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 px-4 py-2 bg-primary/5 dark:bg-primary/10 rounded-full text-sm font-medium text-primary dark:text-secondary"
                                            >
                                                <Icon size={16} />
                                                {highlight.text}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                    {founderBio.bio.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Company Badge */}
                                <div className="mt-10 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl border border-primary/10 dark:border-secondary/10">
                                    <div className="flex items-center gap-4">
                                        <img src={logo} alt="TEFMIN" className="h-12 w-auto" />
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">The Future Made in Nigeria Project Ltd</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">TEFMIN - Building Africa's Future</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
