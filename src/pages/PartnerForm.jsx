import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Handshake, TrendingUp, Users, Target, Lightbulb, Award } from "lucide-react";
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
    const [isSubmitted, setIsSubmitted] = useState(false);

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
${formData.message}`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp URL
        const whatsappURL = `https://wa.me/2348072222291?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');

        // Show success message
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                interest: "",
                message: ""
            });
            setIsSubmitted(false);
        }, 3000);
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
            description: "Support national development priorities, SDGs, ESG, and climate goals"
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Handshake className="text-primary" size={40} />
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900">
                            Partner <span className="text-primary">With Us</span>
                        </h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Join TEFMIN in shaping Nigeria's innovation ecosystem and driving sustainable industrial transformation
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Left Side - Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-8">
                            <h2 className="text-3xl font-black text-gray-900 mb-6">About the Initiative</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    The <strong>Future Made in Nigeria Initiative (FMNI)</strong> offers sponsors a unique opportunity to engage directly with Nigeria's emerging innovators while shaping solutions in AgriTech, Clean Energy & Climate Solutions, Health & Bio-Safety Innovation, Digital Transformation, and Artificial Intelligence.
                                </p>
                                <p>
                                    By partnering with TEFMIN, sponsors gain early access to high-potential inventions, research-driven innovations, and young talent emerging from universities and research institutions across Nigeria. Our platform enables partners to identify, adopt, invest in, license, or incubate innovations aligned with their strategic, commercial, CSR, ESG, and sustainability objectives.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-10 mb-8">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Why Partner with TEFMIN?</h3>
                            <div className="space-y-4">
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
                            <ul className="space-y-3 text-gray-700">
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
                                    <span>CSR, ESG, and development-impact partnerships</span>
                                </li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-6 italic">
                                TEFMIN serves as the neutral convener and commercialization bridge, ensuring value creation for innovators while delivering strategic and measurable impact for partners.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 sticky top-32">
                            {!isSubmitted ? (
                                <>
                                    <h3 className="text-3xl font-black text-gray-900 mb-2">Get Started</h3>
                                    <p className="text-gray-600 mb-8">Fill out the form below and we'll connect with you via WhatsApp</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                                rows="4"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us more about your partnership goals..."
                                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none font-bold text-gray-900 placeholder-gray-400"
                                            ></textarea>
                                        </div>

                                        <Button type="submit" className="w-full py-5 text-lg shadow-2xl flex items-center justify-center gap-3">
                                            Send via WhatsApp <Send size={20} />
                                        </Button>

                                        <p className="text-xs text-gray-500 text-center">
                                            By submitting this form, you'll be redirected to WhatsApp to complete your inquiry
                                        </p>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="text-green-600" size={48} />
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 mb-4">Redirecting to WhatsApp!</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Your partnership inquiry is being sent via WhatsApp. Please complete the message there.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
