"use client"

import { motion } from "framer-motion"

const education = [
  {
    school: "Motherland Secondary School",
    degree: "SLC (School Leaving Certificate), Management",
    duration: "June 2022 - August 2024",
    emoji: "🎓",
  },
  {
    school: "Shishu Niketan Secondary English School",
    degree: "SEE (Secondary Education Examination)",
    duration: "April 2009 - March 2022",
    emoji: "📚",
  },
]

const sortedEducation = [...education].sort((a, b) => {
  const dateA = new Date(a.duration.split(" - ")[1])
  const dateB = new Date(b.duration.split(" - ")[1])
  return dateB.getTime() - dateA.getTime()
})

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="mb-12 p-6 rounded-lg shadow-lg bg-opacity-50 bg-gray-100 dark:bg-opacity-50 dark:bg-gray-800"
    >
      <h2 className="text-2xl font-bold mb-6 pb-2 flex items-center gap-2">
        <span>🎓</span> Education
      </h2>
      <div className="space-y-6">
        {sortedEducation.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-700 p-4 rounded-md"
          >
            <div className="flex items-start gap-3">
              <span className="p-2 mt-1">{edu.emoji}</span>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p>{edu.degree}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{edu.duration}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
