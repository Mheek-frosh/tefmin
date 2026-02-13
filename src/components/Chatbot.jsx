import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

const quickReplies = [
    "What services does TEFMIN offer?",
    "How can I contact TEFMIN?",
    "Tell me about your projects",
    "What is TEFMIN's mission?",
];

const botResponses = {
    default: "Thank you for your message! Our team will get back to you soon. In the meantime, feel free to explore our website or use the quick options below.",
    services: "TEFMIN offers comprehensive services including Business Development & Consulting, Human Capital Development, Corporate Social Responsibility Advisory (CSR), Institutional Strengthening, Industrial Growth Solutions, and Innovation & Technology Advisory. Visit our Services page to learn more!",
    contact: "You can reach us through our Contact page at /contact. We'd love to hear from you! Our team typically responds within 24 hours.",
    projects: "TEFMIN is involved in transformative projects across Nigeria including the Lagos Tech Hub, Sustainable Energy Initiative, Textile Excellence Center, and many more. Check out our Projects page for the full portfolio!",
    mission: "TEFMIN's mission is to build a self-reliant Nigerian economy by fostering local manufacturing, industrial excellence, and human capital development. We believe Nigeria has everything it needs to thrive!",
    greeting: "Hello! 👋 Welcome to TEFMIN. I'm here to help you learn more about our organization. How can I assist you today?",
};

const getResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("what do you do")) {
        return botResponses.services;
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
        return botResponses.contact;
    }
    if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
        return botResponses.projects;
    }
    if (lowerMessage.includes("mission") || lowerMessage.includes("about") || lowerMessage.includes("who") || lowerMessage.includes("vision")) {
        return botResponses.mission;
    }
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
        return botResponses.greeting;
    }
    return botResponses.default;
};

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: "bot", text: "Hello! 👋 Welcome to TEFMIN. I'm your virtual assistant. How can I help you today?" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (text = inputValue) => {
        if (!text.trim()) return;

        // Add user message
        const userMessage = { id: Date.now(), type: "user", text: text.trim() };
        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot response delay
        setTimeout(() => {
            const botMessage = { id: Date.now() + 1, type: "bot", text: getResponse(text) };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const handleQuickReply = (reply) => {
        handleSend(reply);
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-colors ${isOpen
                    ? "bg-gray-800 dark:bg-gray-700"
                    : "bg-primary hover:bg-primary/90"
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={28} className="text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            className="relative"
                        >
                            <MessageCircle size={28} className="text-white" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed bottom-28 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">TEFMIN Assistant</h3>
                                    <p className="text-white/70 text-sm flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                                        Online
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-end gap-2 ${message.type === "user" ? "justify-end" : ""}`}
                                >
                                    {message.type === "bot" && (
                                        <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                                            <Sparkles size={16} />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${message.type === "user"
                                            ? "bg-primary text-white rounded-br-lg"
                                            : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-lg shadow-sm"
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                    {message.type === "user" && (
                                        <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0">
                                            <User size={16} />
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex items-end gap-2">
                                    <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                                        <Sparkles size={16} />
                                    </div>
                                    <div className="bg-white dark:bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-lg shadow-sm">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900">
                            <div className="flex flex-wrap gap-2">
                                {quickReplies.map((reply) => (
                                    <button
                                        key={reply}
                                        onClick={() => handleQuickReply(reply)}
                                        className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary/10 dark:hover:bg-secondary/10 hover:text-primary dark:hover:text-secondary transition-colors"
                                    >
                                        {reply}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!inputValue.trim()}
                                    className="w-12 h-12 rounded-xl bg-primary hover:bg-primary/90 disabled:bg-gray-200 dark:disabled:bg-gray-700 flex items-center justify-center text-white disabled:text-gray-400 transition-colors"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
