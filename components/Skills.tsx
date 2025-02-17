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
    className="mb-12 p-8 rounded-lg shadow-lg bg-card"
  >
    <h2 className="text-center pb-2 flex items-center justify-center gap-2">
      <span>✨</span> Skills
    </h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-secondary p-4 rounded-md flex items-center gap-3 hover:bg-accent transition-colors"
        >
          <span className="text-xl">{skill.emoji}</span>
          <span>{skill.name}</span>
        </motion.li>
      ))}
    </ul>
  </motion.section>
)
}
