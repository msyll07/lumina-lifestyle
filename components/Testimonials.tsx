"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    initials: "EJ",
    name: "Emma Johnson",
    review:
      "The silk serum completely transformed my skincare routine. It feels incredibly light yet deeply nourishing.",
  },
  {
    id: 2,
    initials: "MS",
    name: "Michael Smith",
    review:
      "Lighting the Serenity candle has become my favorite ritual. The scent is calming and perfectly balanced.",
  },
  {
    id: 3,
    initials: "AR",
    name: "Ava Rodriguez",
    review:
      "Beautiful packaging and amazing quality. I love that everything is sustainable and premium.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800">
            Words of Balance
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-sm text-center"
            >
              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-6 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 text-lg">
                {t.initials}
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4 text-emerald-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-600 italic mb-6">
                "{t.review}"
              </p>

              <p className="text-stone-800 text-xs uppercase tracking-widest">
                {t.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}