"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Phone } from "lucide-react";
import SectionTitle from "./SectionTitle";
import AnimatedButton from "./AnimatedButton";

const schedule = [
  { day: "Quinta", hours: "18h – 23h", active: true },
  { day: "Sexta", hours: "18h – 23h", active: true },
  { day: "Sábado", hours: "18h – 23h", active: true },
  { day: "Domingo", hours: "18h – 23h", active: true },
];

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=R.+Alfredo+Becker,+80,+Cordeiro,+Recife+-+PE";

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Localização do Pagodin Burguer"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B0B0B]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 0% 100%, rgba(166,27,27,0.1) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 100% 0%, rgba(247,127,0,0.06) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle
          tag="Onde Estamos"
          title="Venha nos"
          highlight="Visitar"
          subtitle="Te esperamos no coração do Cordeiro."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Card de informações */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 flex flex-col gap-7"
            style={{ border: "1px solid rgba(247,127,0,0.15)" }}
          >
            {/* Endereço */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(214,40,40,0.15)", border: "1px solid rgba(214,40,40,0.3)" }}
              >
                <MapPin size={18} className="text-[#D62828]" />
              </div>
              <div>
                <p className="text-xs font-inter text-[#EAE2B7]/40 tracking-widest uppercase mb-1">
                  Endereço
                </p>
                <p className="font-poppins font-medium text-[#F5F5F5]">
                  R. Alfredo Becker, 80
                </p>
                <p className="font-poppins text-[#EAE2B7]/60 text-sm">
                  Cordeiro, Recife – PE
                </p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(247,127,0,0.12)", border: "1px solid rgba(247,127,0,0.25)" }}
              >
                <Clock size={18} className="text-[#F77F00]" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-inter text-[#EAE2B7]/40 tracking-widest uppercase mb-3">
                  Funcionamento
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {schedule.map((s) => (
                    <div key={s.day} className="flex items-center justify-between gap-3">
                      <span className="font-poppins text-sm text-[#EAE2B7]/70">{s.day}</span>
                      <span
                        className="font-bebas text-sm tracking-wider"
                        style={{ color: s.active ? "#FCBF49" : "#EAE2B7" }}
                      >
                        {s.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contato via WhatsApp */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.25)" }}
              >
                <Phone size={18} style={{ color: "#25D366" }} />
              </div>
              <div>
                <p className="text-xs font-inter text-[#EAE2B7]/40 tracking-widest uppercase mb-1">
                  Pedidos & Reservas
                </p>
                <p className="font-poppins text-[#EAE2B7]/60 text-sm">
                  Via WhatsApp ou iFood
                </p>
              </div>
            </div>

            {/* Botão Maps */}
            <AnimatedButton
              href={MAPS_LINK}
              variant="outline"
              size="md"
              fullWidth
              aria-label="Abrir localização no Google Maps"
            >
              <Navigation size={15} />
              ABRIR NO GOOGLE MAPS
            </AnimatedButton>
          </motion.div>

          {/* Mapa embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(247,127,0,0.15)",
              height: "380px",
            }}
          >
            {/* Overlay de cor sobre o mapa */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(214,40,40,0.08) 0%, transparent 50%)",
              }}
            />
            <iframe
              title="Localização Pagodin Burguer no Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.7!2d-34.92!3d-8.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR3VpZCBNZWw!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=R.+Alfredo+Becker,+80,+Cordeiro,+Recife,+PE"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.6)" }}
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
