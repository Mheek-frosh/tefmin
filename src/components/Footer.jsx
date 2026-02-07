import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/Button";
import logO from "../assets/logow.png";

export const Footer = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Empowerment", href: "/empowerment" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer id="main-footer" className="bg-primary text-white pt-16 md:pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <img src={logO} alt="TEFMIN Logo" className="h-12 w-auto" />
                            <span className="font-bold text-2xl tracking-tighter">TEFMIN</span>
                        </div>
                        <p className="text-white/70 mb-8 leading-relaxed">
                            Empowering people, building the future. Forging a brighter tomorrow, today.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all group"
                                >
                                    <Icon size={18} className="group-hover:text-primary transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-8">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start text-white/70">
                                <MapPin className="text-secondary shrink-0" size={20} />
                                <span>Head Office: Lekki Phase 1, Lagos, Nigeria</span>
                            </li>
                            <li className="flex gap-4 items-start text-white/70">
                                <Phone className="text-secondary shrink-0" size={20} />
                                <span>+234 (0) 800 TEFMIN-PRO</span>
                            </li>
                            <li className="flex gap-4 items-start text-white/70">
                                <Mail className="text-secondary shrink-0" size={20} />
                                <span>info@tefmin.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-white/70 hover:text-secondary transition-colors underline-offset-4 hover:underline">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-bold mb-8">Newsletter</h4>
                        <p className="text-white/70 mb-6">Stay updated with our latest industrial projects and insights.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors"
                            />
                            <Button className="mt-4 w-full" variant="secondary">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 text-center text-white/40 text-sm">
                    <p>© {new Date().getFullYear()} The Future Made in Nigeria Project LTD. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
