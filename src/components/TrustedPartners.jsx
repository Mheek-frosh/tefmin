import { motion } from "framer-motion";
import sdgImage from "../assets/sdg.jpeg";
import valueImage from "../assets/value.jpeg";
import nyscLogo from "../assets/nysc.png";
import nitdaLogo from "../assets/nitda.png";
import tonyLogo from "../assets/tony.png";
import smedanLogo from "../assets/smedan.png";
import npowerLogo from "../assets/npower.png";
import katLogo from "../assets/kat.png";

export const TrustedPartners = () => {
    const partners = [
        { name: "NYSC", logo: nyscLogo },
        { name: "SMEDAN", logo: smedanLogo },
        { name: "SDG", logo: sdgImage },
        { name: "Value", logo: valueImage },
        { name: "Tony Elumelu Foundation", logo: tonyLogo },
        { name: "NITDA", logo: nitdaLogo },
        { name: "N-Power", logo: npowerLogo },
        { name: "KAT", logo: katLogo },
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                        Trusted <span className="text-primary">Partners</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Collaborating with leading organizations to drive youth development and sustainable innovation in Nigeria
                    </p>
                </motion.div>

                {/* Floating/Scrolling Logo Animation */}
                <div className="relative">
                    <motion.div
                        className="flex gap-12 items-center"
                        animate={{
                            x: [0, -1200],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate the partners array for seamless loop */}
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="flex-shrink-0 w-[180px] h-[100px] bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-shadow flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://via.placeholder.com/150x60/1a1a1a/ffffff?text=${partner.name}`;
                                    }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
