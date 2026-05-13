"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WA_LINK, IG_LINK, IF_LINK } from "@/lib/constants";

const navLinks = [
  { label: "Essência", href: "#essencia" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Localização", href: "#localizacao" },
];

const socialLinks = [
  { label: "WhatsApp", href: WA_LINK },
  { label: "Instagram", href: IG_LINK },
  { label: "iFood", href: IF_LINK },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#080808" }}
      aria-label="Rodapé Pagodin Burguer"
    >
      {/* Linha de brasa no topo */}
      <div className="divider-brasa" />

      {/* Glow central */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(204,51,0,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10 py-16">
        <div className="flex flex-col items-center gap-10">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-4"
          >
            <Image
              src="/logo.png"
              alt="Pa'godin Parrilla Burguer"
              width={90}
              height={90}
              className="rounded-full"
              style={{ filter: "drop-shadow(0 0 20px rgba(240,165,0,0.4))" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </motion.div>

          {/* Frase final */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bebas text-[clamp(1.6rem,5vw,3rem)] text-center leading-tight max-w-2xl"
          >
            <span className="text-[#F0E8D0]">Pagode, parrilla e burger.&nbsp;</span>
            <span
              style={{
                background: "linear-gradient(135deg, #F0A500 0%, #FCBF49 50%, #CC3300 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Tudo no mesmo compasso.
            </span>
          </motion.blockquote>

          {/* Links de navegação */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            aria-label="Navegação do rodapé"
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-[#F0E8D0]/40 hover:text-[#F0A500] transition-colors duration-250"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Redes sociais */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-5"
          >
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -2, color: "#F0A500" }}
                className="font-body text-xs text-[#F0E8D0]/35 hover:text-[#F0A500] transition-colors duration-250 tracking-widest uppercase"
              >
                {s.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Divisor */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(240,165,0,0.15)] to-transparent" />

          {/* Copyright */}
          <p className="font-inter text-[11px] text-[#F0E8D0]/20 text-center tracking-wider">
            © {new Date().getFullYear()} Pa&apos;godin Parrilla Burguer · Cordeiro, Recife — PE
          </p>
        </div>
      </div>
    </footer>
  );
}
