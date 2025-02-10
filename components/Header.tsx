"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 bg-bg-section-2 p-6 rounded-lg"
    >
      <h1 className="text-4xl font-bold mb-2 text-text-primary">
        Sarun Hirachan <span className="wave">👋</span>
      </h1>
      <p className="text-xl mb-4 text-accent-1">Founder and Student</p>
      <div className="flex flex-wrap justify-center gap-4 text-text-secondary">
        <p>📍 Pokhara - 9, Kaski, Nepal</p>
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
      <p className="text-text-primary max-w-2xl mx-auto">
        I am a passionate and curious individual with a strong interest in technology, innovation, and entrepreneurship. With experience in programming, event organizing, and leadership, I excel at problem-solving and adapting to new challenges. Through hands-on projects and strategic roles, I have developed the skills to execute ideas effectively and create meaningful impact. I am always eager to learn, grow, and take on new opportunities.
      </p>
    </motion.header>
  )
}

