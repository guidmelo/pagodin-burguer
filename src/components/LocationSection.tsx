"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { MAPS_LINK } from "@/lib/constants";

const schedule = [
  { day: "Quinta", open: true },
  { day: "Sexta", open: true },
  { day: "Sábado", open: true },
  { day: "Domingo", open: true },
];

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      className="section relative overflow-hidden"
      style={{ background: "#0A0A0A" }}
      aria-label="Localização do Pagodin Burguer"
    >
      {/* Glow de canto */}
      <div
        className="absolute bottom-0 right-0 w-[40%] h-[60%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(240,165,0,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Label + Título */}
            <div>
              <span className="font-inter text-xs tracking-[0.25em] uppercase text-[#F0A500] block mb-3">
                Onde Estamos
              </span>
              <h2 className="font-bebas text-[clamp(2.8rem,6vw,5rem)] leading-none text-[#F0E8D0]">
                VENHA NOS{" "}
                <span className="text-amber">VISITAR</span>
              </h2>
            </div>

            {/* Endereço */}
            <div
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{
                background: "#1C1C1C",
                borderLeft: "3px solid #F0A500",
              }}
            >
              <MapPin size={20} className="text-[#F0A500] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-body font-semibold text-[#F0E8D0] text-base">
                  R. Alfredo Becker, 80
                </p>
                <p className="font-body text-sm text-[#F0E8D0]/50 mt-0.5">
                  Cordeiro, Recife — PE
                </p>
              </div>
            </div>

            {/* Horário */}
            <div
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{
                background: "#1C1C1C",
                borderLeft: "3px solid #CC3300",
              }}
            >
              <Clock size={20} className="text-[#CC3300] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-body font-semibold text-[#F0E8D0] text-base mb-3">
                  Funcionamento
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {schedule.map((s) => (
                    <div key={s.day} className="flex items-center justify-between gap-2">
                      <span className="font-body text-sm text-[#F0E8D0]/60">{s.day}</span>
                      <span className="font-bebas text-sm tracking-wider text-[#F0A500]">
                        18h – 23h
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Botão Maps */}
            <motion.a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir no Google Maps"
              className="btn-outline inline-flex items-center gap-2 self-start"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={14} />
              ABRIR NO GOOGLE MAPS
            </motion.a>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden relative"
            style={{
              height: 380,
              border: "1px solid rgba(240,165,0,0.15)",
            }}
          >
            {/* Overlay âmbar sutil */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(204,51,0,0.06) 0%, transparent 50%)",
              }}
            />
            {/* Borda de brasa no topo */}
            <div
              className="absolute top-0 inset-x-0 h-0.5 z-10"
              style={{
                background: "linear-gradient(90deg, transparent, #F0A500, #CC3300, #F0A500, transparent)",
              }}
            />
            <iframe
              title="Localização Pagodin Burguer"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.1!2d-34.934!3d-8.078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGEnZ29kaW4!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=R.+Alfredo+Becker,+80,+Cordeiro,+Recife,+PE"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) saturate(0.5) brightness(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
