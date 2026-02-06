import { motion } from "framer-motion";
import { GlassContainer } from "./ui/GlassContainer";
import { Target, Flag, Rocket } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden bg-[#fafafa] dark:bg-gray-800 transition-colors duration-300">
            {/* Modern Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative">
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
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                                    alt="TEFMIN Collaboration"
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
                            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-10 leading-tight">
                                Modernizing the <span className="text-primary dark:text-secondary italic font-serif">Heartbeat</span> of Nigeria.
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
            </div>
        </section>
    );
};

