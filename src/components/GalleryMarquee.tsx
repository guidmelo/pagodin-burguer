"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const events = [
  { name: "Tropa do Gorilla Run", emoji: "🦍", color: "#D62828" },
  { name: "Nexus Fight", emoji: "⚡", color: "#F77F00" },
  { name: "Tardizinha do Cordeiro", emoji: "🌅", color: "#FCBF49" },
  { name: "Roda de Samba", emoji: "🎵", color: "#D62828" },
  { name: "Parrilla & Pagode", emoji: "🔥", color: "#F77F00" },
  { name: "Pagodin na Pista", emoji: "🥩", color: "#FCBF49" },
];

const GalleryCard = ({
  name,
  emoji,
  color,
}: {
  name: string;
  emoji: string;
  color: string;
}) => (
  <div
    className="relative flex-shrink-0 w-[260px] md:w-[320px] h-[180px] md:h-[220px] rounded-2xl overflow-hidden mx-3 group cursor-default"
    style={{
      background: `linear-gradient(135deg, #1a0a0a 0%, #0d0505 100%)`,
      border: `1px solid ${color}22`,
    }}
  >
    {/* Glow no hover */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${color}20 0%, transparent 70%)`,
      }}
    />

    {/* Grain overlay */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />

    {/* Conteúdo */}
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
      <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </span>
      <div className="text-center px-4">
        <p
          className="font-bebas text-xl md:text-2xl tracking-widest"
          style={{ color }}
        >
          {name}
        </p>
        <div
          className="h-0.5 w-12 mx-auto mt-2 rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>

    {/* Borda inferior colorida */}
    <div
      className="absolute bottom-0 left-0 right-0 h-0.5 opacity-60"
      style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
    />
  </div>
);

export default function GalleryMarquee() {
  const doubled = [...events, ...events, ...events, ...events];

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Galeria — Na pista com a Pagodin"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0d0505]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(214,40,40,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-14">
          <SectionTitle
            tag="Galeria"
            title="Na Pista com a"
            highlight="Pagodin"
            subtitle="Presença confirmada nos melhores eventos de Recife."
            align="center"
          />
        </div>

        {/* Marquee 1 — esquerda para direita */}
        <div className="marquee-wrapper overflow-hidden">
          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {doubled.map((event, i) => (
              <GalleryCard key={`${event.name}-${i}`} {...event} />
            ))}
          </div>
        </div>

        {/* Marquee 2 — direita para esquerda */}
        <div className="marquee-wrapper overflow-hidden mt-4">
          <div
            className="flex"
            style={{
              width: "max-content",
              animation: "marquee 32s linear infinite reverse",
            }}
          >
            {[...doubled].reverse().map((event, i) => (
              <GalleryCard key={`rev-${event.name}-${i}`} {...event} />
            ))}
          </div>
        </div>
      </div>

      {/* Gradients laterais para fade */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#0d0505] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#0d0505] to-transparent" />
    </section>
  );
}
