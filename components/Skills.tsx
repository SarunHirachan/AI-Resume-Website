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
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12 p-6 rounded-lg shadow-lg bg-opacity-50 bg-gray-100 dark:bg-opacity-50 dark:bg-gray-800"
    >
      <h2 className="text-2xl font-bold mb-6 pb-2 flex items-center gap-2">
        <span>💼</span> Skills
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-700 p-3 rounded-md flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <span className="p-2">{skill.emoji}</span>
            <span className="font-medium">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}
