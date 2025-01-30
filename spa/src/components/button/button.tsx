import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-full transition-all duration-300",
        size === "sm" ? "px-4 py-2 text-sm" : "",
        size === "md" ? "px-6 py-3 text-base" : "",
        size === "lg" ? "px-8 py-4 text-lg" : "",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

