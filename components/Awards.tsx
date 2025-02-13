"use client"

import { motion } from "framer-motion"

const awards = [
  {
    title: "Outstanding Participation Award",
    issuer: "6th Training Camp, Nepal Scouts Gandaki Province, Milan Scout Crew",
    date: "August 2024",
    emoji: "🏅",
  },
  // ... (keep the rest of the awards array as it is)
]

const sortedAwards = [...awards].sort((a, b) => {
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)
  return dateB.getTime() - dateA.getTime()
})

export default function Awards() {
  return (
    <motion.section
      id="awards"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mb-12 p-6 rounded-lg shadow-lg bg-opacity-50 bg-gray-100 dark:bg-opacity-50 dark:bg-gray-800"
    >
      <h2 className="text-2xl font-bold mb-6 pb-2 flex items-center gap-2">
        <span>🏆</span> Awards
      </h2>
      <ul className="space-y-6">
        {sortedAwards.map((award, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-700 p-4 rounded-md flex items-start gap-3"
          >
            <span className="p-2 mt-1">{award.emoji}</span>
            <div className="space-y-2 flex-1">
              <h3 className="font-semibold">{award.title}</h3>
              <p className="text-sm">{award.issuer}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{award.date}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}
