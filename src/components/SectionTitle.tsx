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
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} gap-3 ${className}`}
    >
      {tag && (
        <span className="font-inter text-xs tracking-[0.25em] uppercase text-[#F0A500]">
          {tag}
        </span>
      )}
      <h2 className="font-bebas text-[clamp(2.5rem,7vw,5rem)] leading-none text-[#F0E8D0]">
        {title}{" "}
        {highlight && (
          <span className="text-amber">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="font-body text-[clamp(0.9rem,2vw,1.05rem)] text-[#F0E8D0]/50 font-light max-w-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="divider-brasa w-16 mt-1" style={{ height: 2 }} />
    </motion.div>
  );
}
