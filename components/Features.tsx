"use client";

import { Leaf, Shield, Recycle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-emerald-700" />,
    title: "100% Natural",
    description:
      "Crafted with pure, plant-based ingredients sourced directly from nature.",
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-700" />,
    title: "Premium Quality",
    description:
      "Meticulously tested for quality, safety, and a luxurious experience.",
  },
  {
    icon: <Recycle className="w-8 h-8 text-emerald-700" />,
    title: "Sustainable",
    description:
      "Eco-friendly packaging and ethical sourcing to protect our planet.",
  },
];

export default function Features() {
  return (
    <section className="py-28 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-6 flex justify-center">
                {feature.icon}
              </div>

              <h3 className="text-xl text-stone-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-stone-500 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}