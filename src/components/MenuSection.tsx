"use client";

import SectionTitle from "./SectionTitle";
import BurgerCard from "./BurgerCard";

const burgers = [
  {
    name: "Burguer Maroto",
    tagline: "O clássico que nunca erra o passo.",
    description:
      "Simples, direto e irresistível. O Maroto é a escolha certa quando você quer o essencial feito com perfeição.",
    ingredients: ["Pão", "Carne 160g", "Queijo Cheddar", "Maionese Especial"],
    imageSrc: "/burgers/image_2c908b.png",
    emoji: "🍔",
    badge: "Mais Pedido",
  },
  {
    name: "Turma do Bacon",
    tagline: "Onde o bacon é o solista.",
    description:
      "O bacon crocante assume o palco e entrega uma sinfonia de sabores que você vai querer repetir.",
    ingredients: ["Pão", "Carne 160g", "Queijo Cheddar", "Bacon Crocante", "Maionese"],
    imageSrc: "/burgers/image_2c9093.png",
    emoji: "🥓",
  },
  {
    name: "Pericão",
    tagline: "Respeite quem tem história.",
    description:
      "Duplo de tudo, dobro de prazer. Para quem não abre mão de uma refeição que faça jus ao seu apetite.",
    ingredients: ["Pão", "2x Carne 160g", "2x Queijo Cheddar", "Maionese"],
    imageSrc: "/burgers/image_2c904c.png",
    emoji: "🔥",
    badge: "Destaque",
  },
  {
    name: "Salada Samba",
    tagline: "A harmonia perfeita entre o frescor e a brasa.",
    description:
      "Frescor e brasa em harmonia perfeita. A cebola assada na parrilla eleva esse burger a outro nível.",
    ingredients: [
      "Pão",
      "2x Carne 160g",
      "Queijo Cheddar",
      "Tomate",
      "Alface",
      "Cebola Assada",
      "Maionese",
    ],
    imageSrc: "/burgers/image_2c906e.png",
    emoji: "🥗",
  },
  {
    name: "Tardizinha",
    tagline: "O sabor de um pôr do sol em Recife.",
    description:
      "Abacaxi grelhado, queijo coalho e bacon — uma combinação que captura a essência de uma tardizinha perfeita no Recife.",
    ingredients: [
      "Pão",
      "Carne 160g",
      "Queijo Cheddar",
      "Bacon",
      "Abacaxi Grelhado",
      "Queijo Coalho",
      "Maionese",
    ],
    imageSrc: "/burgers/image_2c9030.png",
    emoji: "🌅",
    badge: "Especial",
  },
];

export default function MenuSection() {
  return (
    <section
      id="cardapio"
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Cardápio — As Estrelas do Palco"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B0B0B]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(166,27,27,0.12) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionTitle
          tag="Cardápio"
          title="As Estrelas"
          highlight="do Palco"
          subtitle="Cada burger é um show. Escolha o seu."
          align="center"
        />

        {/* Grid de cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {burgers.map((burger, i) => (
            <BurgerCard
              key={burger.name}
              {...burger}
              index={i}
            />
          ))}
        </div>

        {/* Nota rodapé */}
        <p className="text-center text-xs font-inter text-[#EAE2B7]/30 mt-10 tracking-wide">
          * Todos os burgers são servidos artesanalmente na parrilla a carvão.
        </p>
      </div>
    </section>
  );
}
