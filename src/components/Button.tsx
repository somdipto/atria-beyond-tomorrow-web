
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
        "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        // Variants
        variant === "primary" && "bg-ted-red hover:bg-ted-red/90 text-white shadow-[0_0_15px_rgba(230,43,30,0.5)]",
        variant === "outline" && "border border-ted-red text-ted-red hover:bg-ted-red/10 hover:shadow-[0_0_15px_rgba(230,43,30,0.3)]",
        variant === "ghost" && "text-white hover:text-ted-red",
        // Sizes
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2",
        size === "lg" && "px-6 py-3 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
