import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Handshake, TrendingUp, Users, Target, Lightbulb, Award, Sparkles, Check, BookOpen, GraduationCap, Globe2, Briefcase, Quote } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function PartnerForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        interest: "",
        message: ""
    });
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format message for WhatsApp
        const whatsappMessage = `*New Partnership Inquiry - TEFMIN*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Company/Organization:* ${formData.company}
*Phone:* ${formData.phone}
*Partnership Interest:* ${formData.interest}

*Message:*
${formData.message || 'No additional message provided.'}`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp URL
        const whatsappURL = `https://wa.me/2349034448700?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');

        // Show custom toast notification
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);

        // Reset form after showing toast
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                interest: "",
                message: ""
            });
        }, 500);
    };

    const partnershipInterests = [
        "Sponsor TEFMIN Initiative",
        "Innovation Sponsorship",
        "Prototype & Pilot Project Support",
        "Corporate Adoption & Commercialization",
        "Research-to-Market Collaboration",
        "CSR & ESG Partnership",
        "University-Industry Collaboration",
        "Talent Pipeline Development",
        "Other"
    ];

    const benefits = [
        {
            icon: <Target size={28} />,
            title: "Early-Stage Access",
            description: "Scalable, locally developed technologies and early access to emerging Nigerian innovations."
        },
        {
            icon: <Users size={28} />,
            title: "Co-Creation",
            description: "Opportunities to collaborate directly with universities, polytechnics, and young innovators."
        },
        {
            icon: <Award size={28} />,
            title: "Brand Visibility",
            description: "Thought leadership presence at the Future Made in Nigeria Science & Tech Innovation Fair."
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Talent Pipeline",
            description: "A direct channel for identifying startups, spin-offs, and high-potential tech talent."
        },
        {
            icon: <Globe2 size={28} />,
            title: "Strategic Alignment",
            description: "Alignment with national development priorities, SDGs, ESG, and climate goals."
        }
    ];

    const models = [
        "Innovation sponsorship and challenge funding",
        "Prototype and pilot project support",
        "Corporate adoption and commercialization partnerships",
        "Research-to-market and university-industry collaboration",
        "CSR, ESG, and development-impact partnerships"
    ];

    return (
        <div className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
            {/* Custom Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-sm px-4"
                    >
                        <div className="bg-[#10b981] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/20 backdrop-blur-sm">
                            <div className="bg-white/20 p-2 rounded-full">
                                <Check size={20} className="text-white" />
                            </div>
                            <span className="font-bold">Your Information has been sent!</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 relative"
                >
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                    </div>

                    <motion.div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full mb-6"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="text-primary" size={20} />
                        <span className="text-sm font-black uppercase tracking-wider text-gray-700">Flagship Program</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                        <span className="block text-gray-900">TEFMIN Flagship Program:</span>
                        <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                            The Future, Made in Nigeria Initiative (FMNI)
                        </span>
                    </h1>
                </motion.div>

                {/* Flagship Program Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-[3rem] p-8 md:p-16 mb-16 shadow-xl border border-gray-100"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-xl text-primary font-bold leading-relaxed">
                                The Future, Made in Nigeria Initiative (FMNI) is TEFMIN’s flagship science, technology, and innovation program designed to unlock Nigeria’s next generation of inventors, researchers, and technology entrepreneurs.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                The initiative partners with universities, polytechnics, research institutions, and innovation hubs to provide a structured platform for young people in science, technology, engineering, and related disciplines to conceive, design, and develop ideas into practical, market-ready solutions.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Through guided innovation labs, mentorship, and industry-led problem statements, students and young innovators are supported to transform academic concepts into prototypes, inventions, and scalable technologies addressing real economic and social challenges.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Selected projects receive financial support, technical assistance, and entrepreneurial development, including business modeling, intellectual property guidance, and go-to-market support. High-potential inventions are then showcased at the <strong>Future, Made in Nigeria Science & Tech Innovation Fair</strong>, a national platform that connects innovators with investors, corporates, government agencies, and development partners.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                At the Innovation Fair, sponsors and partners can adopt, license, incubate, or invest in selected inventions, accelerating commercialization, job creation, and indigenous technology development.
                            </p>
                            <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary italic text-gray-700">
                                The Future, Made in Nigeria Initiative positions innovation as a pathway to youth empowerment, economic diversification, and national development, ensuring that Nigerian ideas are not only imagined locally—but built, owned, and scaled globally.
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Partner With Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Partner With Us</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            The Future, Made in Nigeria Initiative (FMNI) offers sponsors a unique opportunity to engage directly with Nigeria’s emerging innovators while shaping solutions in AgriTech, Clean Energy & Climate Solutions, Health & Bio-Safety Innovation, Digital Transformation, and Artificial Intelligence.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary p-12 md:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden mb-16">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <p className="text-2xl font-medium leading-relaxed mb-8">
                                By partnering with TEFMIN, sponsors gain early access to high-potential inventions, research-driven innovations, and young talent emerging from universities and research institutions across Nigeria.
                            </p>
                            <p className="text-xl text-white/80 leading-relaxed">
                                Our platform enables partners to identify, adopt, invest in, license, or incubate innovations aligned with their strategic, commercial, CSR, ESG, and sustainability objectives.
                            </p>
                        </div>
                    </div>

                    {/* Why Partner Grid */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-black text-gray-900 mb-10 text-center uppercase tracking-tighter">Why Partner with TEFMIN?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-xl font-black mb-3 text-gray-900">{benefit.title}</h4>
                                    <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Models & Neutral Convener */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20">
                        <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-gray-100">
                            <h3 className="text-3xl font-black text-gray-900 mb-8">Partnership Models</h3>
                            <ul className="space-y-4">
                                {models.map((model, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="mt-1.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Check size={12} className="text-primary" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{model}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-secondary rounded-[3rem] p-10 md:p-14 flex flex-col justify-center text-primary">
                            <Quote size={48} className="mb-6 opacity-50" />
                            <p className="text-2xl font-black leading-tight mb-6">
                                TEFMIN serves as the neutral convener and commercialization bridge, ensuring value creation for innovators while delivering strategic and measurable impact for partners.
                            </p>
                            <div className="h-1 w-20 bg-primary/20 rounded-full" />
                        </div>
                    </div>
                </motion.div>

                {/* Partnership Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    id="partner-form"
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
                        {/* Decorative element for form */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="text-center mb-12">
                            <span className="text-primary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 px-4 py-2 rounded-full">
                                Get Started
                            </span>
                            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 px-4">Lets Create the future together</h3>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Join us in shaping the future of Nigerian innovation. Fill out the form below and we'll connect with you to discuss our partnership potential.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">
                                        Full Name *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-3xl py-5 px-8 focus:outline-none focus:bg-white transition-all font-bold text-gray-900"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">
                                        Email Address *
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="email@example.com"
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-3xl py-5 px-8 focus:outline-none focus:bg-white transition-all font-bold text-gray-900"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">
                                        Organization *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Name"
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-3xl py-5 px-8 focus:outline-none focus:bg-white transition-all font-bold text-gray-900"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+234 ..."
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-3xl py-5 px-8 focus:outline-none focus:bg-white transition-all font-bold text-gray-900"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">
                                    Partnership Interest *
                                </label>
                                <div className="relative">
                                    <select
                                        required
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-3xl py-5 px-8 focus:outline-none focus:bg-white transition-all appearance-none font-bold text-gray-900"
                                    >
                                        <option value="">Select interest type</option>
                                        {partnershipInterests.map((interest) => (
                                            <option key={interest} value={interest}>{interest}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                        <Target size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-black uppercase tracking-widest text-gray-400 ml-2">
                                    Additional Message
                                </label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your partnership goals..."
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-3xl py-6 px-8 focus:outline-none focus:bg-white transition-all resize-none font-bold text-gray-900"
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full py-6 text-xl shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 group">
                                Submit Inquiry <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>

                            <p className="text-sm text-gray-400 text-center font-medium">
                                We'll reach out via WhatsApp and Email to discuss next steps.
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
