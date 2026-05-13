"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  "aria-label"?: string;
  fullWidth?: boolean;
}

export default function AnimatedButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  "aria-label": ariaLabel,
  fullWidth = false,
}: AnimatedButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#D62828] to-[#F77F00] text-white font-semibold rounded-full border-0 glow-red",
    outline:
      "glass-card text-[#EAE2B7] font-semibold rounded-full border border-[rgba(255,255,255,0.15)]",
    ghost:
      "bg-transparent text-[#F77F00] font-semibold rounded-full border border-[#F77F00]/30",
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-bebas tracking-widest uppercase
    transition-all duration-300 cursor-pointer
    btn-ripple select-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  const motionProps = {
    whileHover: { scale: 1.04, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={baseClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      aria-label={ariaLabel}
      className={baseClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
