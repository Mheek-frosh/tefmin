import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const GlassContainer = ({ className, children, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("glass rounded-3xl p-8", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
};
