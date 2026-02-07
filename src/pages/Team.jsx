import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Twitter, Sparkles, X, ChevronRight } from "lucide-react";
import logO from "../assets/logow.png";
import ceoImage from "../assets/ceo.jpeg";
import { founderBio } from "../data/siteData";

const management = [
    {
        name: "Oke-Olawuyi Olumide Gabriel",
        role: "Founder & CEO",
        image: ceoImage,
        bio: founderBio.bio,
        detailedBio: founderBio.detailedBio,
        highlights: [
            "20+ years of corporate excellence",
            "Business Development Consultant",
            "Expert in Public-Private Partnerships"
        ]
    },
    {
        name: "Dr. Chioma Adebayo",
        role: "Chief Industrial Consultant",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bio: "Expert in sustainable manufacturing and industrial systems.",
        detailedBio: "Dr. Chioma Adebayo brings over 15 years of experience in industrial engineering and sustainable manufacturing. She has advised numerous governments on industrial policy and has been a lead consultant for major infrastructure projects across West Africa.",
        highlights: [
            "PhD in Industrial Engineering",
            "Sustainable Manufacturing Expert",
            "Policy Advisor"
        ]
    },
    {
        name: "Engr. Musa Ibrahim",
        role: "Head of Operations",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
        bio: "Driving operational efficiency across all state branches.",
        detailedBio: "Engr. Musa Ibrahim specializes in operational logistics and supply chain optimization. With a background in mechanical engineering and business administration, he ensures TEFMIN's projects are delivered on time and within budget.",
        highlights: [
            "Project Management Professional",
            "Supply Chain Strategist",
            "Operational Excellence Leader"
        ]
    }
];

const team = [
    {
        name: "Sarah Johnson",
        role: "Business Development",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
        detailedBio: "Sarah leads our business development efforts, focusing on strategic partnerships and market expansion."
    },
    {
        name: "David Okoro",
        role: "Lead Consultant",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
        detailedBio: "David provides expert consulting services to our clients, specializing in financial restructuring and market analysis."
    },
    {
        name: "Amaka Eze",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400",
        detailedBio: "Amaka manages complex industrial projects, ensuring seamless coordination between stakeholders and technical teams."
    },
    {
        name: "Samuel Bakare",
        role: "Legal Counsel",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
        detailedBio: "Samuel oversees all legal and regulatory matters, ensuring compliance with local and international industrial standards."
    }
];

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src={logO} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                            The Minds Behind <br />
                            <span className="text-secondary italic">The Future</span>
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
                            A diverse team of visionaries, consultants, and leaders committed to Nigeria's industrial transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Top Management */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16 justify-center">
                        <div className="h-px w-12 bg-secondary" />
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                            Top Management
                        </h2>
                        <div className="h-px w-12 bg-secondary" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {management.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedMember(member)}
                            >
                                <div className="relative mb-6 overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-xl border-4 border-gray-50 dark:border-gray-800">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                                        <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold flex items-center gap-2 border border-white/30">
                                            View Bio <ChevronRight size={16} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                                            <Linkedin size={18} />
                                        </button>
                                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                                            <Mail size={18} />
                                        </button>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-secondary transition-colors uppercase tracking-tight">
                                    {member.name}
                                </h3>
                                <p className="text-primary dark:text-secondary font-bold text-xs uppercase tracking-widest mb-4">
                                    {member.role}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed italic line-clamp-3">
                                    "{member.bio}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Team Grid */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">
                            Operational Excellence
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                            Our team on the ground ensuring every project exceeds expectations.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {team.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center group cursor-pointer"
                                onClick={() => setSelectedMember(member)}
                            >
                                <div className="mb-4 rounded-3xl overflow-hidden aspect-square border-2 border-white dark:border-gray-700 shadow-lg relative">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                                            Info
                                        </div>
                                    </div>
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-black">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Modern Close Button - Top Right */}
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-6 right-6 md:top-8 md:right-8 z-[110] p-2 md:p-3 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95 border border-white/20"
                                title="Close Profile"
                            >
                                <X size={20} md:size={24} />
                            </button>

                            {/* Left Side: Image */}
                            <div className="w-full md:w-[40%] h-[300px] md:h-auto overflow-hidden relative">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>

                            {/* Right Side: Biography & Info */}
                            <div className="flex-1 p-6 md:p-14 overflow-y-auto">
                                <div className="max-w-3xl">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 dark:bg-primary/10 text-primary dark:text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 md:mb-6">
                                        Professional Profile
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 md:mb-3 leading-tight uppercase tracking-tighter">
                                        {selectedMember.name}
                                    </h2>
                                    <p className="text-primary dark:text-secondary font-black text-base md:text-lg uppercase tracking-widest mb-6 md:mb-10 pb-4 md:pb-6 border-b border-gray-100 dark:border-gray-800">
                                        {selectedMember.role}
                                    </p>

                                    <div className="space-y-8">
                                        <div className="prose prose-lg dark:prose-invert max-w-none">
                                            {/* Subtitle Bio (Italic) */}
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg font-medium italic mb-6 md:mb-8 pl-4 md:pl-6 border-l-4 border-secondary">
                                                "{selectedMember.bio || 'Strategic leader committed to excellence.'}"
                                            </p>

                                            {/* Detailed Bio Sections */}
                                            <div className="text-gray-800 dark:text-gray-200 leading-relaxed space-y-4 md:space-y-6 text-base md:text-lg">
                                                {selectedMember.detailedBio?.split('\n\n').map((para, i) => (
                                                    <p key={i} className="mb-4">{para}</p>
                                                )) || <p>Details coming soon.</p>}
                                            </div>
                                        </div>

                                        {/* Highlights Section */}
                                        {selectedMember.highlights && (
                                            <div className="pt-10 mt-10 border-t border-gray-100 dark:border-gray-800">
                                                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary dark:text-secondary mb-6 flex items-center gap-3">
                                                    <Sparkles size={18} />
                                                    Expertise Highlights
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {selectedMember.highlights.map((h, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                                            className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/40 rounded-2xl group hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm"
                                                        >
                                                            <div className="h-2 w-2 mt-1.5 rounded-full bg-secondary shrink-0 group-hover:scale-125 transition-transform" />
                                                            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{h}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* CTA Section */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-10 mt-10">
                                            <a href="#" className="flex-1 py-5 bg-primary text-white rounded-[1.5rem] font-black text-center text-sm uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20">
                                                Connect on LinkedIn <Linkedin size={20} />
                                            </a>
                                            <div className="flex gap-4">
                                                <a href="#" className="w-16 h-16 border-2 border-gray-100 dark:border-gray-800 rounded-[1.5rem] flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all">
                                                    <Mail size={24} />
                                                </a>
                                                <a href="#" className="w-16 h-16 border-2 border-gray-100 dark:border-gray-800 rounded-[1.5rem] flex items-center justify-center text-gray-500 hover:text-sky-500 hover:border-sky-500 transition-all">
                                                    <Twitter size={24} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Join Us CTA */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-primary rounded-[3rem] p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                        <h2 className="text-4xl font-black text-white mb-6 relative z-10">Want to join the movement?</h2>
                        <p className="text-white/60 mb-10 max-w-xl mx-auto relative z-10">
                            We are always looking for passionate consultants and developers to help us build Nigeria's industrial future.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 relative z-10">
                            <button className="px-8 py-4 bg-secondary text-primary font-black rounded-2xl hover:scale-105 transition-transform flex items-center gap-2">
                                View Careers <Sparkles size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
