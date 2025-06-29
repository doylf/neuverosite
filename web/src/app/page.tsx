'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans">

      <section className="bg-[#15344a] text-white px-6 sm:px-8 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-8">
          {/* Text Block: flex-grow fills available space */} 
          <div className="flex-grow min-w-0">
<h1 className="text-4xl sm:text-5xl font-bold leading-snug mb-2">
  Leadership Mastery
</h1>

            <p className="text-base sm:text-lg text-white/90 mb-8">
              Neuroscience informed leadership development
            </p>


            <div className="flex flex-col items-center gap-4 mt-8">
                                      <p className="text-base sm:text-lg text-white/90 mb-8 font-bold">
                        Click to solve
            </p>
              <div className="flex flex-col gap-4 w-[22rem]">
                <button className="w-full bg-teal-400 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-300 transition">
                  Toxic Team Dynamics & Infighting
                </button>
                <button className="w-full bg-teal-400 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-300 transition">
                  Decision Paralysis and Overwhelm
                </button>
                <button className="w-full bg-teal-400 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-300 transition">
                  Lack of Creativity and Innovation
                </button>
                <button className="w-full bg-teal-400 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-300 transition">
                  Frustrating Relationships
                </button>
                <button className="w-full bg-teal-400 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-300 transition">
                  Lack of Purpose and Team Disengagement
                </button>
              </div>
            </div>

          </div>

          {/* Fixed-size, Top-aligned Hero Image */}
          <motion.div
            className="w-64 flex-shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src="/neuhero.png"
              alt="Neuvero Hero Graphic"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}