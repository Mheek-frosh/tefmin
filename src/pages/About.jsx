import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Globe2, Award, ChevronRight, X, Briefcase, GraduationCap, Users, Lightbulb, Heart, TrendingUp, Building2, Sparkles, Quote, Flag } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Newsletter } from "../components/Newsletter";
import { siteConfig, founderBio } from "../data/siteData";
import logO from "../assets/africa.png";
import workersImage from "../assets/nigerian_workers_happy.png";
import sdgLogo from "../assets/sdg.jpeg";
import { Biography } from "../components/Biography";

const coreValues = [
    { icon: Heart, title: "Integrity", desc: "We uphold the highest ethical standards in all our engagements, fostering trust and transparency." },
    { icon: Users, title: "Collaboration", desc: "We believe in the power of partnerships, working together to create sustainable impact." },
    { icon: Lightbulb, title: "Innovation", desc: "We embrace creative solutions and emerging technologies to solve complex challenges." },
    { icon: TrendingUp, title: "Excellence", desc: "We pursue world-class standards in every project, proving that 'Made in Nigeria' means quality." },
];

const milestones = [
    { year: "2011", title: "TEFMIN Founded", desc: "Establishment of The Future Made in Nigeria Project Ltd in Lagos." },
    { year: "2014", title: "Regional Expansion & Advisory", desc: "Initiated key partnerships with Federal MDAs and private sector organizations." },
    { year: "2018", title: "Nationwide Empowerment Rollout", desc: "Extended programs to all 36 states, focusing on youth and vocational excellence." },
    { year: "2021", title: "Digital Skills & ICT Integration", desc: "Incorporating modern technology and ICT solutions into artisan workflows." },
    { year: "2024", title: "Innovation Fair & Export Readiness", desc: "Launching platforms to showcase local inventions to global luxury markets." },
    { year: "2026", title: "Vision 2026 Goal", desc: "Targeting a milestone of 1M+ Nigerians empowered through industrial inclusion." },
];

