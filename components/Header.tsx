"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const greetings = ["Hello", "Hola", "你好", "नमस्ते", "مرحبًا", "Bonjour"]

export default function Header() {
  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="greeting-container h-16 mb-6">
        <AnimatePresence mode="wait">
          <motion.h2
            key={greetings[currentGreeting]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            {greetings[currentGreeting]}
          </motion.h2>
        </AnimatePresence>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        Sarun Hirachan <span className="wave">👋</span>
      </h1>

      <p className="text-lg sm:text-xl mb-6">Student Developer</p>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8">
        <p className="flex items-center gap-2 text-sm sm:text-base">
          <span>📍</span> Pokhara - 9, Kaski, Nepal
        </p>
        <p className="flex items-center gap-2 text-sm sm:text-base">
          <span>📧</span> sarun.hirachan@gmail.com
        </p>
        <a
          href="https://www.linkedin.com/in/sarun-hirachan/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm sm:text-base hover:text-accent-foreground transition-colors"
        >
          <span>🔗</span> LinkedIn
        </a>
        <a
          href="https://github.com/SarunHirachan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm sm:text-base hover:text-accent-foreground transition-colors"
        >
          <span>🐙</span> GitHub
        </a>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        <p className="text-sm sm:text-base leading-relaxed">
          I am a passionate and curious individual with a strong interest in technology, innovation, and entrepreneurship. With experience in programming, event organizing, and leadership, I excel at problem-solving and adapting to new challenges. Through hands-on projects and strategic roles, I have developed the skills to execute ideas effectively and create meaningful impact. I am always eager to learn, grow, and take on new opportunities.
        </p>
      </div>
    </motion.header>
  )
}
