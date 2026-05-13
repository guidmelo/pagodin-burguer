"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const revealVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.18, ease: "easeOut" as const },
  }),
};

const pillars = [
  { icon: "🔥", label: "Parrilla Viva" },
  { icon: "🥩", label: "Carne Premium" },
  { icon: "🎵", label: "Samba & Pagode" },
  { icon: "🌆", label: "Recife Noturno" },
];

const paragraphs = [
  <>
    No coração do{" "}
    <span className="text-[#F0A500] font-medium">Cordeiro</span>, a brasa não apenas
    queima — ela dita o ritmo. O Pagodin Burguer nasceu do encontro entre o estalar da
    lenha na parrilla e a batida perfeita de quem não dispensa um bom samba.
  </>,
  <>
    Não é apenas um hambúrguer. É a{" "}
    <span className="text-[#F0A500] font-medium">arte do churrasco brasileiro</span>{" "}
    levada ao pão, com o aroma defumado da técnica argentina e o tempero que só quem
    domina a roda conhece.
  </>,
  <>
    Aqui, cada mordida é um refrão. Cada burger é um{" "}
    <span className="text-[#CC3300] font-medium">show à parte</span>. Fogo alto, carne
    de verdade e a energia de uma tardizinha inesquecível em Recife.
  </>,
];

export default function EssenceSection() {
  return (
    <section
      id="essencia"
      className="section relative overflow-hidden bg-[#0D0D0D]"
      aria-label="A essência do Pagodin Burguer"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 0% 50%, rgba(204,51,0,0.1) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 100% 80%, rgba(240,165,0,0.06) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,165,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,165,0,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 flex flex-col items-center gap-5"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(240,165,0,0.35) 0%, transparent 65%)",
                  filter: "blur(24px)",
                  transform: "scale(1.4)",
                }}
              />
              <Image
                src="/logo.png"
                alt="Pa'godin Parrilla Burguer"
                width={220}
                height={220}
                className="rounded-full relative z-10"
                style={{ filter: "drop-shadow(0 0 30px rgba(240,165,0,0.4))" }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#F0A500]" />
              <span className="text-[#F0A500] text-lg" aria-hidden="true">✦</span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#F0A500]" />
            </div>
          </motion.div>

          <div className="flex flex-col gap-8 flex-1">
            <motion.span
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={revealVariant}
              className="font-inter text-xs tracking-[0.25em] uppercase text-[#F0A500]"
            >
              Nossa História
            </motion.span>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={revealVariant}
              className="font-bebas text-[clamp(2.8rem,6vw,5rem)] leading-none text-[#F0E8D0]"
            >
              A <span className="text-amber">Essência</span>
            </motion.h2>

            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                custom={i + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={revealVariant}
                className="font-body text-[clamp(0.9rem,1.8vw,1.05rem)] text-[#F0E8D0]/60 font-light leading-[1.9]"
              >
                {p}
              </motion.p>
            ))}

            <motion.hr
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariant}
              className="divider-brasa border-0"
            />

            <motion.div
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariant}
              className="flex flex-wrap gap-6"
            >
              {pillars.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden="true">{item.icon}</span>
                  <span className="font-bebas text-sm tracking-widest text-[#F0E8D0]/50 uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
