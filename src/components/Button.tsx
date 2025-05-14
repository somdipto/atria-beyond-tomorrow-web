
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full",
        // Variants
        variant === "primary" && "tedx-button bg-ted-red shadow-glow",
        variant === "outline" && "border border-ted-red text-ted-red hover:bg-ted-red/10 hover:shadow-glow",
        variant === "ghost" && "text-white hover:text-ted-red hover:bg-white/5",
        // Sizes
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-2.5",
        size === "lg" && "px-8 py-3 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
