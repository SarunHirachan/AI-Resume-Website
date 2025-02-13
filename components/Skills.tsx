"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Web Development (HTML, CSS, JS)", emoji: "🌐" },
  { name: "Python Programming", emoji: "🐍" },
  { name: "GitHub", emoji: "🐙" },
  { name: "PowerPoint", emoji: "📊" },
  { name: "Leadership", emoji: "🚀" },
  { name: "Team Collaboration", emoji: "🤝" },
  { name: "Article Writing & Research", emoji: "📝" },
  { name: "Event Organizing", emoji: "📅" },
  { name: "Scouting", emoji: "🏕️" },
]

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12 p-6 rounded-lg shadow-lg bg-[#1a1a1a]"
    >
      <h2 className="text-2xl font-bold mb-6 text-white pb-2 flex items-center gap-2">
        <span>💼</span> Skills
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#2a2a2a] p-3 rounded-md flex items-center gap-3 hover:bg-[#333] transition-colors duration-300"
          >
            <span className="p-2">{skill.emoji}</span>
            <span className="font-medium text-white">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}
