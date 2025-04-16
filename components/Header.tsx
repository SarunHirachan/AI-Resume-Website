'use client';

import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function Header() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="mb-12 md:mb-16 text-center relative z-20">
      {/* Greeting Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-2xl md:text-3xl font-light text-gray-300"
        >
          <span className="inline-block mr-2">👋</span>
          <span className="inline-block">Hello</span>
          <span className="mx-2">/</span>
          <span className="inline-block">नमस्ते</span>
        </motion.div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Sarun Hirachan
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-2xl md:text-3xl text-gray-300 mb-8"
      >
        Student Developer
      </motion.h2>

      {/* Bouncing Arrow */}
      <motion.div
        className="cursor-pointer"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block"
        >
          <FiChevronDown className="h-8 w-8 md:h-10 md:w-10 text-gray-400 hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </header>
  );
}
