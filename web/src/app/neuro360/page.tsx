'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Neuro360Page() {
  return (
    <main className="min-h-screen bg-[#15344a] text-white font-sans px-6 sm:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">

        {/* Coming Soon Banner */}
        <motion.div
          className="mt-16 text-white text-xl sm:text-2xl font-medium italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          🚀 Coming Soon 
        </motion.div>

<br></br>

        {/* Fade-in Header */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Neuro360
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-white/80 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          AI powered assessment designed to optimize relational leadership.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-white/80 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Launching Fall 2025
        </motion.p>

<div className="ml-embedded" data-form="6LGw9A"></div>



      </div>
    </main>
  );
}