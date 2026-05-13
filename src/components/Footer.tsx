"use client";

import { motion } from "framer-motion";

const WA_LINK =
  "https://api.whatsapp.com/message/LOLVWVWB6NLEN1?autoload=1&app_absent=0&utm_source=ig";
const IG_LINK = "https://www.instagram.com/pagodin_burger/";
const IF_LINK =
  "https://www.ifood.com.br/delivery/recife-pe/pagodin-parrilla-burguer-cordeiro/d07953a0-ca1d-4bd3-8367-718313d43156";

const socials = [
  { label: "WhatsApp", href: WA_LINK, abbr: "WA" },
  { label: "Instagram", href: IG_LINK, abbr: "IG" },
  { label: "iFood", href: IF_LINK, abbr: "IF" },
];

const navLinks = [
  { label: "Essência", href: "#essencia" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Localização", href: "#localizacao" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" aria-label="Rodapé Pagodin Burguer">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(166,27,27,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Linha superior */}
      <div
        className="relative z-10 h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(247,127,0,0.4), rgba(214,40,40,0.6), rgba(247,127,0,0.4), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col items-center gap-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bebas"
              style={{
                background: "linear-gradient(135deg, #D62828, #F77F00)",
              }}
            >
              P
            </div>
            <span className="font-bebas text-3xl tracking-widest text-[#F5F5F5]">
              PAGODIN BURGUER
            </span>
          </div>
          <span className="text-xs font-inter text-[#EAE2B7]/40 tracking-widest uppercase">
            Cordeiro · Recife · PE
          </span>
        </motion.div>

        {/* Frase final */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-bebas text-[clamp(1.4rem,4vw,2.5rem)] text-center tracking-wide leading-tight"
          style={{
            background: "linear-gradient(135deg, #EAE2B7 0%, #F77F00 50%, #D62828 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pagode, parrilla e burger.
          <br />
          <span className="text-[#EAE2B7]" style={{ WebkitTextFillColor: "#EAE2B7" }}>
            Tudo no mesmo{" "}
          </span>
          <span
            style={{
              background: "linear-gradient(135deg, #F77F00, #FCBF49)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            compasso.
          </span>
        </motion.p>

        {/* Navegação */}
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          aria-label="Links de navegação do rodapé"
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-poppins text-sm text-[#EAE2B7]/50 hover:text-[#F77F00] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>

        {/* Redes sociais */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex items-center gap-4"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bebas text-[#EAE2B7]/60 hover:text-[#F77F00] transition-colors duration-300"
              style={{ border: "1px solid rgba(247,127,0,0.12)" }}
            >
              {s.abbr}
            </motion.a>
          ))}
        </motion.div>

        {/* Divisor */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent" />

        {/* Copyright */}
        <p className="font-inter text-[11px] text-[#EAE2B7]/25 tracking-wider text-center">
          © {new Date().getFullYear()} Pagodin Burguer · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
