"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 bg-[#EBE7DF]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Begin Your Wellness Journey
          </h2>

          <p className="text-stone-600 mb-10 text-lg">
            Join our community and get 15% off your first order.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <button className="bg-stone-800 text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-stone-700 transition-all hover:scale-105">
              Shop Collection
            </button>

            <button className="border border-stone-800 text-stone-800 px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-stone-800 hover:text-white transition-all">
              Read Journal
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}