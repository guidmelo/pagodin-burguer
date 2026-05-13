"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "./SectionTitle";

const pillars = [
  { icon: "🔥", label: "Parrilla Viva" },
  { icon: "🎵", label: "Samba & Pagode" },
  { icon: "🥩", label: "Carne Premium" },
  { icon: "🌆", label: "Recife Noturno" },
];

export default function EssenceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const paragraphs = [
    "No coração do Cordeiro, a brasa não apenas queima; ela dita o ritmo. O Pagodin Burguer nasceu do encontro entre o estalar da lenha na parrilla e a batida perfeita do coração de quem não dispensa um bom samba.",
    "Não é apenas um hambúrguer. É a arte do churrasco brasileiro levada ao pão, com o aroma defumado da técnica argentina e o tempero que só quem domina a roda conhece.",
    "Aqui, cada mordida é um refrão e cada burger é um show à parte. Saímos da bolha para entregar o que o brasileiro mais ama: carne de verdade, fogo alto e aquela energia de um final de tarde inesquecível.",
  ];

  return (
    <section
      ref={ref}
      id="essencia"
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="A Essência do Pagodin Burguer"
    >
      {/* Background com textura */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f0a0a]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(166,27,27,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(247,127,0,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Textura de carvão */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #EAE2B7 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #EAE2B7 0px, transparent 1px, transparent 40px)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle
          tag="Nossa História"
          title="A"
          highlight="Essência"
          subtitle="Do coração do Cordeiro para sua mesa."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div className="flex flex-col gap-6">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
                className="font-poppins text-[clamp(0.9rem,2vw,1.05rem)] text-[#EAE2B7]/70 leading-relaxed font-light"
              >
                {i === 0 && (
                  <>
                    <span className="text-[#FCBF49] font-medium">
                      No coração do Cordeiro
                    </span>
                    , a brasa não apenas queima; ela dita o ritmo. O Pagodin Burguer
                    nasceu do encontro entre o estalar da lenha na parrilla e a batida
                    perfeita do coração de quem não dispensa um bom samba.
                  </>
                )}
                {i === 1 && (
                  <>
                    Não é apenas um hambúrguer. É a{" "}
                    <span className="text-[#F77F00] font-medium">
                      arte do churrasco brasileiro
                    </span>{" "}
                    levada ao pão, com o aroma defumado da técnica argentina e o tempero
                    que só quem domina a roda conhece.
                  </>
                )}
                {i === 2 && (
                  <>
                    Aqui, cada mordida é um refrão e cada burger é um{" "}
                    <span className="text-[#D62828] font-medium">show à parte</span>.
                    Saímos da bolha para entregar o que o brasileiro mais ama: carne de
                    verdade, fogo alto e aquela energia de um final de tarde inesquecível.
                  </>
                )}
              </motion.p>
            ))}
          </div>

          {/* Pilares visuais */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 cursor-default"
                style={{
                  border: "1px solid rgba(247,127,0,0.12)",
                }}
              >
                <span className="text-4xl" role="img" aria-label={pillar.label}>
                  {pillar.icon}
                </span>
                <span className="font-bebas text-lg tracking-widest text-[#EAE2B7]">
                  {pillar.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Linha decorativa central */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#F77F00]/40 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
