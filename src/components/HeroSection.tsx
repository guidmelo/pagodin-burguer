"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — Pagodin Burguer"
    >
      {/* Background com gradiente animado */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Camada de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#1a0a0a] to-[#0B0B0B]" />

        {/* Glow central — brasa */}
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(214,40,40,0.25) 0%, rgba(247,127,0,0.12) 40%, transparent 70%)",
          }}
        />

        {/* Glow lateral esquerdo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 0% 100%, rgba(166,27,27,0.2) 0%, transparent 60%)",
          }}
        />

        {/* Grade diagonal sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #F77F00 0px, #F77F00 1px, transparent 1px, transparent 60px)",
          }}
        />
      </motion.div>

      {/* Partículas de brasa simuladas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#F77F00" : "#FCBF49",
            }}
            animate={{
              y: [0, -80, -160],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-full px-5 py-2 mb-8 inline-flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#F77F00] animate-pulse" />
          <span className="text-xs font-inter text-[#EAE2B7] tracking-widest uppercase">
            Cordeiro · Recife · PE
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-bebas text-[clamp(3.5rem,12vw,9rem)] leading-none tracking-wide mb-4"
          aria-label="Onde o Samba encontra a Brasa"
        >
          <span className="gradient-text text-glow-orange">Onde o Samba</span>
          <br />
          <span className="text-[#F5F5F5] text-glow-red">encontra a</span>
          <br />
          <span
            className="gradient-text text-glow-orange"
            style={{
              background: "linear-gradient(135deg, #D62828 0%, #F77F00 50%, #FCBF49 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Brasa.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-poppins text-[clamp(1rem,3vw,1.3rem)] text-[#EAE2B7]/80 font-light mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Hambúrguer artesanal na parrilla com{" "}
          <span className="text-[#FCBF49] font-medium">alma brasileira.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-sm sm:max-w-none"
        >
          <AnimatedButton
            href="https://api.whatsapp.com/message/LOLVWVWB6NLEN1?autoload=1&app_absent=0&utm_source=ig"
            variant="primary"
            size="lg"
            className="animate-pulse-glow w-full sm:w-auto"
            aria-label="Pedir agora via WhatsApp"
          >
            PEDIR AGORA
          </AnimatedButton>

          <AnimatedButton
            href="#cardapio"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            aria-label="Ver cardápio"
          >
            VER CARDÁPIO
          </AnimatedButton>
        </motion.div>

        {/* Horário */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 text-xs font-inter text-[#EAE2B7]/50 tracking-widest uppercase"
        >
          Qui – Dom &nbsp;·&nbsp; 18h às 23h
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-inter text-[#EAE2B7]/40 tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#F77F00]/60" />
        </motion.div>
      </motion.div>

      {/* Gradiente de transição inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
    </section>
  );
}
