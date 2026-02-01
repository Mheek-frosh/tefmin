import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Users, LineChart } from "lucide-react";
import { GlassContainer } from "./ui/GlassContainer";

const services = [
    {
        title: "Consultancy",
        description: "Expert guidance for navigating the complex Nigerian business landscape.",
        icon: <Briefcase className="w-8 h-8 text-secondary" />,
    },
    {
        title: "Training",
        description: "Equipping the next generation with future-ready skills and technical expertise.",
        icon: <GraduationCap className="w-8 h-8 text-secondary" />,
    },
    {
        title: "CSR Advisory",
        description: "Aligning business objectives with impactful social responsibility projects.",
        icon: <Heart className="w-8 h-8 text-secondary" />,
    },
    {
        title: "Empowerment",
        description: "Driving growth through specialized programs for SME development.",
        icon: <Users className="w-8 h-8 text-secondary" />,
    },
    {
        title: "Business Development",
        description: "Strategic partnerships and expansion strategies tailored for local success.",
        icon: <LineChart className="w-8 h-8 text-secondary" />,
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Our Core <span className="text-primary">Services</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-secondary mx-auto mb-8 rounded-full"
                    />
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        We provide comprehensive solutions designed to unlock the full potential of the Nigerian economy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <GlassContainer
                            key={service.title}
                            className="hover:border-secondary transition-colors duration-500 group"
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-primary/5 inline-block group-hover:bg-primary/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </GlassContainer>
                    ))}
                </div>
            </div>
        </section>
    );
};
