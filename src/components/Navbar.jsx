import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "About Us",
        href: "/about",
        dropdown: [
            { name: "Our Company", href: "/about" },
            { name: "Empowerment", href: "/empowerment" },
        ]
    },
    { name: "Projects", href: "/projects" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(false);
    }, [location]);

    // Handle smooth scroll for anchor links
    const handleAnchorClick = (e, href) => {
        if (href.startsWith("/#")) {
            if (location.pathname === "/") {
                e.preventDefault();
                const id = href.replace("/#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    };

    const isAlwaysScrolled = location.pathname !== "/";
    const showScrolledStyle = isScrolled || isAlwaysScrolled;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${showScrolledStyle ? "mt-4" : "mt-0"
                }`}
        >
            <div
                className={`max-w-7xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-8 py-3 ${showScrolledStyle ? "glass shadow-2xl border border-white/20" : "bg-transparent"
                    }`}
            >
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="TEFMIN Logo" className="h-10 w-auto" />
                    <span className={`font-black text-xl tracking-tighter transition-colors duration-500 ${showScrolledStyle ? "text-primary" : "text-white"}`}>
                        TEFMIN
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group h-10 flex items-center"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(true)}
                            onMouseLeave={() => link.dropdown && setActiveDropdown(false)}
                        >
                            <Link
                                to={link.href}
                                onClick={(e) => handleAnchorClick(e, link.href)}
                                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-500 hover:text-secondary flex items-center gap-1 ${showScrolledStyle ? "text-gray-700" : "text-white"
                                    }`}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown ? 'rotate-180' : ''}`} />}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-10 left-0 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 mt-2"
                                        >
                                            <div className="flex flex-col gap-3">
                                                {link.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.href}
                                                        onClick={(e) => handleAnchorClick(e, sub.href)}
                                                        className="text-xs font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest px-2 py-1"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                    <Link
                        to="/contact"
                        className={`py-2.5 px-8 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 ${showScrolledStyle
                            ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                            : "bg-secondary text-primary hover:bg-secondary/90 shadow-lg shadow-secondary/20"
                            }`}
                    >
                        contact us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={showScrolledStyle ? "text-primary" : "text-white"} />
                    ) : (
                        <Menu className={showScrolledStyle ? "text-primary" : "text-white"} />
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
                        className="absolute top-24 left-6 right-6 glass rounded-[2.5rem] p-10 md:hidden shadow-3xl"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-2xl font-black text-gray-800 hover:text-primary transition-colors tracking-tighter"
                                        onClick={(e) => {
                                            handleAnchorClick(e, link.href);
                                            if (!link.dropdown) setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="mt-4 flex flex-col gap-4 pl-4 border-l-2 border-primary/20">
                                            {link.dropdown.map(sub => (
                                                <Link
                                                    key={sub.name}
                                                    to={sub.href}
                                                    className="text-sm font-bold text-gray-400 uppercase tracking-widest"
                                                    onClick={(e) => {
                                                        handleAnchorClick(e, sub.href);
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/contact"
                                className="w-full py-4 rounded-full bg-primary text-white text-center text-lg font-black shadow-xl"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
