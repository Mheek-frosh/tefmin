import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";
import bgLogo from "../assets/bg.png";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "About Us",
        href: "/about",
        dropdown: [
            { name: "Our Company", href: "/about" },
            { name: "Empowerment", href: "/empowerment" },
            { name: "Career", href: "/career" },
        ]
    },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });
    const location = useLocation();
    const dropdownRef = useRef(null);

    // Apply dark mode class to html element
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

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

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
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
                    {/* Use bg.png for white/light backgrounds, logo.png for dark contexts needing visibility */}
                    <img
                        src={bgLogo}
                        alt="TEFMIN Logo"
                        className={`h-10 w-auto transition-all duration-500 ${!showScrolledStyle || isDarkMode ? "brightness-0 invert" : ""}`}
                    />
                    <div className="flex flex-col">
                        <span className={`font-black text-xl tracking-tighter transition-colors duration-500 leading-none ${showScrolledStyle ? "text-primary dark:text-white" : "text-white"}`}>
                            TEFMIN
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 mt-1 whitespace-nowrap leading-none ${showScrolledStyle ? "text-secondary" : "text-secondary"}`}>
                            Empowering People, Building the Future
                        </span>
                    </div>
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
                                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-500 hover:text-secondary flex items-center gap-1 ${showScrolledStyle ? "text-gray-700 dark:text-gray-200" : "text-white"
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
                                            className="absolute top-10 left-0 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-4 mt-2"
                                        >
                                            <div className="flex flex-col gap-3">
                                                {link.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.href}
                                                        onClick={(e) => handleAnchorClick(e, sub.href)}
                                                        className="text-xs font-bold text-gray-400 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors uppercase tracking-widest px-2 py-1"
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

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2.5 rounded-full transition-all duration-300 ${showScrolledStyle
                            ? "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                            : "hover:bg-white/10 text-white"
                            }`}
                        aria-label="Toggle dark mode"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={isDarkMode ? 'dark' : 'light'}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>

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
                <div className="md:hidden flex items-center gap-1">
                    {/* Mobile Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className={`p-1.5 rounded-full transition-all ${showScrolledStyle
                            ? "text-primary dark:text-white"
                            : "text-white"
                            }`}
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        className="p-1.5"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={20} className={showScrolledStyle ? "text-primary dark:text-white" : "text-white"} />
                        ) : (
                            <Menu size={20} className={showScrolledStyle ? "text-primary dark:text-white" : "text-white"} />
                        )}
                    </button>
                </div>
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
                                        className="text-2xl font-black text-gray-800 dark:text-white hover:text-primary dark:hover:text-secondary transition-colors tracking-tighter"
                                        onClick={(e) => {
                                            handleAnchorClick(e, link.href);
                                            if (!link.dropdown) setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="mt-4 flex flex-col gap-4 pl-4 border-l-2 border-primary/20 dark:border-secondary/20">
                                            {link.dropdown.map(sub => (
                                                <Link
                                                    key={sub.name}
                                                    to={sub.href}
                                                    className="text-sm font-bold text-gray-400 dark:text-gray-300 uppercase tracking-widest"
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

