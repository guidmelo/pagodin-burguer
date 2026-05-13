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
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <motion.span
          className="text-7xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {emoji}
        </motion.span>
        <span className="font-inter text-[9px] text-[#F0E8D0]/25 tracking-widest uppercase">
          foto em breve
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
      className="absolute inset-0 w-full h-full object-contain p-3"
      style={{
        filter: "drop-shadow(0 12px 32px rgba(204,51,0,0.45)) drop-shadow(0 0 20px rgba(240,165,0,0.2))",
      }}
      loading="lazy"
    />
  );
}
