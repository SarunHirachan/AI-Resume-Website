"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Data Fellow",
    company: "Data Fellowship 2024",
    duration: "December 2024 - Present",
    description:
      "Awarded a prestigious year-long premium DataCamp subscription ($500 value) through DataCamp Donate and Sunway Student Representative Council. Engaged in advanced data science, AI, and technology courses.",
    emoji: "📊",
  },
  // ... (keep the rest of the experiences array as it was)
]

const sortedExperiences = [...experiences].sort((a, b) => {
  const dateA = new Date(a.duration.split(" - ")[1])
  const dateB = new Date(b.duration.split(" - ")[1])
  return dateB.getTime() - dateA.getTime()
})

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12 p-6 rounded-lg shadow-lg bg-[#1a1a1a]"
    >
      <h2 className="text-2xl font-bold mb-6 text-white pb-2 flex items-center gap-2">
        <span>💼</span> Experience
      </h2>
      <div className="space-y-6">
        {sortedExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#2a2a2a] p-4 rounded-md"
          >
            <div className="flex items-start gap-3">
              <span className="p-2 mt-1">{exp.emoji}</span>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-white">{exp.company}</p>
                <p className="text-white text-sm">{exp.duration}</p>
                <p className="text-white">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
