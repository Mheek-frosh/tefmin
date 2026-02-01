import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Flag, Rocket, Globe2, Award } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24">
            {/* Hero Header */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <span className="text-primary font-black tracking-widest uppercase text-xs mb-6 inline-block bg-primary/5 px-4 py-2 rounded-full">
                        Founded 2024
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 leading-[0.9] tracking-tighter">
                        Pioneering the <br />
                        <span className="text-primary italic">Industrial</span> Renaissance.
                    </h1>
                    <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl">
                        The Future Made in Nigeria Project LTD (TEFMIN) is more than an organization; it’s a movement to restore national pride through economic self-sufficiency and world-class manufacturing standards.
                    </p>
                </motion.div>
            </section>

            {/* Visual Section */}
            <section className="mb-32 relative">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl relative">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                            alt="TEFMIN Mission"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/20" />
                    </div>
                </div>

                {/* Floating Mission Card */}
                <div className="absolute -bottom-16 right-12 md:right-32 glass p-10 md:p-16 rounded-[3rem] shadow-2xl max-w-xl border-white/50 bg-white/90 backdrop-blur-2xl">
                    <h3 className="text-3xl font-black text-gray-900 mb-6 italic">"Our mission is to ensure every Nigerian knows that the best in the world can be made right here at home."</h3>
                    <div className="flex items-center gap-4">
                        <div className="h-0.5 w-12 bg-secondary" />
                        <p className="text-sm font-bold uppercase tracking-widest text-primary">Executive Director</p>
                    </div>
                </div>
            </section>

            {/* History & Goals */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">The TEFMIN <br />Philosophy</h2>
                        <div className="space-y-12">
                            <div className="flex gap-8">
                                <div className="shrink-0 h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-secondary shadow-lg">
                                    <Target size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-4">Strategic Inclusion</h4>
                                    <p className="text-gray-600 leading-relaxed text-lg">We don’t believe in trickle-down economics. We believe in building from the ground up, ensuring local artisans and small-scale manufacturers are at the heart of our industrial parks.</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="shrink-0 h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-secondary shadow-lg">
                                    <Globe2 size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-4">Global Standards</h4>
                                    <p className="text-gray-600 leading-relaxed text-lg">Every project mentored or funded by TEFMIN must meet ISO standards. We are proving that 'Made in Nigeria' is synonymous with 'Global Excellence'.</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="shrink-0 h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center text-primary shadow-lg">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-4">Empowerment Cycles</h4>
                                    <p className="text-gray-600 leading-relaxed text-lg">Sustainability is our core. Every naira invested creates a cycle of empowerment that supports families, educates children, and builds communities.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-12 italic">Our Strategic Targets</h3>
                            <div className="space-y-12">
                                <div className="border-b border-white/10 pb-8">
                                    <h5 className="text-6xl font-black text-secondary mb-2">1M+</h5>
                                    <p className="text-sm uppercase tracking-widest text-white/50 font-bold">Livelihoods Impacted by 2026</p>
                                </div>
                                <div className="border-b border-white/10 pb-8">
                                    <h5 className="text-6xl font-black text-secondary mb-2">$500M</h5>
                                    <p className="text-sm uppercase tracking-widest text-white/50 font-bold">In Local Manufacturing Value</p>
                                </div>
                                <div>
                                    <h5 className="text-6xl font-black text-secondary mb-2">774</h5>
                                    <p className="text-sm uppercase tracking-widest text-white/50 font-bold">Local Governments Covered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="bg-gray-50 py-32 mt-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">Become part of the <br /><span className="text-primary italic">TEFMIN</span> Legacy.</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">Whether you are an investor, artisan, or dreamer, there is a place for you in the Future Made in Nigeria Project.</p>
                    <Button className="px-16 py-6 text-xl shadow-2xl shadow-primary/30">Connect with Us</Button>
                </div>
            </section>
        </div>
    );
}
