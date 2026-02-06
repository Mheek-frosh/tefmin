import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Globe2, Award, ChevronRight, X, Briefcase, GraduationCap, Users, Lightbulb, Heart, TrendingUp, Building2, Sparkles, Quote, Flag } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Newsletter } from "../components/Newsletter";
import { siteConfig, founderBio } from "../data/siteData";

const coreValues = [
    { icon: Heart, title: "Integrity", desc: "We uphold the highest ethical standards in all our engagements, fostering trust and transparency." },
    { icon: Users, title: "Collaboration", desc: "We believe in the power of partnerships, working together to create sustainable impact." },
    { icon: Lightbulb, title: "Innovation", desc: "We embrace creative solutions and emerging technologies to solve complex challenges." },
    { icon: TrendingUp, title: "Excellence", desc: "We pursue world-class standards in every project, proving that 'Made in Nigeria' means quality." },
];

const milestones = [
    { year: "2024", title: "TEFMIN Founded", desc: "Establishment of The Future Made in Nigeria Project Ltd in Lagos." },
    { year: "2024", title: "First Consulting Engagement", desc: "Initiated partnerships with Federal MDAs and private sector organizations." },
    { year: "2025", title: "Youth Empowerment Launch", desc: "Rolled out nationwide youth empowerment and capacity building programs." },
    { year: "2026", title: "Industrial Hub Vision", desc: "Strategic planning for industrial parks and manufacturing excellence centers." },
];

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
                        Building the <br />
                        <span className="text-primary dark:text-secondary italic">Future</span> Made in Nigeria.
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                        {siteConfig.fullName} (TEFMIN) is more than an organization; it's a movement focused on {siteConfig.tagline.toLowerCase()} through industrial excellence.
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

            {/* About Content Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8">
                            Who We <span className="text-secondary italic">Are</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            <p>
                                <strong className="text-gray-900 dark:text-white">The Future Made in Nigeria Project Ltd (TEFMIN)</strong> is a visionary consulting and social impact organization established to drive sustainable economic development across Nigeria and Africa.
                            </p>
                            <p>
                                We are committed to transforming the perception and reality of Nigerian manufacturing, proving that products "Made in Nigeria" can compete on the global stage. Our approach combines strategic consulting, capacity building, and institutional strengthening to create lasting change.
                            </p>
                            <p>
                                TEFMIN operates at the intersection of <strong className="text-primary dark:text-secondary">business development</strong>, <strong className="text-primary dark:text-secondary">human capital empowerment</strong>, and <strong className="text-primary dark:text-secondary">industrial innovation</strong>. We work with governments, private enterprises, and development organizations to unlock Nigeria's full economic potential.
                            </p>
                            <p>
                                From youth empowerment programs that equip the next generation with market-ready skills, to corporate advisory services that help businesses scale responsibly, everything we do is guided by our belief that Nigeria has what it takes to lead Africa's industrial renaissance.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-[3rem] p-10 lg:p-12">
                            <img src={bgLogo} alt="TEFMIN Logo" className="w-24 h-auto mb-8 opacity-80" />
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Our Vision</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                To be Africa's leading catalyst for industrial transformation, creating a self-reliant economy where Nigerian innovation and craftsmanship are celebrated globally.
                            </p>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                To empower individuals, strengthen institutions, and drive sustainable industrial growth through strategic consulting, capacity building, and transformative partnerships.
                            </p>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-[60px] -z-10" />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-gray-50 dark:bg-gray-800 py-24 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                            Our Foundation
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                            Core <span className="text-secondary italic">Values</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-900 rounded-3xl p-8 text-center shadow-lg"
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-secondary">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Founder Section - Image Left, Content Right */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                        Leadership
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                        Meet Our <span className="text-secondary italic">Founder</span>
                    </h2>
                </div>

                <div className="relative max-w-none">
                    <div className="relative backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-[3rem] shadow-[0_48px_100px_-24px_rgba(0,0,0,0.1)] dark:shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            {/* Image - Left Side */}
                            <div className="relative w-full max-w-[450px] aspect-[4/5] lg:w-[450px] lg:h-[550px] rounded-tl-[3rem] rounded-bl-[3rem] rounded-tr-none rounded-br-none overflow-hidden border-y-4 border-l-4 border-secondary/30 shadow-2xl mx-auto lg:mx-0 lg:m-12">
                                <img
                                    src={founderBio.image}
                                    alt={founderBio.name}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/20 to-transparent" />

                                {/* Expand Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsFounderExpanded(true)}
                                    className="absolute -bottom-4 right-1/2 translate-x-1/2 lg:right-[-1rem] lg:translate-x-0 w-14 h-14 bg-primary hover:bg-primary/90 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 transition-colors"
                                >
                                    <ChevronRight size={28} />
                                </motion.button>
                            </div>

                            {/* Content - Right Side */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-4 w-fit">
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
                                        {siteConfig.tagline}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-8">
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
                                    className="inline-flex items-center gap-2 text-primary dark:text-secondary font-bold hover:underline underline-offset-4 group w-fit"
                                >
                                    Read Full Biography
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline / Milestones */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                        Our Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                        Key <span className="text-secondary italic">Milestones</span>
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block" />

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                                        <span className="text-4xl font-black text-primary dark:text-secondary">{milestone.year}</span>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">{milestone.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{milestone.desc}</p>
                                    </div>
                                </div>
                                <div className="w-4 h-4 bg-secondary rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 hidden md:block" />
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
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
            <section className="bg-gray-50 dark:bg-gray-800 py-32 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">Become part of the <br /><span className="text-primary dark:text-secondary italic">TEFMIN</span> Legacy.</h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">Whether you are an investor, artisan, or dreamer, there is a place for you in the Future Made in Nigeria Project.</p>
                    <Button className="px-16 py-6 text-xl shadow-2xl shadow-primary/30">Connect with Us</Button>
                </div>
            </section>

            {/* Newsletter */}
            <Newsletter />

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
                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                {/* Image Side */}
                                <div className="relative h-64 lg:h-auto lg:col-span-1">
                                    <img
                                        src={founderBio.image}
                                        alt={founderBio.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 to-transparent" />
                                    <button
                                        onClick={() => setIsFounderExpanded(false)}
                                        className="absolute top-4 right-4 lg:hidden w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Content Side */}
                                <div className="lg:col-span-2 p-8 lg:p-10">
                                    <button
                                        onClick={() => setIsFounderExpanded(false)}
                                        className="hidden lg:flex absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 items-center justify-center transition-colors text-gray-600 dark:text-gray-300"
                                    >
                                        <X size={20} />
                                    </button>

                                    <div className="mb-6">
                                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-1">{founderBio.name}</h3>
                                        <p className="text-primary dark:text-secondary font-bold text-sm uppercase tracking-wider">{founderBio.title}</p>
                                    </div>

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
                                            <img src={bgLogo} alt="TEFMIN" className="h-12 w-auto" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white">The Future Made in Nigeria Project Ltd</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">TEFMIN - Building Africa's Future</p>
                                            </div>
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
