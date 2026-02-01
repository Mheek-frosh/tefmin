import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, ShieldCheck, Maximize2, Minimize2, X } from "lucide-react";
import { Button } from "./ui/Button";

export const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    const togglePlay = (e) => {
        e?.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
        if (!isFullscreen && !isPlaying) {
            videoRef.current?.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isFullscreen) {
                setIsFullscreen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isFullscreen]);

    return (
        <section className="py-24 bg-primary overflow-hidden relative">
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
                            <Button variant="secondary" className="px-10 py-4 shadow-2xl shadow-secondary/20" onClick={toggleFullscreen}>
                                Watch Full Story
                            </Button>
                            <div className="flex items-center gap-3 text-white/50">
                                <Volume2 size={20} />
                                <span className="text-sm font-medium uppercase tracking-widest text-white/80">Experience with sound</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div
                            ref={containerRef}
                            className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] bg-black/40 aspect-video border border-white/10"
                            onClick={togglePlay}
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
                                poster="/hero.png"
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                loop
                                muted
                            >
                                <source src="https://assets.mixkit.co/videos/preview/mixkit-working-overtime-in-a-modern-office-4840-large.mp4" type="video/mp4" />
                            </video>

                            {/* Play Button Overlay */}
                            <AnimatePresence>
                                {!isPlaying && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-2xl">
                                            <Play size={32} className="text-primary ml-1" fill="currentColor" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Fullscreen Button */}
                            <button
                                className="absolute top-6 right-6 p-3 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
                            >
                                <Maximize2 size={20} className="text-gray-800" />
                            </button>

                            <div className="absolute bottom-6 left-6 flex items-center gap-4 pointer-events-none">
                                <div className="glass px-4 py-2 rounded-full text-[10px] font-bold text-gray-800 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    PREMIUM CASE STUDY
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Fullscreen Modal Override */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-4 md:p-12"
                    >
                        <div className="relative w-full h-full max-w-6xl flex flex-col justify-center">
                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                                <video
                                    autoPlay
                                    loop
                                    controls
                                    className="w-full h-full object-contain bg-black"
                                >
                                    <source src="https://assets.mixkit.co/videos/preview/mixkit-working-overtime-in-a-modern-office-4840-large.mp4" type="video/mp4" />
                                </video>

                                {/* Close Button */}
                                <button
                                    onClick={() => setIsFullscreen(false)}
                                    className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-colors border border-white/10 text-white"
                                >
                                    <X size={24} />
                                </button>

                                {/* Controls Guide */}
                                <div className="absolute bottom-6 left-6 text-white/40 text-xs font-medium tracking-widest">
                                    PRESS "ESC" TO EXIT CINEMATIC MODE
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
