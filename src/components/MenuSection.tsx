"use client";

import { motion } from "framer-motion";
import BurgerCard from "./BurgerCard";

const burgers = [
  {
    name: "Burguer Maroto",
    tagline: "O clássico que nunca erra o passo.",
    description: "O essencial feito com perfeição na parrilla.",
    ingredients: ["Pão", "Carne 160g", "Queijo Cheddar", "Maionese Especial"],
    imageSrc: "/burgers/image_2c908b.png",
    emoji: "🍔",
    badge: "Mais Pedido",
  },
  {
    name: "Turma do Bacon",
    tagline: "Onde o bacon é o solista.",
    description: "O bacon crocante assumiu o palco.",
    ingredients: ["Pão", "Carne 160g", "Queijo Cheddar", "Bacon Crocante", "Maionese"],
    imageSrc: "/burgers/image_2c9093.png",
    emoji: "🥓",
  },
  {
    name: "Pericão",
    tagline: "Respeite quem tem história.",
    description: "Duplo de tudo, dobro de prazer.",
    ingredients: ["Pão", "2× Carne 160g", "2× Queijo Cheddar", "Maionese"],
    imageSrc: "/burgers/image_2c904c.png",
    emoji: "🔥",
    badge: "Destaque",
  },
  {
    name: "Salada Samba",
    tagline: "A harmonia entre o frescor e a brasa.",
    description: "A cebola assada na parrilla eleva tudo.",
    ingredients: ["Pão", "2× Carne 160g", "Cheddar", "Tomate", "Alface", "Cebola Assada", "Maionese"],
    imageSrc: "/burgers/image_2c906e.png",
    emoji: "🥗",
  },
  {
    name: "Tardizinha",
    tagline: "O sabor de um pôr do sol em Recife.",
    description: "Abacaxi grelhado + queijo coalho. A tardizinha perfeita.",
    ingredients: ["Pão", "Carne 160g", "Cheddar", "Bacon", "Abacaxi Grelhado", "Queijo Coalho", "Maionese"],
    imageSrc: "/burgers/image_2c9030.png",
    emoji: "🌅",
    badge: "Especial",
  },
];

export default function MenuSection() {
  return (
    <section
      id="cardapio"
      className="section relative overflow-hidden"
      style={{ background: "#0A0A0A" }}
      aria-label="Cardápio — As Estrelas do Palco"
    >
      {/* "CARDÁPIO" como marca d'água gigante de fundo */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bebas whitespace-nowrap"
          style={{
            fontSize: "clamp(8rem,22vw,20rem)",
            color: "rgba(240,165,0,0.025)",
            letterSpacing: "0.08em",
            lineHeight: 1,
          }}
        >
          CARDÁPIO
        </span>
      </div>

      <div className="container relative z-10">
        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-inter text-xs tracking-[0.25em] uppercase text-[#F0A500] block mb-3">
              Cardápio
            </span>
            <h2 className="font-bebas text-[clamp(2.8rem,7vw,5.5rem)] leading-none text-[#F0E8D0]">
              AS ESTRELAS{" "}
              <span className="text-amber">DO PALCO</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-sm text-[#F0E8D0]/40 italic max-w-xs sm:text-right"
          >
            Todos os burgers artesanais, feitos na parrilla a carvão.
          </motion.p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {burgers.map((burger, i) => (
            <BurgerCard key={burger.name} {...burger} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
