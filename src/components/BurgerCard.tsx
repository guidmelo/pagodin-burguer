"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { WA_LINK } from "@/lib/constants";

interface BurgerCardProps {
  name: string;
  ingredients: string[];
  imageSrc: string;
  emoji?: string;
  index: number;
  badge?: string;
  isRight: boolean;
}

export default function BurgerCard({
  name,
  ingredients,
  imageSrc,
  emoji = "🍔",
  index,
  badge,
  isRight,
}: BurgerCardProps) {
  const [imgError, setImgError] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`relative flex flex-col overflow-hidden ${isRight ? "md:flex-row-reverse" : "md:flex-row"}`}
      style={{ minHeight: "clamp(360px, 55vh, 580px)" }}
      aria-label={`Burger ${name}`}
    >
      {/* Image side — always first in DOM → top on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative flex-1"
        style={{ minHeight: 260 }}
      >
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center text-8xl select-none" aria-hidden="true">
            {emoji}
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-contain p-8 md:p-14"
            style={{
              filter:
                "drop-shadow(0 16px 48px rgba(204,51,0,0.6)) drop-shadow(0 0 28px rgba(240,165,0,0.3))",
            }}
          />
        )}

        {/* Vignette — fades white photo background into page background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 38%, rgba(8,8,8,0.75) 72%, #080808 92%)",
          }}
        />
      </motion.div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
        className="relative flex flex-1 flex-col justify-center overflow-hidden px-8 py-12 md:px-14 md:py-0"
      >
        {/* Number watermark */}
        <span
          aria-hidden="true"
          className="absolute font-bebas select-none pointer-events-none"
          style={{
            fontSize: "clamp(8rem, 22vw, 20rem)",
            opacity: 0.03,
            color: "#F0A500",
            lineHeight: 1,
            bottom: "-0.08em",
            right: "-0.05em",
          }}
        >
          {num}
        </span>

        <div className="relative z-10 flex flex-col gap-5">
          {badge && (
            <span
              className="font-inter text-[10px] tracking-[0.22em] uppercase px-3 py-1 self-start"
              style={{
                border: "1px solid rgba(240,165,0,0.35)",
                color: "#F0A500",
              }}
            >
              {badge}
            </span>
          )}

          <h3
            className="font-bebas text-[#F0E8D0] leading-none"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            {name}
          </h3>

          <div
            className="h-px"
            style={{
              width: 48,
              background: "linear-gradient(90deg, #F0A500, rgba(240,165,0,0.15))",
            }}
          />

          <p
            className="font-inter text-[#F0E8D0]/38 uppercase leading-relaxed"
            style={{ fontSize: "0.62rem", letterSpacing: "0.2em" }}
          >
            {ingredients.join("  ·  ")}
          </p>

          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start mt-2"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            aria-label={`Pedir ${name} via WhatsApp`}
          >
            PEDIR AGORA
          </motion.a>
        </div>
      </motion.div>
    </article>
  );
}
