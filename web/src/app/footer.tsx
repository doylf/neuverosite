// src/components/Footer.js
'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white py-6 mt-12"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-teal-400">NEUVERO</h3>
          <p className="text-gray-400 mt-2">
            Guiding leaders with neuroscience and compassionate expertise.
          </p>
        </div>
        <nav className="flex justify-center space-x-6 mb-4">
          <a href="#coaching" className="text-gray-300 hover:text-teal-300 transition">
            Coaching
          </a>
          <a href="#education" className="text-gray-300 hover:text-teal-300 transition">
            Education
          </a>
          <a href="#neuro360" className="text-gray-300 hover:text-teal-300 transition">
            Neuro360
          </a>
        </nav>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Neuvero. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}