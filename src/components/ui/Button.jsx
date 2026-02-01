import { cn } from "../../utils/cn";

export const Button = ({ className, variant = "primary", ...props }) => {
    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-secondary text-primary hover:bg-secondary/90",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-primary hover:bg-primary/10",
    };

    return (
        <button
            className={cn(
                "px-6 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50",
                variants[variant],
                className
            )}
            {...props}
        />
    );
};
