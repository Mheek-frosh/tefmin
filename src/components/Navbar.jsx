import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";
import logO from "../assets/africa.png";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "About Us",
        href: "/about",
        dropdown: [
            { name: "Meet the Team", href: "/team" },
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
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={logO}
                        alt="TEFMIN Logo"
                        className="h-12 w-auto transition-all duration-500"
                    />
                    <div className="flex flex-col">
                        <span className={`font-black text-xl tracking-tighter transition-colors duration-500 leading-none ${showScrolledStyle ? "text-[#1a5f3f] dark:text-white" : "text-white"}`}>
                            TEFMIN
                        </span>
                        <span className="text-[9px] font-medium text-secondary mt-1.5 whitespace-nowrap leading-none tracking-wide">
                            The Future Made in Nigeria Ltd
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



                    <a
                        href="https://drive.google.com/file/d/1L-jaI6WYqQYmH6k2StsP-EFoUvf1_5Il/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`py-2.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-secondary ${showScrolledStyle ? "text-gray-700 dark:text-gray-200" : "text-white"
                            }`}
                    >
                        Brochure
                    </a>

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

            {/* RC Number - Positioned under the bar on the right */}
            <div className="max-w-7xl mx-auto px-12 relative flex justify-end">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] mt-2 transition-colors duration-500 ${showScrolledStyle ? "text-gray-400 dark:text-gray-500" : "text-white/60"}`}>
                    RC 929882
                </span>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute inset-y-0 right-0 w-[85%] bg-white dark:bg-gray-900 shadow-2xl flex flex-col p-8 pt-24"
                        >
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-8 right-8 p-3 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex flex-col gap-10 overflow-y-auto">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={link.href}
                                            className="text-4xl font-black text-gray-900 dark:text-white hover:text-primary transition-colors tracking-tighter"
                                            onClick={(e) => {
                                                handleAnchorClick(e, link.href);
                                                if (!link.dropdown) setIsMobileMenuOpen(false);
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.dropdown && (
                                            <div className="mt-6 flex flex-col gap-5 pl-6 border-l-4 border-primary/10">
                                                {link.dropdown.map(sub => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.href}
                                                        className="text-lg font-bold text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-secondary uppercase tracking-[0.2em]"
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
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto flex flex-col gap-4">
                                <a
                                    href="https://drive.google.com/file/d/1L-jaI6WYqQYmH6k2StsP-EFoUvf1_5Il/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-5 rounded-[2rem] border-2 border-primary/20 text-primary dark:text-white dark:border-white/20 text-center text-lg font-black block uppercase tracking-widest"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Brochure
                                </a>
                                <Link
                                    to="/contact"
                                    className="w-full py-6 rounded-[2rem] bg-primary text-white text-center text-xl font-black shadow-xl shadow-primary/20 block uppercase tracking-widest"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                                <div className="mt-4 flex justify-between items-center px-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Toggle Theme</span>
                                    <button
                                        onClick={toggleDarkMode}
                                        className="p-3 rounded-xl bg-white dark:bg-gray-700 text-primary dark:text-secondary shadow-sm"
                                    >
                                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

