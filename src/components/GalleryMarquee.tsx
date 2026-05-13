"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Tropa dos Gorillas",
    logo: "/events/gorillas.png",
    emoji: "🦍",
    color: "#F0A500",
    desc: "Corrida de rua",
  },
  {
    name: "Nexus Fight",
    logo: "/events/nexus.png",
    emoji: "⚡",
    color: "#00CC44",
    desc: "Artes marciais",
  },
];

const marqueeItems = [
  { text: "PARRILLA NA BRASA", icon: "🔥" },
  { text: "SAMBA & PAGODE", icon: "🎵" },
  { text: "CORDEIRO RECIFE", icon: "📍" },
  { text: "ARTESANAL", icon: "✦" },
  { text: "CARNE PREMIUM", icon: "🥩" },
  { text: "TARDIZINHA", icon: "🌅" },
  { text: "FOGO ALTO", icon: "💥" },
  { text: "PAGODIN BURGUER", icon: "✦" },
];

// Quadruplicado: dois conjuntos visíveis + dois para o loop contínuo sem gap
const marqueeLoop = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

function MarqueeTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex flex-shrink-0 animate-marquee-ltr"
      style={{ width: "max-content" }}
      aria-hidden={ariaHidden || undefined}
    >
      {marqueeLoop.map((item, i) => (
        <span
          key={i}
          className="font-bebas text-sm tracking-widest text-[#0A0A0A] px-6 flex items-center gap-3 whitespace-nowrap"
        >
          <span aria-hidden="true">{item.icon}</span>
          {item.text}
        </span>
      ))}
    </div>
  );
}

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-5 p-8 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "linear-gradient(135deg, #1C1C1C 0%, #141414 100%)",
        border: `1px solid ${partner.color}22`,
        minWidth: 240,
      }}
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <Image
          src={partner.logo}
          alt={`Logo ${partner.name}`}
          width={96}
          height={96}
          className="object-contain w-full h-full"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.style.display = "none";
            const fallback = img.nextSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div className="hidden w-full h-full items-center justify-center text-5xl" aria-hidden="true">
          {partner.emoji}
        </div>
      </div>

      <div className="text-center">
        <p className="font-bebas text-xl tracking-widest" style={{ color: partner.color }}>
          {partner.name}
        </p>
        <p className="font-inter text-[11px] text-[#F0E8D0]/40 mt-0.5 tracking-widest uppercase">
          {partner.desc}
        </p>
      </div>

      <div
        className="px-3 py-1 rounded text-[10px] font-inter tracking-widest uppercase"
        style={{
          background: `${partner.color}18`,
          border: `1px solid ${partner.color}35`,
          color: partner.color,
        }}
      >
        Parceiro Oficial
      </div>
    </motion.div>
  );
}

export default function GalleryMarquee() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0D0D0D", padding: "5rem 0 0" }}
      aria-label="Parceiros e presença na cena de Recife"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(204,51,0,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-3 mb-14"
        >
          <span className="font-inter text-xs tracking-[0.25em] uppercase text-[#F0A500]">
            Na Roda com a Pagodin
          </span>
          <h2 className="font-bebas text-[clamp(2.5rem,7vw,5rem)] leading-none text-[#F0E8D0]">
            PARCEIROS <span className="text-amber">DA CENA</span>
          </h2>
          <p className="font-body text-sm text-[#F0E8D0]/40 font-light max-w-md">
            Presença confirmada nos melhores eventos de Recife.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center sm:items-stretch"
        >
          {partners.map((p) => (
            <PartnerCard key={p.name} partner={p} />
          ))}
        </motion.div>
      </div>

      <div className="mt-16 overflow-hidden bg-[#F0A500] py-3">
        <div className="marquee-wrap flex" aria-label="Palavras-chave da marca">
          <MarqueeTrack />
          <MarqueeTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
