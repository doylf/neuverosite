'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans">

      <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-2">
        NeuroLeadership MasterClass
      </h1>
      <h2 className="text-xl sm:text-xl text-white/80 italic mb-6">
        Transformational results through neuroscience-informed leadership development
      </h2>
      <p className="text-base sm:text-lg text-white/90 mb-8">
        In this 6-week neuroleadership master class you will learn:
        <li>
          Why people behave the way they do
        </li>
        <li>
          Systemetizing / Empathizing        </li>
        <li>
          Differences in Executive Function        </li>
        <li>
          Emotional Regulation
        </li>
        <li>
          Evidence-based skills to get the most out of each individual and Team        </li>
        <li>
          Emotional Regulation Skills        </li>
        <li>
          Creating Protheses for the Brain

        </li>

      </p>

      {/* Fixed-size, Top-aligned Hero Image */}
      < motion.div
        className="w-64 flex-shrink-0"
        initial={{ opacity: 0, y: 40 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="/neuhero.png"
          alt="Neuvero Hero Graphic"
          className="w-full h-auto"
        />
      </motion.div >

    </main >
  );
}