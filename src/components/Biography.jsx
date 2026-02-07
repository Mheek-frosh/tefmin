import { motion } from "framer-motion";
import { Award, Quote, Briefcase, GraduationCap } from "lucide-react";
import logO from "../assets/logow.png";

export const Biography = ({ data }) => {
    if (!data) return null;
    const { name, title, image, bio, highlights } = data;

    return (
        <div className="relative group">
            {/* Main Container */}
            <div className="relative bg-white dark:bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                <div className="flex flex-col lg:flex-row">
                    {/* Image Area */}
                    <div className="lg:w-2/5 relative h-[500px] lg:h-auto overflow-hidden">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />

                        {/* Quote overlay on mobile/tablet */}
                        <div className="absolute bottom-8 left-8 right-8 lg:hidden">
                            <Quote className="text-secondary opacity-50 mb-2" size={32} />
                            <p className="text-white text-lg font-medium italic leading-tight">
                                Delivering excellence through transformation.
                            </p>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 relative">
                        {/* Decorative background logo */}
                        <img
                            src={logO}
                            alt=""
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                        />

                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1.5 bg-primary/5 dark:bg-secondary/10 rounded-full text-primary dark:text-secondary text-xs font-black uppercase tracking-widest mb-6">
                                Leadership Profile
                            </span>

                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter leading-tight">
                                {name}
                            </h2>
                            <p className="text-primary dark:text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-10 border-b border-gray-100 dark:border-gray-800 pb-6">
                                {title}
                            </p>

                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                {bio.split('\n\n').slice(0, 2).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}

                                {/* Collapsible or truncated bio logic could go here, but for "Home" view we show a snippet */}
                            </div>

                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                                {highlights.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                            <div className="h-10 w-10 rounded-xl bg-primary/10 dark:bg-secondary/10 flex items-center justify-center text-primary dark:text-secondary">
                                                <Icon size={20} />
                                            </div>
                                            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-tight">
                                                {item.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accent Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
        </div>
    );
};
