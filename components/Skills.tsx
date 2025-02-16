"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Web Development (HTML, CSS, JS)", emoji: "🌐" },
  { name: "Python Programming", emoji: "🐍" },
  { name: "GitHub", emoji: "🐙" },
  { name: "PowerPoint", emoji: "📊" },
  { name: "Canva", emoji: "🎨" },
  { name: "Leadership", emoji: "🚀" },
  { name: "Article Writing & Research", emoji: "📝" },
  { name: "Event Organizing", emoji: "📅" },
  { name: "Scouting", emoji: "🏕️" },
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12 p-8 rounded-lg shadow-lg bg-card/80 backdrop-blur-sm"
    >
      <h2 className="mb-8 text-center pb-2 flex items-center justify-center gap-2">
        <span className="text-2xl">✨</span> Skills
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-secondary/80 hover:bg-secondary/100 transition-all duration-300 p-6 rounded-md flex items-center gap-4"
          >
            <span className="text-2xl">{skill.emoji}</span>
            <span className="font-medium text-lg md:text-xl">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}
