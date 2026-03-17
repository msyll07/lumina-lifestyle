"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
          alt="Wellness lifestyle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-900/20" />
      </div>

      {/* CONTENT */}
      <div className="text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-light text-white tracking-wide mb-6 leading-tight"
        >
          Elevate Your Everyday Balance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-stone-100 font-light mb-10 max-w-2xl mx-auto"
        >
          Discover premium, natural essentials designed to bring harmony,
          clarity, and luxury into your daily rituals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#products"
            className="bg-white text-stone-800 px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-stone-100 transition-all hover:scale-105"
          >
            Discover Collection
          </a>

          <a
            href="#about"
            className="border border-white text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-white hover:text-stone-800 transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}