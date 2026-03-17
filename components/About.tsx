"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
              alt="Wellness lifestyle"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6 leading-snug">
              Rooted in Nature, Designed for Peace
            </h2>

            <p className="text-stone-600 leading-relaxed mb-6 font-light">
              At Lumina, we believe true luxury lies in simplicity. Our mission is to create products that nurture both body and mind, bringing calm into your everyday life.
            </p>

            <p className="text-stone-600 leading-relaxed mb-8 font-light">
              Every item is crafted with sustainable, ethically sourced ingredients. We transform daily routines into meaningful rituals that inspire balance and clarity.
            </p>

            <a
              href="#products"
              className="inline-block text-emerald-700 uppercase tracking-widest text-sm font-medium hover:text-emerald-800 transition-colors border-b border-emerald-700 pb-1"
            >
              Discover Products
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}