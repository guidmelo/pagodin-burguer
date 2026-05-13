"use client";

import { motion } from "framer-motion";
import BurgerCard from "./BurgerCard";

const burgers = [
  {
    name: "Burguer Maroto",
    ingredients: ["Pão Brioche", "Carne 160g", "Queijo Cheddar", "Maionese Especial"],
    imageSrc: "/burgers/image_2c908b.png",
    emoji: "🍔",
    badge: "Mais Pedido",
  },
  {
    name: "Turma do Bacon",
    ingredients: ["Pão Brioche", "Carne 160g", "Cheddar", "Bacon Crocante", "Maionese"],
    imageSrc: "/burgers/image_2c9093.png",
    emoji: "🥓",
  },
  {
    name: "Pericão",
    ingredients: ["Pão Brioche", "2× Carne 160g", "2× Queijo Cheddar", "Maionese"],
    imageSrc: "/burgers/image_2c904c.png",
    emoji: "🔥",
    badge: "Destaque",
  },
  {
    name: "Salada Samba",
    ingredients: ["Pão Brioche", "2× Carne 160g", "Cheddar", "Tomate", "Alface", "Cebola Assada", "Maionese"],
    imageSrc: "/burgers/image_2c906e.png",
    emoji: "🥗",
  },
  {
    name: "Tardizinha",
    ingredients: ["Pão Brioche", "Carne 160g", "Cheddar", "Bacon", "Abacaxi Grelhado", "Queijo Coalho", "Maionese"],
    imageSrc: "/burgers/image_2c9030.png",
    emoji: "🌅",
    badge: "Especial",
  },
];

export default function MenuSection() {
  return (
    <section
      id="cardapio"
      className="relative overflow-hidden"
      aria-label="Cardápio"
    >
      <div className="container py-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="font-inter text-xs tracking-[0.25em] uppercase text-[#F0A500] block mb-3">
            Cardápio
          </span>
          <h2 className="font-bebas text-[clamp(2.8rem,7vw,5.5rem)] leading-none text-[#F0E8D0]">
            AS ESTRELAS <span className="text-amber">DO PALCO</span>
          </h2>
        </motion.div>
      </div>

      <div>
        {burgers.map((burger, i) => (
          <div key={burger.name}>
            {i > 0 && (
              <div className="px-8 md:px-16">
                <hr className="divider-brasa border-0" />
              </div>
            )}
            <BurgerCard {...burger} index={i} isRight={i % 2 === 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
