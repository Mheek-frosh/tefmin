import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Users, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import bgLogo from "../assets/bg.png";

const jobListings = [
    {
        id: 1,
        title: "Business Development Manager",
        department: "Growth",
        location: "Lagos, Nigeria",
        type: "Full-time",
        description: "Lead strategic partnerships and drive business growth across West Africa.",
        status: "coming_soon",
    },
    {
        id: 2,
        title: "Program Coordinator - Youth Empowerment",
        department: "Empowerment",
        location: "Abuja, Nigeria",
        type: "Full-time",
        description: "Coordinate and manage youth empowerment programs across multiple states.",
        status: "coming_soon",
    },
    {
        id: 3,
        title: "Industrial Consultant",
        department: "Consulting",
        location: "Lagos, Nigeria",
        type: "Contract",
        description: "Provide expert consulting services to manufacturing enterprises.",
        status: "coming_soon",
    },
    {
        id: 4,
        title: "Communications & PR Specialist",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        description: "Manage TEFMIN's brand presence and public relations initiatives.",
        status: "coming_soon",
    },
    {
        id: 5,
        title: "Training Facilitator",
        department: "Human Capital",
        location: "Multiple Locations",
        type: "Part-time",
        description: "Deliver training sessions on entrepreneurship and vocational skills.",
        status: "coming_soon",
    },
    {
        id: 6,
        title: "Research Analyst - Economic Development",
        department: "Research",
        location: "Lagos, Nigeria",
        type: "Full-time",
        description: "Conduct research on Nigerian industrial policy and economic trends.",
        status: "coming_soon",
    },
];

const benefits = [
    { icon: TrendingUp, title: "Career Growth", desc: "Meaningful work that shapes Nigeria's future" },
    { icon: Users, title: "Collaborative Culture", desc: "Work with passionate, driven professionals" },
    { icon: Heart, title: "Impact-Driven", desc: "Every role contributes to national development" },
    { icon: Sparkles, title: "Innovation Focus", desc: "Be part of transformative projects" },
];

export default function CareerPage() {
    return (
        <div className="pt-32 pb-24 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            {/* Hero Header */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-6 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                        Join Our Team
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-10 leading-[0.9] tracking-tighter">
                        Build the <span className="text-primary dark:text-secondary italic">Future</span> <br />With Us.
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                        Join TEFMIN and be part of a movement transforming Nigeria's industrial landscape. We're looking for passionate individuals ready to make a lasting impact.
                    </p>
                </motion.div>
            </section>

            {/* Benefits Section */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-secondary">
                                    <Icon size={28} />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{benefit.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Job Listings */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                            Open <span className="text-secondary">Positions</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400">Opportunities coming soon. Check back regularly!</p>
                    </div>
                    <img src={bgLogo} alt="TEFMIN" className="h-16 w-auto opacity-20 hidden md:block" />
                </div>

                <div className="space-y-4">
                    {jobListings.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-secondary/30 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                                            {job.department}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
                                            Coming Soon
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                                        {job.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                        {job.description}
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={14} />
                                            {job.location}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={14} />
                                            {job.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    <button
                                        disabled
                                        className="px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider text-sm cursor-not-allowed flex items-center gap-2"
                                    >
                                        Coming Soon
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-r from-primary to-primary/80 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <Briefcase size={48} className="mx-auto mb-6 text-secondary" />
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Don't See Your Role?
                        </h2>
                        <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                            We're always looking for talented individuals. Send us your CV and we'll keep you in mind for future opportunities.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-bold uppercase tracking-wider rounded-2xl hover:bg-secondary/90 transition-colors shadow-lg"
                        >
                            Get in Touch
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
