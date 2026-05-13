"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { WA_LINK } from "@/lib/constants";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const burgerY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Pagodin Burguer — Onde o Samba encontra a Brasa"
    >
      {/* Background base */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]" />

      {/* Glow de brasa inferior esquerdo — como fogo no chão */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 30% 100%, rgba(204,51,0,0.22) 0%, rgba(240,165,0,0.08) 50%, transparent 70%)",
        }}
      />

      {/* Grade diagonal sutil — textura de grelha */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #F0A500 0px, #F0A500 1px, transparent 1px, transparent 48px)",
        }}
      />

      {/* Conteúdo */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 pt-24 lg:pt-0 min-h-screen lg:min-h-0 py-20">

        {/* Lado esquerdo — texto + CTAs */}
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col items-start gap-6 flex-1 max-w-xl"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Image
              src="/logo.png"
              alt="Pa'godin Parrilla Burguer"
              width={110}
              height={110}
              className="rounded-full"
              style={{ filter: "drop-shadow(0 0 20px rgba(240,165,0,0.5))" }}
              priority
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-bebas leading-none">
              <span
                className="block text-[clamp(3.5rem,9vw,7.5rem)] text-[#F0E8D0]"
                style={{ textShadow: "0 2px 0 rgba(0,0,0,0.8)" }}
              >
                ONDE O SAMBA
              </span>
              <span
                className="block text-[clamp(3.5rem,9vw,7.5rem)]"
                style={{
                  background: "linear-gradient(135deg, #F0A500 0%, #FCBF49 45%, #E84000 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "none",
                  filter: "drop-shadow(0 0 20px rgba(240,165,0,0.4))",
                }}
              >
                ENCONTRA
              </span>
              <span
                className="block text-[clamp(3.5rem,9vw,7.5rem)] text-[#F0E8D0]"
                style={{ textShadow: "0 2px 0 rgba(0,0,0,0.8)" }}
              >
                A BRASA.
              </span>
            </h1>
          </motion.div>

          {/* Subtítulo mínimo */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="font-inter text-xs text-[#F0E8D0]/45 tracking-[0.22em] uppercase"
          >
            Parrilla a carvão &nbsp;·&nbsp; Cordeiro, Recife
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir agora via WhatsApp"
              className="btn-primary animate-fire-glow text-center"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              🔥 PEDIR AGORA
            </motion.a>
            <motion.a
              href="#cardapio"
              aria-label="Ver cardápio"
              className="btn-outline text-center"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              VER CARDÁPIO
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Lado direito — burguer herói */}
        <motion.div
          style={{ y: burgerY, opacity }}
          className="relative flex-1 flex items-center justify-center lg:justify-end"
        >
          {/* Glow por baixo do burger */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] h-[180px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(240,165,0,0.35) 0%, rgba(204,51,0,0.2) 40%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Burger foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="animate-float-burger relative"
            style={{ maxWidth: 520, width: "100%" }}
          >
            <Image
              src="/burgers/image_2c904c.png"
              alt="Burger artesanal na parrilla — Pagodin Burguer"
              width={520}
              height={480}
              className="w-full h-auto object-contain"
              style={{
                filter:
                  "drop-shadow(0 30px 60px rgba(204,51,0,0.5)) drop-shadow(0 0 40px rgba(240,165,0,0.3))",
              }}
              priority
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.src = "/burgers/image_2c908b.png";
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-0.5 h-8 rounded-full bg-gradient-to-b from-transparent via-[#F0A500] to-transparent" />
          <div className="w-0.5 h-4 rounded-full bg-gradient-to-b from-[#F0A500] to-transparent opacity-50" />
        </motion.div>
      </motion.div>

      {/* Fade bottom para próxima seção */}
      <div className="absolute bottom-0 inset-x-0 h-32 z-10 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}
