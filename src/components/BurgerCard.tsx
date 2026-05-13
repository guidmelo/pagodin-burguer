"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import BurgerImage from "./BurgerImage";

const WA_LINK =
  "https://api.whatsapp.com/message/LOLVWVWB6NLEN1?autoload=1&app_absent=0&utm_source=ig";

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
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="relative flex flex-col rounded-3xl overflow-hidden glass-card group cursor-default"
      style={{
        border: "1px solid rgba(247,127,0,0.12)",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
      }}
      aria-label={`Burger ${name}`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-20 glass-card rounded-full px-3 py-1 text-[10px] font-bebas tracking-widest text-[#FCBF49] border border-[#FCBF49]/30">
          {badge}
        </div>
      )}

      {/* Imagem do burger */}
      <div className="relative h-52 md:h-60 overflow-hidden bg-gradient-to-b from-[#1a0a0a] to-[#0B0B0B]">
        {/* Glow por trás do burger */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(214,40,40,0.3) 0%, rgba(247,127,0,0.15) 50%, transparent 70%)",
          }}
        />

        <motion.div
          className="absolute inset-0"
          whileHover={{ y: -8, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <BurgerImage src={imageSrc} alt={`Foto do ${name}`} emoji={emoji} />
        </motion.div>

        {/* Glow gradiente superior */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111111] to-transparent z-10" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Nome */}
        <div>
          <h3 className="font-bebas text-[clamp(1.6rem,4vw,2.2rem)] leading-none tracking-wide text-[#F5F5F5] group-hover:text-[#FCBF49] transition-colors duration-300">
            {name}
          </h3>
          <p className="font-poppins text-sm text-[#F77F00] font-medium mt-1 italic">
            {tagline}
          </p>
        </div>

        {/* Descrição curta */}
        <p className="font-poppins text-xs text-[#EAE2B7]/60 leading-relaxed font-light">
          {description}
        </p>

        {/* Ingredientes */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-inter text-[#EAE2B7]/40 tracking-widest uppercase">
            Ingredientes
          </span>
          <div className="flex flex-wrap gap-1.5">
            {ingredients.map((ing) => (
              <span
                key={ing}
                className="text-[10px] font-inter px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(247,127,0,0.1)",
                  border: "1px solid rgba(247,127,0,0.2)",
                  color: "#EAE2B7",
                }}
              >
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <AnimatedButton
            href={WA_LINK}
            variant="primary"
            size="sm"
            fullWidth
            className="text-sm"
            aria-label={`Pedir ${name} via WhatsApp`}
          >
            PEDIR VIA WHATSAPP
          </AnimatedButton>
        </div>
      </div>

      {/* Glow inferior hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, #D62828, #F77F00, #FCBF49, #F77F00, #D62828)",
        }}
      />
    </motion.article>
  );
}
