import { motion } from "framer-motion";

export const Newsletter = ({ variant = "default" }) => {
    const isCompact = variant === "compact";

    return (
        <section className={`${isCompact ? "" : "max-w-7xl mx-auto px-6 py-16"}`}>
            <div className={`bg-gradient-to-r from-primary to-primary/80 ${isCompact ? "rounded-2xl p-8" : "rounded-[3rem] p-12 md:p-16"} text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                    <h2 className={`${isCompact ? "text-2xl" : "text-3xl md:text-4xl"} font-black text-white mb-4`}>
                        Stay Updated with TEFMIN
                    </h2>
                    <p className={`text-white/70 ${isCompact ? "text-base" : "text-lg"} max-w-xl mx-auto mb-8`}>
                        Subscribe to our newsletter and join us in empowering people and building the future of Nigeria.
                    </p>
                    <div className={`flex flex-col sm:flex-row gap-4 ${isCompact ? "max-w-md" : "max-w-lg"} mx-auto`}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={`flex-1 ${isCompact ? "px-4 py-3 rounded-xl" : "px-6 py-4 rounded-2xl"} bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary`}
                        />
                        <button className={`${isCompact ? "px-6 py-3 rounded-xl text-sm" : "px-8 py-4 rounded-2xl"} bg-secondary text-primary font-bold uppercase tracking-wider hover:bg-secondary/90 transition-colors shadow-lg`}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
