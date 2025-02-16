"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from 'react'

const greetings = ["Hello", "Hola", "你好", "नमस्ते", "مرحبًا", "Bonjour"]

export default function Header() {
  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 2000) // Change greeting every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 bg-bg-section-2 p-8 rounded-lg"
    >
      <div className="greeting-container h-16 mb-6">
        <AnimatePresence mode="wait">
          <motion.h2
            key={greetings[currentGreeting]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white"
          >
            {greetings[currentGreeting]}
          </motion.h2>
        </AnimatePresence>
      </div>

      <h1 className="text-4xl font-bold mb-3 text-white">
        Sarun Hirachan <span className="wave">👋</span>
      </h1>
      
      <p className="text-xl mb-6 text-white">Student Developer</p>
      
      <div className="flex flex-wrap justify-center items-center gap-6 mb-6 text-white">
        <p className="flex items-center gap-2">
          <span className="text-accent-1">📍</span> Pokhara - 9, Kaski, Nepal
        </p>
        <p className="flex items-center gap-2">
          <span className="text-accent-1">📧</span> sarun.hirachan@gmail.com
        </p>
        <a
          href="https://www.linkedin.com/in/sarun-hirachan/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-accent-1 transition-colors"
        >
          <span>🔗</span> LinkedIn
        </a>
        <a
          href="https://github.com/SarunHirachan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-accent-1 transition-colors"
        >
          <span>🐙</span> GitHub
        </a>
      </div>

      <p className="text-white max-w-4xl mx-auto text-justify leading-relaxed">
        I am a passionate and curious individual with a strong interest in technology, innovation, and entrepreneurship. With experience in programming, event organizing, and leadership, I excel at problem-solving and adapting to new challenges. Through hands-on projects and strategic roles, I have developed the skills to execute ideas effectively and create meaningful impact. I am always eager to learn, grow, and take on new opportunities.
      </p>
    </motion.header>
  )
}
