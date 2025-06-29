'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-slate-200 bg-[#f7f7f7] text-slate-900">
        <div className="flex items-center space-x-2">
          <img src="/neulogo.png" alt="Neuvero Logo" className="h-6 w-6" />
          <span className="text-xl font-bold text-[#15344a]">NEUVERO</span>
        </div>
        <nav className="space-x-6 text-slate-600">
          <a href="#coaching" className="hover:text-slate-900">Coaching</a>
          <a href="#education" className="hover:text-slate-900">Education</a>
          <a href="#neuro360" className="hover:text-slate-900">Neuro360</a>
        </nav>
      </header>
      <section className="bg-[#15344a] text-white px-6 sm:px-8 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-8">
          {/* Text Block: flex-grow fills available space */}
          <div className="flex-grow min-w-0">
<h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-2">
  Leadership Mastery
</h1>
<h2 className="text-2xl sm:text-3xl text-white/80 italic mb-6">
  (in chaotic conditions)
</h2>
            <p className="text-base sm:text-lg text-white/90 mb-8">
              Neuroscience informed leadership development for the modern world.
            </p>
                        <p className="text-base sm:text-lg text-white/90 mb-8">
                        Click to solve:
            </p>

            <div className="flex flex-col items-center gap-4 mt-8">
              <div className="flex flex-col gap-4 w-[22rem]">
                <button className="w-full bg-teal-400 text-slate-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-300 transition">
                  Toxic Team Dynamics & Infighting
                </button>
                <button className="w-full bg-teal-400 text-slate-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-300 transition">
                  Decision Paralysis and Overwhelm
                </button>
                <button className="w-full bg-teal-400 text-slate-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-300 transition">
                  Lack of Creativity and Innovation
                </button>
                <button className="w-full bg-teal-400 text-slate-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-300 transition">
                  Frustrating Relationships
                </button>
                <button className="w-full bg-teal-400 text-slate-900 font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-300 transition">
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