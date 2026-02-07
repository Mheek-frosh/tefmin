import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Sparkles, Building2, Users } from "lucide-react";
import logO from "../assets/logow.png";

const management = [
    {
        name: "Oke-Olawuyi Olumide Gabriel",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", // Replace with real asset if available
        bio: "Strategic leader with 20+ years of corporate excellence."
    },
    {
        name: "Dr. Chioma Adebayo",
        role: "Chief Industrial Consultant",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bio: "Expert in sustainable manufacturing and industrial systems."
    },
    {
        name: "Engr. Musa Ibrahim",
        role: "Head of Operations",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
        bio: "Driving operational efficiency across all state branches."
    }
];

const team = [
    { name: "Sarah Johnson", role: "Business Development", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400" },
    { name: "David Okoro", role: "Lead Consultant", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
    { name: "Amaka Eze", role: "Project Manager", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400" },
    { name: "Samuel Bakare", role: "Legal Counsel", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400" }
];

const Team = () => {
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
                                className="group"
                            >
                                <div className="relative mb-6 overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-xl border-4 border-gray-50 dark:border-gray-800">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-6 left-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors">
                                            <Linkedin size={18} />
                                        </button>
                                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors">
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
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed italic">
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
                                className="text-center group"
                            >
                                <div className="mb-4 rounded-3xl overflow-hidden aspect-square border-2 border-white dark:border-gray-700 shadow-lg relative">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-black">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
