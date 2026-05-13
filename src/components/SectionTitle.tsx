"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  tag,
  title,
  highlight,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} gap-3 ${className}`}
    >
      {tag && (
        <span className="glass-card rounded-full px-4 py-1.5 text-[10px] font-inter tracking-widest uppercase text-[#F77F00]">
          {tag}
        </span>
      )}

      <h2 className="font-bebas text-[clamp(2.5rem,8vw,5.5rem)] leading-none tracking-wide">
        <span className="text-[#F5F5F5]">{title} </span>
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="font-poppins text-[clamp(0.9rem,2vw,1.1rem)] text-[#EAE2B7]/60 font-light max-w-lg leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="flex items-center gap-2 mt-1">
        <div className="h-0.5 w-12 bg-gradient-to-r from-[#D62828] to-[#F77F00] rounded-full" />
        <div className="h-0.5 w-4 bg-[#FCBF49]/40 rounded-full" />
        <div className="h-0.5 w-2 bg-[#FCBF49]/20 rounded-full" />
      </div>
    </motion.div>
  );
}
