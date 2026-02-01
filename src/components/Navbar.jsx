import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Empowerment", href: "#empowerment" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${isScrolled ? "mt-4" : "mt-0"
                }`}
        >
            <div
                className={`max-w-7xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-8 py-3 ${isScrolled ? "glass shadow-2xl" : "bg-transparent"
                    }`}
            >
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="TEFMIN Logo" className="h-10 w-auto" />
                    <span className={`font-bold text-xl tracking-tight ${isScrolled ? "text-primary" : "text-white"}`}>
                        TEFMIN
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled ? "text-gray-700" : "text-white"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant={isScrolled ? "primary" : "secondary"} className="py-2 px-6">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-primary" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-primary" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-6 right-6 glass rounded-3xl p-8 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button onClick={() => setIsMobileMenuOpen(false)}>Get Started</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
