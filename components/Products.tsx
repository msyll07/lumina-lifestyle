"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Aura Essential Oil",
    description: "Calming lavender and chamomile blend.",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Lumina Silk Serum",
    description: "Hydrating botanical facial serum.",
    price: "$85",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1974&auto=format&fit=crop",
  },
  {
  id: 3,
  name: "Bamboo Body Brush",
  description: "Exfoliating natural bristle brush.",
  price: "$32",
  image:
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1974&auto=format&fit=crop",
},
  {
  id: 4,
  name: "Serenity Soy Candle",
  description: "Hand-poured grounding sandalwood.",
  price: "$55",
  image:
    "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop",
},
];

export default function Products() {
  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
            Curated Essentials
          </h2>
          <p className="text-stone-500 font-light">
            Elevate your daily rituals with our premium collection.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative h-[320px] w-full rounded-xl overflow-hidden mb-5 bg-stone-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <h3 className="text-lg text-stone-800 mb-1">
                {product.name}
              </h3>

              <p className="text-sm text-stone-500 font-light mb-2">
                {product.description}
              </p>

              <p className="text-stone-900 font-medium">
                {product.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}