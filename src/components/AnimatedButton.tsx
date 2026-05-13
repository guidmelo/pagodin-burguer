"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "outline";
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
  const cls = `${variant === "primary" ? "btn-primary" : "btn-outline"} ${
    size === "sm" ? "text-sm py-2.5 px-6" : size === "lg" ? "text-base py-4 px-10" : ""
  } ${fullWidth ? "w-full justify-center" : ""} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 } as const,
    whileTap: { scale: 0.97 } as const,
    transition: { type: "spring" as const, stiffness: 380, damping: 22 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={cls}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} aria-label={ariaLabel} className={cls} {...motionProps}>
      {children}
    </motion.button>
  );
}
