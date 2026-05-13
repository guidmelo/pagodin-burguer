"use client";

import { motion } from "framer-motion";
import BurgerImage from "./BurgerImage";
import { WA_LINK } from "@/lib/constants";

interface BurgerCardProps {
  name: string;
  tagline: string;
  description: string;
  ingredients: string[];
  imageSrc: string;
  emoji?: string;
  index: number;
  badge?: string;
}

export default function BurgerCard({
  name,
  tagline,
  description,
  ingredients,
  imageSrc,
  emoji = "🍔",
  index,
  badge,
}: BurgerCardProps) {
  const ingredientList = ingredients.join(" · ");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(240,165,0,0.15), 0 0 0 1px rgba(240,165,0,0.2)" }}
      className="menu-card rounded-2xl flex flex-col group overflow-hidden"
      aria-label={`Burger ${name}`}
    >
      {badge && (
        <div
          className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded text-[10px] font-bebas tracking-widest"
          style={{
            background: "rgba(240,165,0,0.15)",
            border: "1px solid rgba(240,165,0,0.4)",
            color: "#F0A500",
          }}
        >
          {badge}
        </div>
      )}

      <div
        className="relative overflow-hidden"
        style={{
          height: 240,
          background: "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(204,51,0,0.18) 0%, #111111 60%)",
        }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <BurgerImage src={imageSrc} alt={`Foto do ${name}`} emoji={emoji} />
        </motion.div>

        <div
          className="absolute inset-x-0 bottom-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(240,165,0,0.2) 0%, transparent 100%)" }}
        />
      </div>

      <div
        className="flex flex-col flex-1 p-5 gap-4"
        style={{
          background: "linear-gradient(180deg, #1C1C1C 0%, #171717 100%)",
          borderTop: "1px solid rgba(240,165,0,0.1)",
        }}
      >
        <div>
          <h3 className="font-bebas text-[clamp(1.7rem,4vw,2.3rem)] leading-none tracking-wide text-[#F0E8D0] group-hover:text-[#F0A500] transition-colors duration-300">
            {name}
          </h3>
          <p className="font-body text-sm italic text-[#F0A500]/70 mt-1 font-light">
            {tagline}
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-[rgba(240,165,0,0.3)] to-transparent" />

        <p className="font-body text-xs text-[#F0E8D0]/45 leading-relaxed font-light">
          {ingredientList}
        </p>

        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pedir ${name} via WhatsApp`}
          className="btn-primary mt-auto justify-center text-sm py-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          PEDIR VIA WHATSAPP
        </motion.a>
      </div>
    </motion.article>
  );
}
