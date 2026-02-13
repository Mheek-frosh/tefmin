import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Clock, CheckCircle2, Award, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Newsletter } from "../components/Newsletter";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="pt-32 pb-24 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

                    {/* Info Side */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-6 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                                Get in Touch
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-10 leading-[0.9] tracking-tighter">
                                Let's Build the <br />
                                <span className="text-primary dark:text-secondary underline decoration-secondary decoration-8 underline-offset-8">Future.</span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                                Have a CSR project or training need? Want to join our empowerment cycle? Reach out to our team of experts and let's discuss how we can collaborate.
                            </p>

                            <div className="space-y-8">
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="group flex items-start gap-6 p-6 rounded-[2rem] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                                >
                                    <div className="h-14 w-14 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary dark:text-secondary group-hover:bg-primary group-hover:text-white transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Headquarters</h4>
                                        <p className="text-gray-500 dark:text-gray-400">Suite 402, TEFMIN Plaza, Lekki Phase 1, Lagos, Nigeria</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="group flex items-start gap-6 p-6 rounded-[2rem] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                                >
                                    <div className="h-14 w-14 rounded-2xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-primary dark:text-secondary group-hover:bg-secondary group-hover:text-primary transition-all">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Call Us</h4>
                                        <a href="tel:+2348072222291" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors block">
                                            +234 807 222 2291
                                        </a>
                                        <a href="tel:+447423090691" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors block">
                                            +44 7423 090691
                                        </a>
                                        <p className="text-xs font-bold text-primary dark:text-secondary mt-1 uppercase tracking-widest">Available 9AM - 6PM WAT</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="group flex items-start gap-6 p-6 rounded-[2rem] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                                >
                                    <div className="h-14 w-14 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary dark:text-secondary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email Us</h4>
                                        <p className="text-gray-500 dark:text-gray-400">info@tefmin.com</p>
                                        <p className="text-gray-500 dark:text-gray-400">projects@tefmin.com</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7 relative">
                        {/* Background Decorative */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10" />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-gray-800 rounded-[3rem] p-10 md:p-16 shadow-[0_48px_80px_-16px_rgba(0,0,0,0.1)] dark:shadow-2xl border border-gray-100 dark:border-gray-700 min-h-[600px] flex flex-col justify-center"
                        >
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                    >
                                        <div className="mb-10 flex items-center justify-between">
                                            <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Inquiry Form</h3>
                                            <MessageSquare className="text-primary/20" size={40} />
                                        </div>

                                        <form className="space-y-8" onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="John Doe"
                                                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-600 transition-all font-bold text-gray-900 dark:text-white placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="space-y-4">
                                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-600 transition-all font-bold text-gray-900 dark:text-white placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Nature of Inquiry</label>
                                                <select className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-600 transition-all appearance-none font-bold text-gray-900 dark:text-white">
                                                    <option>Industrial Project Partner</option>
                                                    <option>Training & Recruitment</option>
                                                    <option>Corporate Partnership</option>
                                                    <option>Artisan Empowerment</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Your Message</label>
                                                <textarea
                                                    required
                                                    rows="5"
                                                    placeholder="Tell us about your project or vision..."
                                                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-gray-600 transition-all resize-none font-bold text-gray-900 dark:text-white placeholder-gray-400"
                                                ></textarea>
                                            </div>

                                            <Button type="submit" className="w-full py-5 text-lg shadow-2xl flex items-center justify-center gap-3 active:scale-95">
                                                Send Message <Send size={20} />
                                            </Button>

                                            <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                                                <CheckCircle2 size={16} className="text-primary dark:text-secondary" />
                                                <span>Your data is protected by TEFMIN Privacy Policy.</span>
                                            </div>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center"
                                    >
                                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20">
                                            <Sparkles className="text-primary" size={48} />
                                        </div>
                                        <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">Inquiry Received!</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed max-w-sm mx-auto">
                                            Thank you for reaching out. A TEFMIN representative will contact you via email within 24 hours.
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-10"
                                        >
                                            Send Another Message
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Google Maps Section */}
            <section className="max-w-7xl mx-auto px-6 mt-24">
                <div className="text-center mb-12">
                    <span className="text-primary dark:text-secondary font-black tracking-widest uppercase text-xs mb-4 inline-block bg-primary/5 dark:bg-secondary/10 px-4 py-2 rounded-full">
                        Find Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                        Our <span className="text-secondary italic">Location</span>
                    </h2>
                </div>

                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286098991983!2d3.4707!3d6.4299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cc3e6e8e0d%3A0x0!2sLekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                        title="TEFMIN Office Location"
                    ></iframe>

                    {/* Location Card Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">TEFMIN Headquarters</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Suite 402, TEFMIN Plaza</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Lekki Phase 1, Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <div className="max-w-7xl mx-auto px-6 mt-24 pt-24 border-t border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div>
                        <Globe className="mx-auto mb-4 text-primary/20 dark:text-secondary/20" size={32} />
                        <h5 className="font-bold text-gray-900 dark:text-white mb-1">Global Network</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Export Partners</p>
                    </div>
                    <div>
                        <Clock className="mx-auto mb-4 text-primary/20 dark:text-secondary/20" size={32} />
                        <h5 className="font-bold text-gray-900 dark:text-white mb-1">24Hr Response</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Priority Support</p>
                    </div>
                    <div>
                        <ShieldCheck className="mx-auto mb-4 text-primary/20 dark:text-secondary/20" size={32} />
                        <h5 className="font-bold text-gray-900 dark:text-white mb-1">Eco System</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Verified Partners</p>
                    </div>
                    <div>
                        <Award className="mx-auto mb-4 text-primary/20 dark:text-secondary/20" size={32} />
                        <h5 className="font-bold text-gray-900 dark:text-white mb-1">Impact First</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Certified Projects</p>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="mt-24">
                <Newsletter />
            </div>
        </div>
    );
}
