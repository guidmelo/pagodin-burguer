"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface BurgerImageProps {
  src: string;
  alt: string;
  emoji?: string;
}

export default function BurgerImage({ src, alt, emoji = "🍔" }: BurgerImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <motion.span
          className="text-7xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {emoji}
        </motion.span>
        <span className="text-[10px] font-inter text-[#EAE2B7]/30 tracking-widest uppercase">
          Foto em breve
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="absolute inset-0 w-full h-full object-contain p-4"
      style={{ filter: "drop-shadow(0 10px 30px rgba(214,40,40,0.4))" }}
      loading="lazy"
    />
  );
}
