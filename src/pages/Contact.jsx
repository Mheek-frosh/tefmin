import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Clock, CheckCircle2, Award } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

                    {/* Info Side */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-primary font-black tracking-widest uppercase text-xs mb-6 inline-block bg-primary/5 px-4 py-2 rounded-full">
                                Get in Touch
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 leading-[0.9] tracking-tighter">
                                Let's Build the <br />
                                <span className="text-primary underline decoration-secondary decoration-8 underline-offset-8">Future.</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                                Have an industrial project in mind? Want to join our empowerment cycle? Reach out to our team of experts and let's discuss how we can collaborate.
                            </p>

                            <div className="space-y-8">
                                <div className="group flex items-start gap-6 p-6 rounded-[2rem] hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Headquarters</h4>
                                        <p className="text-gray-500">Suite 402, TEFMIN Plaza, Lekki Phase 1, Lagos, Nigeria</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-6 p-6 rounded-[2rem] hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                    <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-primary transition-all">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Call Center</h4>
                                        <p className="text-gray-500">+234 (0) 800-TEFMIN-PRO</p>
                                        <p className="text-xs font-bold text-primary mt-1 uppercase tracking-widest">Available 9AM - 6PM WAT</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-6 p-6 rounded-[2rem] hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Email Us</h4>
                                        <p className="text-gray-500">info@tefmin.com</p>
                                        <p className="text-gray-500">projects@tefmin.com</p>
                                    </div>
                                </div>
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
                            className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_48px_80px_-16px_rgba(0,0,0,0.1)] border border-gray-100"
                        >
                            <div className="mb-10 flex items-center justify-between">
                                <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Inquiry Form</h3>
                                <MessageSquare className="text-primary/20" size={40} />
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Nature of Inquiry</label>
                                    <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none">
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
                                        rows="5"
                                        placeholder="Tell us about your project or vision..."
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                                    ></textarea>
                                </div>

                                <Button className="w-full py-5 text-lg shadow-2xl flex items-center justify-center gap-3">
                                    Send Message <Send size={20} />
                                </Button>

                                <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                                    <CheckCircle2 size={16} className="text-primary" />
                                    <span>Your data is protected by TEFMIN Privacy Policy.</span>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Trust Bar */}
            <div className="max-w-7xl mx-auto px-6 mt-32 pt-24 border-t border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div>
                        <Globe className="mx-auto mb-4 text-primary/20" size={32} />
                        <h5 className="font-bold text-gray-900 mb-1">Global Network</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Export Partners</p>
                    </div>
                    <div>
                        <Clock className="mx-auto mb-4 text-primary/20" size={32} />
                        <h5 className="font-bold text-gray-900 mb-1">24Hr Response</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Priority Support</p>
                    </div>
                    <div>
                        <ShieldCheck className="mx-auto mb-4 text-primary/20" size={32} />
                        <h5 className="font-bold text-gray-900 mb-1">Eco System</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Verified Partners</p>
                    </div>
                    <div>
                        <Award className="mx-auto mb-4 text-primary/20" size={32} />
                        <h5 className="font-bold text-gray-900 mb-1">Impact First</h5>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Certified Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