export default function About() {


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
                        Founded 2011
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-6 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter">
                        Building the <br className="hidden md:block" />
                        <span className="text-primary dark:text-secondary italic">Future</span> from Nigeria.
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                        {siteConfig.fullName} (TEFMIN) is more than an organization; it's a movement focused on {siteConfig.tagline.toLowerCase()} through industrial excellence.
                    </p>
                </motion.div>
            </section>

            {/* Visual Section */}
            <section className="mb-32 relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="aspect-video md:aspect-[21/9] rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl relative">
                        <img
                            src={workersImage}
                            alt="Modernizing the Heartbeat of Nigeria"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10" />
                    </div>
                </div>

                {/* Floating Mission Card */}
                <div className="relative md:absolute md:-bottom-16 md:right-32 mt-[-2rem] md:mt-0 mx-6 md:mx-0 glass p-8 md:p-16 rounded-3xl md:rounded-[3rem] shadow-2xl max-w-xl border-white/50 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl">
                    <h3 className="text-xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 italic">"Our mission is to ensure every Nigerian knows that the best in the world can be made right here at home."</h3>
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
                            <div className="flex items-center gap-4 mb-8">
                                <img src={logO} alt="TEFMIN Logo" className="w-16 h-auto transition-all duration-500" />
                                <div className="flex flex-col">
                                    <span className="font-black text-2xl tracking-tighter text-[#1a5f3f] dark:text-white leading-none">
                                        TEFMIN
                                    </span>
                                    <span className="text-[10px] font-medium text-secondary mt-1.5 whitespace-nowrap leading-none tracking-wide">
                                        The Future Made in Nigeria Ltd
                                    </span>
                                </div>
                            </div>
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

            {/* SDG Alignment Section - Relocated and Overhauled */}
            <section className="py-24 bg-primary/5 dark:bg-primary/10 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 md:p-16 shadow-2xl border border-primary/10 dark:border-white/5"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            {/* Logo on the Left */}
                            <div className="flex-shrink-0 w-full lg:w-2/5 order-2 lg:order-1">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative group outline-none"
                                >
                                    <img
                                        src={sdgLogo}
                                        alt="UN Sustainable Development Goals"
                                        className="w-full h-auto rounded-3xl shadow-xl transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 rounded-3xl bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </motion.div>
                            </div>

                            <div className="flex-1 order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-1 w-12 bg-primary dark:bg-secondary rounded-full" />
                                    <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs">Sustainability Commitment</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8">
                                    Advancing the <span className="text-primary dark:text-secondary">UN SDG Goals</span>
                                </h2>

                                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-10">
                                    <p>
                                        The Future Made in Nigeria Project Ltd (TEFMIN) is a consulting and social impact development organization committed to advancing sustainable development in Nigeria and across Africa. Our work is intentionally aligned with the United Nations Sustainable Development Goals (SDGs), with a focus on human capital development, economic empowerment, institutional strengthening, and inclusive growth.
                                    </p>
                                    <p>
                                        Through our integrated approach to consulting, CSR advisory, empowerment, and training, TEFMIN directly supports the achievement of <strong>SDG 4 (Quality Education)</strong>, <strong>SDG 8 (Decent Work and Economic Growth)</strong>, and <strong>SDG 9 (Industry, Innovation and Infrastructure)</strong>, while contributing meaningfully to <strong>SDGs 1, 5, 10, and 17.</strong>
                                    </p>
                                    <p className="border-l-4 border-secondary pl-6 italic font-medium text-gray-600 dark:text-gray-400">
                                        TEFMIN works collaboratively with governments, corporations, development partners, and communities to design and implement sustainable, measurable, and scalable solutions that address Africa’s development challenges while strengthening institutions and economic systems.
                                    </p>
                                </div>

                                {/* Structured Goal Groups */}
                                <div className="space-y-8 mb-12">
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-primary dark:text-secondary mb-4">Primary SDGs</h4>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {[
                                                { id: 4, name: "Education", color: "bg-[#c3132c]" },
                                                { id: 8, name: "Growth", color: "bg-[#a21942]" },
                                                { id: 9, name: "Innovation", color: "bg-[#f36d25]" },
                                                { id: 1, name: "No Poverty", color: "bg-[#e5243b]" }
                                            ].map((sdg) => (
                                                <div key={sdg.id} className="flex flex-col items-center gap-2 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 group hover:border-primary/20 transition-all">
                                                    <div className={`h-10 w-10 rounded-xl ${sdg.color} text-white flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                                                        {sdg.id}
                                                    </div>
                                                    <span className="font-bold text-[10px] uppercase tracking-tighter text-center">{sdg.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-primary dark:text-secondary mb-4">Supporting SDGs</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {[
                                                { id: 5, name: "Equality" },
                                                { id: 10, name: "Reduced Inequalities" },
                                                { id: 17, name: "Partnerships" }
                                            ].map((sdg) => (
                                                <div key={sdg.id} className="flex items-center gap-3 bg-gray-50/50 dark:bg-gray-900/30 px-5 py-3 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
                                                    <div className="h-6 w-6 rounded-full bg-secondary text-primary flex items-center justify-center font-black text-[10px]">
                                                        {sdg.id}
                                                    </div>
                                                    <span className="font-bold text-[10px] uppercase tracking-widest opacity-70">{sdg.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Impact Ecosystem: Clients & Beneficiaries */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100 dark:border-gray-700 mb-12">
                                    <div>
                                        <h4 className="text-base font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                            <Building2 size={18} className="text-primary" />
                                            Primary Clients
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                                            <li>• Corporate organizations</li>
                                            <li>• Multinational companies</li>
                                            <li>• NGOs and development agencies</li>
                                            <li>• Government institutions and MDAs</li>
                                            <li>• SMEs and startups</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                            <Users size={18} className="text-secondary" />
                                            Direct Beneficiaries
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                                            <li>• Youth and young professionals</li>
                                            <li>• Entrepreneurs and SMEs</li>
                                            <li>• Communities and vulnerable groups</li>
                                            <li>• Corporate and institutional staff</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* TEFMIN Differentiators */}
                                <div className="bg-primary/5 dark:bg-primary/20 p-8 rounded-[2rem] border border-primary/10">
                                    <h4 className="text-lg font-black text-primary dark:text-secondary mb-6 italic">TEFMIN differentiates itself by offering:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Integrated solutions (consulting + CSR + training + empowerment)",
                                            "Deep understanding of the Nigerian and African context",
                                            "Data-driven and impact-focused program design",
                                            "Strong alignment with global development goals (SDGs & ESG)",
                                            "Scalable models suitable for local and international application"
                                        ].map((diff, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="h-2 w-2 rounded-full bg-secondary mt-2 shrink-0" />
                                                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-tight">{diff}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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

            <div className="max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                            About Our Founder
                        </h2>
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                    </div>

                    <Biography data={founderBio} />
                </motion.div>
            </div>
            <Newsletter />
        </div>
    );
};
