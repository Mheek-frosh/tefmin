import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Emeka Okonkwo",
        role: "CEO, TechFlow Lagos",
        image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=400",
        comment: "TEFMIN didn't just provide a loan; they provided a roadmap for industrial scale. Our production efficiency has increased by 300% since joining the project.",
        rating: 5,
    },
    {
        name: "Aisha Mohammed",
        role: "Impact Lead, Northern Green",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
        comment: "The training programs provided by TEFMIN are world-class. We've seen a direct impact on the lives of over 500 women in our empowerment cycles.",
        rating: 5,
    },
    {
        name: "Babajide Williams",
        role: "Founder, BuildRight Nigeria",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=400",
        comment: "Being part of the Future Made in Nigeria Project gave us the credibility to partner with global manufacturers. It's a game-changer for Nigerian MSMEs.",
        rating: 5,
    },
];

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Auto-loop effect every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                            Voices of Impact
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                            Empowering the Nigerian <span className="text-secondary italic">Ambition.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="relative bg-primary rounded-[3rem] p-8 md:p-16 overflow-hidden min-h-[450px] flex items-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full"
                            >
                                <div className="lg:col-span-4">
                                    <div className="relative group">
                                        <div className="w-full aspect-square rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                        <div className="absolute -bottom-6 -right-6 h-16 w-16 bg-secondary rounded-2xl flex items-center justify-center text-primary shadow-xl">
                                            <Quote size={28} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-8">
                                    <div className="flex gap-2 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={18} className="text-secondary fill-secondary" />
                                        ))}
                                    </div>
                                    <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8 italic">
                                        "{testimonials[currentIndex].comment}"
                                    </p>
                                    <div>
                                        <h4 className="text-xl font-black text-white">{testimonials[currentIndex].name}</h4>
                                        <p className="text-secondary font-bold tracking-widest text-xs uppercase mt-1">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="mt-12 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-2 transition-all duration-300 rounded-full ${i === currentIndex ? "w-12 bg-primary dark:bg-secondary" : "w-2 bg-gray-200 dark:bg-gray-700"}`}
                                />
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <button onClick={prev} className="p-4 rounded-full border border-gray-100 dark:border-gray-700 hover:bg-primary hover:text-white transition-all text-gray-400 dark:text-gray-500"><ChevronLeft size={24} /></button>
                            <button onClick={next} className="p-4 rounded-full border border-gray-100 dark:border-gray-700 hover:bg-primary hover:text-white transition-all text-gray-400 dark:text-gray-500"><ChevronRight size={24} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
