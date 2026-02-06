import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Users, LineChart } from "lucide-react";
import { GlassContainer } from "./ui/GlassContainer";

const services = [
    {
        title: "Consultancy",
        description: "Expert guidance for navigating the complex Nigerian business landscape.",
        icon: <Briefcase className="w-8 h-8 text-secondary" />,
        image: "/consultancy_service.png",
    },
    {
        title: "Training",
        description: "Equipping the next generation with future-ready skills and technical expertise.",
        icon: <GraduationCap className="w-8 h-8 text-secondary" />,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "CSR Advisory",
        description: "Aligning business objectives with impactful social responsibility projects.",
        icon: <Heart className="w-8 h-8 text-secondary" />,
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Empowerment",
        description: "Driving growth through specialized programs for SME development.",
        icon: <Users className="w-8 h-8 text-secondary" />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Business Development",
        description: "Strategic partnerships and expansion strategies tailored for local success.",
        icon: <LineChart className="w-8 h-8 text-secondary" />,
        image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800",
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Our Core <span className="text-primary dark:text-secondary">Services</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-secondary mx-auto mb-8 rounded-full"
                    />
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
                        We provide comprehensive solutions designed to unlock the full potential of the Nigerian economy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <GlassContainer
                            key={service.title}
                            className="hover:border-secondary transition-colors duration-500 group relative overflow-hidden"
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                <img
                                    src={service.image}
                                    alt=""
                                    className="w-full h-full object-cover scale-150 blur-xl"
                                />
                            </div>
                            <div className="relative z-10">
                                <div className="mb-6 p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 inline-block group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                            </div>
                        </GlassContainer>
                    ))}
                </div>
            </div>
        </section>
    );
};

