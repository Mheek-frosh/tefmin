import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Target, Users, Flag, Rocket, Globe2, Award, ChevronRight, X, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/Button";

const founderBio = {
    name: "Oke-Olawuyi Olumide Gabriel",
    title: "Founder, Chief Executive Officer & Lead Consultant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    bio: `Oke-Olawuyi Olumide Gabriel is a seasoned business development professional, consultant, and development-focused entrepreneur with over 20 years of leadership experience across the public and private sectors in Nigeria and internationally.

He is the Founder and CEO of The Future Made in Nigeria Project Ltd (TEFMIN), a consulting and social impact firm dedicated to driving sustainable growth, human capital development, corporate responsibility, and institutional strengthening across Nigeria and Africa.

Mr. Oke-Olawuyi has held senior leadership and regional management roles in key sectors including telecommunications, FMCG, banking, international trade, and public-sector initiatives, working with organizations such as Starcomms PLC, Multichoice (DSTV), NTA–StarTimes Network Ltd, International Tobacco PLC, Societe Generale Bank Ltd, and Cranswick Foods Ltd (UK).

He also brings strong consulting and government engagement experience, having served as a Consultant to the Presidential Youth Empowerment Scheme (PYES) and advised organizations working with Federal and State Ministries, Departments, and Agencies (MDAs).

His academic and professional credentials include postgraduate training in management, entrepreneurship, and international affairs, with a PhD in Entrepreneurship & Innovation Management in view. He is a Chartered Member of the National Institute of Marketing of Nigeria (NIMN).

As Founder and CEO of TEFMIN, he provides strategic leadership, consulting oversight, partnership development, and thought leadership—advancing an African-born, globally aligned institution committed to empowering people, strengthening institutions, and building sustainable systems across Nigeria and Africa.`,
    highlights: [
        { icon: Briefcase, text: "20+ Years Leadership" },
        { icon: Award, text: "Chartered Member, NIMN" },
        { icon: GraduationCap, text: "PhD Candidate" },
    ]
};

export default function AboutPage() {
    const [isFounderExpanded, setIsFounderExpanded] = useState(false);

    return (
        <div className="pt-32 pb-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Hero Header */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-6 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                        Founded 2024
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-10 leading-[0.9] tracking-tighter">
                        Pioneering the <br />
                        <span className="text-primary dark:text-secondary italic">Industrial</span> Renaissance.
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                        The Future Made in Nigeria Project LTD (TEFMIN) is more than an organization; it's a movement to restore national pride through economic self-sufficiency and world-class manufacturing standards.
                    </p>
                </motion.div>
            </section>

            {/* Visual Section */}
            <section className="mb-32 relative">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl relative">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                            alt="TEFMIN Mission"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/20" />
                    </div>
                </div>

                {/* Floating Mission Card */}
                <div className="absolute -bottom-16 right-12 md:right-32 glass p-10 md:p-16 rounded-[3rem] shadow-2xl max-w-xl border-white/50 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl">
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 italic">"Our mission is to ensure every Nigerian knows that the best in the world can be made right here at home."</h3>
                    <div className="flex items-center gap-4">
                        <div className="h-0.5 w-12 bg-secondary" />
                        <p className="text-sm font-bold uppercase tracking-widest text-primary dark:text-secondary">Executive Director</p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 mt-16">
                <div className="text-center mb-16">
                    <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                        Leadership
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                        Meet Our <span className="text-secondary italic">Founder</span>
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="relative bg-white dark:bg-gray-800 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 dark:from-primary/10 to-transparent" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                            <div className="relative group shrink-0">
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden border-4 border-secondary/30 shadow-xl">
                                    <img
                                        src={founderBio.image}
                                        alt={founderBio.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsFounderExpanded(true)}
                                    className="absolute -bottom-4 -right-4 w-14 h-14 bg-primary hover:bg-primary/90 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 transition-colors"
                                >
                                    <ChevronRight size={28} />
                                </motion.button>

                                <div className="absolute -inset-4 border-2 border-dashed border-secondary/30 rounded-[2.5rem] -z-10" />
                            </div>

                            <div className="text-center lg:text-left flex-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                                    <Award size={14} />
                                    Visionary Leader
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                                    {founderBio.name}
                                </h3>
                                <p className="text-primary dark:text-secondary font-bold uppercase tracking-wider text-sm mb-6">
                                    {founderBio.title}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl">
                                    A seasoned business development professional with over 20 years of leadership experience, driving sustainable growth across Nigeria and Africa.
                                </p>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                    {founderBio.highlights.map((highlight, index) => {
                                        const Icon = highlight.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300"
                                            >
                                                <Icon size={16} className="text-primary dark:text-secondary" />
                                                {highlight.text}
                                            </div>
                                        );
                                    })}
                                </div>

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
            </section>

            {/* History & Goals */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-12">The TEFMIN <br />Philosophy</h2>
                        <div className="space-y-12">
                            <div className="flex gap-8">
                                <div className="shrink-0 h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-secondary shadow-lg">
                                    <Target size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold dark:text-white mb-4">Strategic Inclusion</h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">We don't believe in trickle-down economics. We believe in building from the ground up, ensuring local artisans and small-scale manufacturers are at the heart of our industrial parks.</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="shrink-0 h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-secondary shadow-lg">
                                    <Globe2 size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold dark:text-white mb-4">Global Standards</h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">Every project mentored or funded by TEFMIN must meet ISO standards. We are proving that 'Made in Nigeria' is synonymous with 'Global Excellence'.</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="shrink-0 h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center text-primary shadow-lg">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold dark:text-white mb-4">Empowerment Cycles</h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">Sustainability is our core. Every naira invested creates a cycle of empowerment that supports families, educates children, and builds communities.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-12 italic">Our Strategic Targets</h3>
                            <div className="space-y-12">
                                <div className="border-b border-white/10 pb-8">
                                    <h5 className="text-6xl font-black text-secondary mb-2">1M+</h5>
                                    <p className="text-sm uppercase tracking-widest text-white/50 font-bold">Livelihoods Impacted by 2026</p>
                                </div>
                                <div className="border-b border-white/10 pb-8">
                                    <h5 className="text-6xl font-black text-secondary mb-2">$500M</h5>
                                    <p className="text-sm uppercase tracking-widest text-white/50 font-bold">In Local Manufacturing Value</p>
                                </div>
                                <div>
                                    <h5 className="text-6xl font-black text-secondary mb-2">774</h5>
                                    <p className="text-sm uppercase tracking-widest text-white/50 font-bold">Local Governments Covered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="bg-gray-50 dark:bg-gray-800 py-32 mt-24 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">Become part of the <br /><span className="text-primary dark:text-secondary italic">TEFMIN</span> Legacy.</h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">Whether you are an investor, artisan, or dreamer, there is a place for you in the Future Made in Nigeria Project.</p>
                    <Button className="px-16 py-6 text-xl shadow-2xl shadow-primary/30">Connect with Us</Button>
                </div>
            </section>

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
                            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
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

                                <div className="mt-10 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl border border-primary/10 dark:border-secondary/10">
                                    <div className="flex items-center gap-4">
                                        <img src="/logo.png" alt="TEFMIN" className="h-12 w-auto" />
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
        </div>
    );
}

