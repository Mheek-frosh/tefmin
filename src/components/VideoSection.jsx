import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, ShieldCheck } from "lucide-react";
import { Button } from "./ui/Button";

export const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-24 bg-primary overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 transform origin-top-right -z-0" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 -skew-x-12 transform origin-bottom-left -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-8"
                        >
                            <ShieldCheck size={16} />
                            <span>THE TEFMIN STORY</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Watch How We're <span className="text-secondary">Shaping</span> the Future.
                        </h2>
                        <p className="text-xl text-white/70 mb-10 leading-relaxed">
                            Experience the journey of industrial transformation across Nigeria. From local workshops to global manufacturing hubs, see the impact of TEFMIN in action.
                        </p>
                        <div className="flex items-center gap-6">
                            <Button variant="secondary" className="px-10 py-4 shadow-2xl shadow-secondary/20" onClick={togglePlay}>
                                {isPlaying ? "Pause Story" : "Watch Our Story"}
                            </Button>
                            <div className="flex items-center gap-3 text-white/50">
                                <Volume2 size={20} />
                                <span className="text-sm font-medium uppercase tracking-widest">Experience with sound</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] bg-black/40 aspect-video border border-white/10">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                poster="/hero.png" // Placeholder poster
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            >
                                {/* Fallback to a stock video if available, otherwise just UI placeholder */}
                                <source src="https://assets.mixkit.co/videos/preview/mixkit-working-overtime-in-a-modern-office-4840-large.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Custom Play Overlay */}
                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer group-hover:bg-black/10 transition-all duration-500"
                                    onClick={togglePlay}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center shadow-2xl shadow-secondary/50"
                                    >
                                        <Play size={40} className="text-primary ml-2" fill="currentColor" />
                                    </motion.div>
                                </div>
                            )}

                            {/* Video UI Elements */}
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                                <div className="glass px-4 py-2 rounded-full text-xs font-bold text-gray-800 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    LIVE PRODUCTION
                                </div>
                            </div>
                        </div>

                        {/* Float Decoration */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 border border-white/5" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
