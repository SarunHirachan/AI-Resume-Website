"use client"

import { motion } from "framer-motion"
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
      className="text-center mb-12 bg-bg-section-2 p-6 rounded-lg"
    >
      <div className="greeting-container h-16 mb-4">
        {greetings.map((greeting, index) => (
          <motion.h2
            key={greeting}
            className="text-3xl font-bold text-accent-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentGreeting ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: index === currentGreeting ? 'block' : 'none' }}
          >
            {greeting}
          </motion.h2>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-2 text-text-primary">
        Sarun Hirachan <span className="wave">👋</span>
      </h1>
      <p className="text-xl mb-4 text-accent-1">Student Developer</p>
      <div className="flex flex-wrap justify-center gap-4 text-text-secondary mb-4">
        <p>📍 Chipledhunga - 9, Pokhara, Kaski, Nepal</p>
        <p>📞 +977 9846359074</p>
        <p>📧 sarun.hirachan@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/sarun-hirachan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-2 hover:underline"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/SarunHirachan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-2 hover:underline"
        >
          🐙 GitHub
        </a>
      </div>
      <p className="text-text-primary max-w-2xl mx-auto text-justify">
        I am a passionate and curious individual with a strong interest in technology, innovation, and entrepreneurship. With experience in programming, event organizing, and leadership, I excel at problem-solving and adapting to new challenges. Through hands-on projects and strategic roles, I have developed the skills to execute ideas effectively and create meaningful impact. I am always eager to learn, grow, and take on new opportunities.
      </p>
    </motion.header>
  )
}
