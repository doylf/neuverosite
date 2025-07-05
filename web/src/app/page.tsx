'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-800 text-white flex justify-center items-start pt-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold font-inter mb-4">
          Leadership Mastery
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Neuroscience informed thought leadership
        </p>
        <p className="text-lg text-gray-400 mb-8">Click your challenge to learn more</p>
        <div className="space-y-4 max-w-2xl mx-auto">
          {[
            'Toxic Team Dynamics & Infighting',
            'Decision Paralysis and Overwhelm',
            'Lack of Creativity and Innovation',
            'Frustrating Relationships',
            'Lack of Purpose and Team Disengagement',
          ].map((challenge, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}
              className="w-full py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-200"
              onClick={() => alert(`Learn more about ${challenge}`)} // Replace with actual link logic
            >
              {challenge}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </main>
  );
}