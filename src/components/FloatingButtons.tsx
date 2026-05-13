"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { WA_LINK, IG_LINK, IF_LINK } from "@/lib/constants";

const buttons = [
  {
    id: "whatsapp",
    label: "Pedir no WhatsApp",
    href: WA_LINK,
    color: "#25D366",
    pulse: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: IG_LINK,
    color: "#E1306C",
    pulse: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    id: "ifood",
    label: "Pedir no iFood",
    href: IF_LINK,
    color: "#EA1D2C",
    pulse: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.33a.5.5 0 01-.49.4h-6.2a.5.5 0 01-.49-.4l-1.97-9.33a.5.5 0 01.49-.6h10.14a.5.5 0 01.49.6zM12 5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
      </svg>
    ),
  },
];

export default function FloatingButtons() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="fixed right-4 bottom-6 z-50 flex flex-col gap-2.5"
      role="complementary"
      aria-label="Contato rápido"
    >
      {buttons.map((btn, i) => (
        <motion.a
          key={btn.id}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={btn.label}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + i * 0.12, type: "spring", stiffness: 320, damping: 28 }}
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.94 }}
          onMouseEnter={() => setHovered(btn.id)}
          onMouseLeave={() => setHovered(null)}
          className="relative w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer"
          style={{
            background: hovered === btn.id ? btn.color : "rgba(28,28,28,0.95)",
            border: `1px solid ${hovered === btn.id ? btn.color : "rgba(255,255,255,0.1)"}`,
            boxShadow:
              hovered === btn.id
                ? `0 0 20px ${btn.color}60, 0 0 40px ${btn.color}25`
                : "0 4px 16px rgba(0,0,0,0.5)",
            backdropFilter: "blur(12px)",
            transition: "all 0.25s",
            color: hovered === btn.id ? "#fff" : "rgba(240,232,208,0.7)",
          }}
        >
          {/* Pulse ring — só no WhatsApp */}
          {btn.pulse && (
            <motion.span
              className="absolute inset-0 rounded-xl"
              style={{ border: `1.5px solid ${btn.color}` }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          )}

          {/* Tooltip */}
          <AnimatePresence>
            {hovered === btn.id && (
              <motion.span
                initial={{ opacity: 0, x: 8, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.92 }}
                transition={{ duration: 0.18 }}
                className="absolute right-full mr-2.5 px-3 py-1.5 rounded-lg text-xs font-body font-medium whitespace-nowrap"
                style={{
                  background: "rgba(28,28,28,0.95)",
                  border: "1px solid rgba(240,165,0,0.2)",
                  color: btn.color,
                }}
              >
                {btn.label}
              </motion.span>
            )}
          </AnimatePresence>

          {btn.icon}
        </motion.a>
      ))}
    </div>
  );
}
