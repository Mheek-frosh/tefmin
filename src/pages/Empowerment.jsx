import { motion } from "framer-motion";
import { Users, BookOpen, TrendingUp, Heart, Star, Sparkles, Zap } from "lucide-react";
import { Button } from "../components/ui/Button";

const focusAreas = [
    {
        title: "SME Incubation",
        icon: <TrendUp size={32} className="text-secondary" />,
        description: "Accelerating local businesses through seed funding and industrial mentorship."
    },
    {
        title: "Vocational Excellence",
        icon: <BookOpen size={32} className="text-secondary" />,
        description: "Standardizing Nigerian craftsmanship to meet international luxury market requirements."
    },
    {
        title: "Community Cycles",
        icon: <Users size={32} className="text-secondary" />,
        description: "Creating self-sustaining economic hubs in rural and urban communities."
    }
];

export default function EmpowermentPage() {
    return (
        <div className="pt-32 pb-24 bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-primary font-black tracking-widest uppercase text-xs mb-6 inline-block bg-primary/5 px-4 py-2 rounded-full">
                            Growth & Inclusion
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 leading-[0.9] tracking-tighter">
                            Empowering the <br />
                            <span className="text-primary">Next Generation</span> of Industrialists.
                        </h1>
                        <p className="text-2xl text-gray-600 leading-relaxed mb-12">
                            Our empowerment programs are designed to transform local talent into global leaders. We provide the tools, the capital, and the stage for Nigeria's brightest minds to shine.
                        </p>
                        <Button className="px-12 py-5 text-lg shadow-2xl">Apply for Mentorship</Button>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="aspect-square rounded-[3rem] overflow-hidden shadow-3xl bg-primary/5 p-8"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800"
                                alt="Empowerment Session"
                                className="w-full h-full object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                        {/* Floating Accents */}
                        <div className="absolute -top-10 -right-10 h-32 w-32 bg-secondary/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-primary/10 rounded-full blur-[80px]" />
                    </div>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="bg-primary py-32 relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Our Core Focus Areas</h2>
                        <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {focusAreas.map((area, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -15 }}
                                className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-sm"
                            >
                                <div className="mb-8">{area.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                                <p className="text-white/60 leading-relaxed">{area.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats & Impact */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100">
                                <Zap className="text-primary mb-6" />
                                <h4 className="text-4xl font-black text-gray-900 mb-1">200+</h4>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Startups Incubated</p>
                            </div>
                            <div className="bg-primary/5 p-10 rounded-[2rem] border border-primary/10">
                                <Sparkles className="text-secondary mb-6" />
                                <h4 className="text-4xl font-black text-gray-900 mb-1">50K</h4>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Skills Certified</p>
                            </div>
                            <div className="col-span-2 bg-secondary/5 p-10 rounded-[2rem] border border-secondary/20 flex items-center justify-between">
                                <div>
                                    <Heart className="text-primary mb-6" />
                                    <h4 className="text-4xl font-black text-gray-900 mb-1">36</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Active States</p>
                                </div>
                                <div className="hidden md:flex -space-x-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-lg">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 44}`} alt="beneficiary" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">Measurable <span className="text-primary italic">Impact</span> in Every Community.</h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-10">
                            We don't just talk about change; we build the infrastructure for it. Our empowerment cycle ensures that every success story propagates ten more, creating an unstoppable wave of Nigerian industrial pride.
                        </p>
                        <Button variant="outline" className="px-10 py-4 font-bold">Read Impact Report</Button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-50 py-24 mt-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Ready to Scale Your Vision?</h2>
                    <p className="text-xl text-gray-500 mb-12">Applications for our 2026 Empowerment Cycle are now open.</p>
                    <Button className="px-20 py-6 text-xl shadow-3xl">Apply Now</Button>
                </div>
            </section>
        </div>
    );
}

// Utility icon
function TrendUp(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 24}
            height={props.size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={props.className}
        >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
        </svg>
    );
}
