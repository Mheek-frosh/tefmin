import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Handshake, TrendingUp, Users, Target, Lightbulb, Award, Sparkles, Check } from "lucide-react";
import { Button } from "../components/ui/Button";
import sdgLogo from "../assets/sdg.jpeg";

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

        // WhatsApp URL - New number provided by user
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
            icon: <Lightbulb size={28} />,
            title: "Early-Stage Access",
            description: "Scalable, locally developed technologies from Nigerian innovators"
        },
        {
            icon: <Users size={28} />,
            title: "Co-Creation Opportunities",
            description: "Direct collaboration with universities and research institutions"
        },
        {
            icon: <Award size={28} />,
            title: "Brand Visibility",
            description: "Thought leadership at the Future Made in Nigeria Science & Tech Innovation Fair"
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Talent Pipeline",
            description: "Access to startups, spin-offs, and emerging tech talent"
        },
        {
            icon: <Target size={28} />,
            title: "Strategic Alignment",
            description: (
                <div className="flex items-center gap-2">
                    <span>Support national development priorities,</span>
                    <img src={sdgLogo} alt="SDG" className="h-5 w-auto inline-block" />
                    <span>SDGs, ESG, and climate goals</span>
                </div>
            )
        }
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
                    {/* Decorative Background Elements */}
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
                        <span className="text-sm font-black uppercase tracking-wider text-gray-700">Build the Future Together</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-[0.95]">
                        <span className="block text-gray-900">Partner With</span>
                        <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                            TEFMIN
                        </span>
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-1 w-16 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                        <Handshake className="text-primary" size={32} />
                        <div className="h-1 w-16 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
                    </div>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Join TEFMIN in advancing the UN Sustainable Development Goals through innovation, empowerment, and sustainable industrial transformation in Nigeria
                    </p>
                </motion.div>

                {/* SDG Alignment Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-3xl p-8 md:p-12 mb-12 border border-primary/20"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <img src={sdgLogo} alt="UN Sustainable Development Goals" className="w-48 h-auto rounded-2xl shadow-lg" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                                Aligned with the <span className="text-primary">UN SDGs</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Our partnership framework directly supports multiple Sustainable Development Goals, including <strong>SDG 4 (Quality Education)</strong>, <strong>SDG 8 (Decent Work and Economic Growth)</strong>, <strong>SDG 9 (Industry, Innovation and Infrastructure)</strong>, <strong>SDG 12 (Responsible Consumption and Production)</strong>, and <strong>SDG 17 (Partnerships for the Goals)</strong>.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                By partnering with TEFMIN, your organization contributes to measurable impact on global sustainability targets while advancing Nigeria's innovation ecosystem and creating opportunities for local talent.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-8">
                        <h2 className="text-3xl font-black text-gray-900 mb-6">About the Initiative</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                The <strong>Future Made in Nigeria Initiative (FMNI)</strong> offers partners a unique opportunity to engage directly with Nigeria's emerging innovators while advancing solutions aligned with the UN Sustainable Development Goals. Our focus areas include AgriTech, Clean Energy & Climate Solutions, Health & Bio-Safety Innovation, Digital Transformation, and Artificial Intelligence.
                            </p>
                            <p>
                                By partnering with TEFMIN, organizations gain early access to high-potential inventions, research-driven innovations, and young talent emerging from universities and research institutions across Nigeria. Our platform enables partners to identify, adopt, invest in, license, or incubate innovations aligned with their strategic, commercial, CSR, ESG, and SDG objectives.
                            </p>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-10 mb-8">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Why Partner with TEFMIN?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-4 p-4 bg-white rounded-2xl"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                                        <p className="text-sm text-gray-600">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Partnership Models */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Partnership Models</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                <span>Innovation sponsorship and challenge funding</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                <span>Prototype and pilot project support</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                <span>Corporate adoption and commercialization partnerships</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                <span>Research-to-market and university-industry collaboration</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                <span>CSR, ESG, and SDG-aligned development partnerships</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                <span>Sustainable technology transfer and capacity building</span>
                            </li>
                        </ul>
                        <p className="text-sm text-gray-600 mt-6 italic">
                            TEFMIN serves as the neutral convener and commercialization bridge, ensuring value creation for innovators while delivering strategic, measurable impact aligned with global sustainability goals.
                        </p>
                    </div>
                </motion.div>

                {/* Partnership Form - Full Width Below */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                        <div className="text-center mb-10">
                            <h3 className="text-4xl font-black text-gray-900 mb-3">Start Your Partnership Journey</h3>
                            <p className="text-gray-600 text-lg">Fill out the form below and we'll connect with you via WhatsApp to discuss how we can collaborate on advancing the SDGs together</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2 block mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-gray-900 placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2 block mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2 block mb-2">
                                        Company/Organization *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Name"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-gray-900 placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2 block mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+234 800 000 0000"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2 block mb-2">
                                    Partnership Interest *
                                </label>
                                <select
                                    required
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none font-bold text-gray-900"
                                >
                                    <option value="">Select an option</option>
                                    {partnershipInterests.map((interest) => (
                                        <option key={interest} value={interest}>{interest}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2 block mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your SDG priorities and partnership goals..."
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none font-bold text-gray-900 placeholder-gray-400"
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full py-5 text-lg shadow-2xl flex items-center justify-center gap-3">
                                Send <Send size={20} />
                            </Button>

                            <p className="text-xs text-gray-500 text-center">
                                Your inquiry will be sent to our WhatsApp for immediate response
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
