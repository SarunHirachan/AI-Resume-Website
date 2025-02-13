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
      <p className="text-xl mb-4 text-accent-1">Student Developer</p>
      <div className="flex flex-wrap justify-center gap-4 text-text-secondary">
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
    </motion.header>
  )
}
