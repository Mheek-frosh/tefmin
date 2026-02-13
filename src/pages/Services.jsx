import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase, TrendingUp, Users, ShieldCheck, Lightbulb,
    Building2, GraduationCap, Globe2, ChevronRight, CheckCircle2,
    ArrowRight, Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { ProgramFlow } from "../components/ProgramFlow";
import logO from "../assets/logow.png";

const services = [
    {
        id: 1,
        icon: Briefcase,
        title: "Business Development & Consulting",
        shortDesc: "Strategic guidance for MSMEs and enterprises looking to scale operations.",
        fullDesc: "We provide comprehensive business development consulting that helps Nigerian enterprises navigate complex market dynamics, develop winning strategies, and achieve sustainable growth. Our team brings decades of experience across public and private sectors.",
        features: [
            "Market analysis and opportunity identification",
            "Business strategy development",
            "Operational efficiency optimization",
            "Partnership and investment facilitation",
            "Regulatory compliance guidance"
        ],
        color: "primary"
    },
    {
        id: 2,
        icon: Users,
        title: "Human Capital Development",
        shortDesc: "Training and empowerment programs for workforce excellence.",
        fullDesc: "Our human capital development programs are designed to uplift Nigerian youth and professionals with globally competitive skills. From technical training to leadership development, we build capacity for industrial excellence.",
        features: [
            "Technical and vocational training",
            "Leadership and management development",
            "Entrepreneurship boot camps",
            "Digital skills acquisition",
            "Industry certification programs"
        ],
        color: "secondary"
    },
    {
        id: 3,
        icon: ShieldCheck,
        title: "Corporate Social Responsibility Advisory (CSR)",
        shortDesc: "Helping organizations create meaningful social impact.",
        fullDesc: "We guide corporations in developing and implementing CSR strategies that create genuine community impact while aligning with business objectives. Our approach ensures sustainable, measurable outcomes.",
        features: [
            "CSR strategy development",
            "Community engagement programs",
            "Impact measurement and reporting",
            "Stakeholder management",
            "Sustainability integration"
        ],
        color: "primary"
    },
    {
        id: 4,
        icon: Building2,
        title: "Institutional Strengthening",
        shortDesc: "Building capacity for government and development organizations.",
        fullDesc: "We work with Federal and State MDAs, NGOs, and international development organizations to strengthen institutional capacity, improve governance, and enhance service delivery effectiveness.",
        features: [
            "Organizational capacity assessment",
            "Process improvement consulting",
            "Policy development support",
            "Monitoring and evaluation systems",
            "Knowledge management solutions"
        ],
        color: "secondary"
    },
    {
        id: 5,
        icon: TrendingUp,
        title: "Industrial Growth Solutions",
        shortDesc: "End-to-end support for manufacturing and industrial enterprises.",
        fullDesc: "From factory setup to supply chain optimization, we provide comprehensive industrial consulting services that help Nigerian manufacturers compete globally while maintaining local value creation.",
        features: [
            "Factory planning and setup",
            "Supply chain optimization",
            "Quality management systems",
            "Technology integration",
            "Export market development"
        ],
        color: "primary"
    },
    {
        id: 6,
        icon: Lightbulb,
        title: "Innovation & Technology Advisory",
        shortDesc: "Digital transformation and innovation consulting.",
        fullDesc: "We help organizations leverage emerging technologies to drive innovation, improve efficiency, and create competitive advantages in an increasingly digital economy.",
        features: [
            "Digital transformation strategy",
            "Technology assessment and selection",
            "Innovation ecosystem development",
            "Startup incubation support",
            "Tech-enabled business models"
        ],
        color: "secondary"
    },

];

export default function ServicesPage() {
    const [expandedService, setExpandedService] = useState(null);

    return (
        <div className="pt-32 pb-24 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            {/* Hero Header */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-6 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                        What We Offer
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter">
                        Comprehensive <br />
                        <span className="text-primary dark:text-secondary italic">Solutions</span> for Growth.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                        TEFMIN provides a full spectrum of solutions designed to empower people, build the future, and drive sustainable growth across Nigeria and Africa.
                    </p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isExpanded = expandedService === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                layoutId={`service-${service.id}`}
                                className={`bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group ${isExpanded ? "ring-2 ring-primary dark:ring-secondary" : ""
                                    }`}
                                onClick={() => setExpandedService(isExpanded ? null : service.id)}
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${service.color === "primary"
                                    ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary"
                                    : "bg-secondary/10 dark:bg-secondary/20 text-secondary"
                                    }`}>
                                    <Icon size={32} />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                                    {service.shortDesc}
                                </p>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                                    {service.fullDesc}
                                                </p>
                                                <ul className="space-y-3">
                                                    {service.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                                            <CheckCircle2 size={18} className="text-primary dark:text-secondary shrink-0 mt-0.5" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button className="flex items-center gap-2 text-primary dark:text-secondary font-bold text-sm mt-4 group/btn">
                                    {isExpanded ? "Show Less" : "Learn More"}
                                    <ChevronRight size={16} className={`transition-transform ${isExpanded ? "rotate-90" : "group-hover/btn:translate-x-1"}`} />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-gray-50 dark:bg-gray-800 py-24 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                            Our Approach
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                            How We <span className="text-secondary italic">Work</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We deeply understand your unique challenges and objectives." },
                            { step: "02", title: "Strategy", desc: "We develop tailored solutions aligned with your goals." },
                            { step: "03", title: "Execution", desc: "We implement with precision and continuous collaboration." },
                            { step: "04", title: "Impact", desc: "We measure, refine, and ensure sustainable outcomes." }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                <div className="text-7xl font-black text-primary/10 dark:text-secondary/10 mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {item.desc}
                                </p>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-12 right-0 translate-x-1/2">
                                        <ArrowRight className="text-primary/20 dark:text-secondary/20" size={32} />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Program Flow */}
            <ProgramFlow />

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                Ready to Transform Your Enterprise?
                            </h2>
                            <p className="text-white/70 text-lg mb-8">
                                Let's discuss how TEFMIN can help you achieve sustainable growth and meaningful impact.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-bold uppercase tracking-wider rounded-2xl hover:bg-secondary/90 transition-colors shadow-lg"
                                >
                                    <Zap size={20} />
                                    Start a Conversation
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src={logO}
                                alt="TEFMIN"
                                className="w-48 h-auto opacity-20"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
