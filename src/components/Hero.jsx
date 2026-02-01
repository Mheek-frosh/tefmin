import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, Star } from "lucide-react";

const phrases = [
    { prefix: "The Future", suffix: "is Made in Nigeria." },
    { prefix: "The Quality", suffix: "is Made in Nigeria." },
    { prefix: "The Progress", suffix: "is Made in Nigeria." },
];

export const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.png"
                    alt="Nigerian Business Team"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/60 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, Math.random() * -100, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: i * 2,
                        }}
                        className="absolute bg-white/10 rounded-full blur-xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${100 + Math.random() * 200}px`,
                            height: `${100 + Math.random() * 200}px`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <div className="h-px w-8 bg-secondary" />
                            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">
                                Since 2024
                            </span>
                        </div>

                        <div className="min-h-[180px] md:min-h-[220px]">
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-10 tracking-tighter"
                                >
                                    {phrases[index].prefix} <br />
                                    <span className="text-secondary italic">{phrases[index].suffix}</span>
                                </motion.h1>
                            </AnimatePresence>
                        </div>

                        <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl font-medium">
                            We're not just building industries; we're architecting the economic backbone of Africa's largest nation through strategic innovation and local excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button className="text-lg px-12 py-5 shadow-2xl shadow-primary/40 group">
                                <span className="flex items-center gap-3">
                                    Join the Project
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                            <Button variant="outline" className="text-lg px-12 py-5 border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-primary transition-all">
                                Download Brochure
                            </Button>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-16 flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md w-fit">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-10 w-10 rounded-full border-2 border-primary bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-white/80">
                                <div className="flex items-center gap-1">
                                    <Star size={14} className="text-secondary fill-secondary" />
                                    <Star size={14} className="text-secondary fill-secondary" />
                                    <Star size={14} className="text-secondary fill-secondary" />
                                    <Star size={14} className="text-secondary fill-secondary" />
                                    <Star size={14} className="text-secondary fill-secondary" />
                                </div>
                                <p className="text-xs font-bold uppercase tracking-widest mt-1">Trusted by 500+ Local Businesses</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
