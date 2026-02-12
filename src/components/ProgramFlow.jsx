import { motion } from "framer-motion";
import { ArrowDown, Building2, Lightbulb, Wrench, CheckCircle, DollarSign, Award, TrendingUp, Globe } from "lucide-react";

const programSteps = [
    {
        id: 1,
        title: "University & Research Partnerships",
        description: "Collaboration with universities, polytechnics, research centers, and innovation hubs.",
        icon: Building2,
        color: "from-green-600 to-green-700",
        iconBg: "bg-green-100 dark:bg-green-900/30",
        iconColor: "text-green-700 dark:text-green-400"
    },
    {
        id: 2,
        title: "Innovation Challenge & Call for Ideas",
        description: "Students and young innovators submit ideas in AgriTech, Clean Energy & Climate Solutions, Health & Bio-Safety, and Digital Transformation & AI.",
        icon: Lightbulb,
        color: "from-orange-600 to-orange-700",
        iconBg: "bg-orange-100 dark:bg-orange-900/30",
        iconColor: "text-orange-700 dark:text-orange-400"
    },
    {
        id: 3,
        title: "Ideation, Design & Prototype Development",
        description: "Selected teams receive mentorship, technical support, and access to innovation labs to develop functional prototypes.",
        icon: Wrench,
        color: "from-teal-600 to-teal-700",
        iconBg: "bg-teal-100 dark:bg-teal-900/30",
        iconColor: "text-teal-700 dark:text-teal-400"
    },
    {
        id: 4,
        title: "Screening, Validation & IP Support",
        description: "Projects are evaluated for feasibility, impact, scalability, and market readiness, with guidance on intellectual property protection.",
        icon: CheckCircle,
        color: "from-blue-600 to-blue-700",
        iconBg: "bg-blue-100 dark:bg-blue-900/30",
        iconColor: "text-blue-700 dark:text-blue-400"
    },
    {
        id: 5,
        title: "Funding & Entrepreneurial Support",
        description: "High-potential innovations receive seed funding, business development support, and commercialization coaching.",
        icon: DollarSign,
        color: "from-yellow-600 to-yellow-700",
        iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
        iconColor: "text-yellow-700 dark:text-yellow-400"
    },
    {
        id: 6,
        title: "Future Made in Nigeria Innovation Fair",
        description: "Innovators showcase inventions to sponsors, investors, corporates, government agencies, and development partners.",
        icon: Award,
        color: "from-purple-600 to-purple-700",
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        iconColor: "text-purple-700 dark:text-purple-400"
    },
    {
        id: 7,
        title: "Adoption, Investment & Commercialization",
        description: "Partners adopt, license, incubate, or invest in selected innovations, leading to startups, spin-offs, and market deployment.",
        icon: TrendingUp,
        color: "from-red-600 to-red-700",
        iconBg: "bg-red-100 dark:bg-red-900/30",
        iconColor: "text-red-700 dark:text-red-400"
    },
    {
        id: 8,
        title: "Scale, Impact & Sustainability",
        description: "Successful solutions are scaled locally and globally, creating jobs, strengthening industries, and driving sustainable development.",
        icon: Globe,
        color: "from-green-600 to-green-700",
        iconBg: "bg-green-100 dark:bg-green-900/30",
        iconColor: "text-green-700 dark:text-green-400"
    }
];

export const ProgramFlow = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                            Our Process
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                            The Future Made in Nigeria <span className="text-primary">Initiative</span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            A comprehensive program flow designed to transform innovative ideas into market-ready solutions that drive sustainable development across Nigeria.
                        </p>
                    </motion.div>
                </div>

                {/* Program Flow Steps */}
                <div className="relative max-w-4xl mx-auto">
                    {programSteps.map((step, index) => {
                        const Icon = step.icon;
                        const isLast = index === programSteps.length - 1;

                        return (
                            <div key={step.id} className="relative">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Step Card */}
                                    <div className="flex gap-6 mb-8">
                                        {/* Icon Circle */}
                                        <div className="flex-shrink-0">
                                            <div className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-lg`}>
                                                <Icon className={`${step.iconColor}`} size={28} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {step.title}
                                                </h3>
                                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                                                    {step.id}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow Connector */}
                                    {!isLast && (
                                        <div className="flex justify-center mb-8">
                                            <motion.div
                                                animate={{ y: [0, 10, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="text-primary dark:text-secondary"
                                            >
                                                <ArrowDown size={32} strokeWidth={3} />
                                            </motion.div>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                        Ready to be part of Nigeria's innovation revolution?
                    </p>
                    <a
                        href="/partner"
                        className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                    >
                        Partner With Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
