"use client"

import { motion } from "framer-motion"

const volunteeringExperiences = [
  {
    title: "Volunteer",
    organization: "Youth Thinkers' Society Pokhara",
    duration: "September 2024 - Present",
    description: "Assist in organizing Model UN conferences and youth empowerment programs.",
    emoji: "🤝",
  },
  // ... (keep the rest of the volunteeringExperiences array as it is)
]

const sortedVolunteeringExperiences = [...volunteeringExperiences].sort((a, b) => {
  const dateA = new Date(a.duration.split(" - ")[1])
  const dateB = new Date(b.duration.split(" - ")[1])
  return dateB.getTime() - dateA.getTime()
})

export default function Volunteering() {
  return (
    <motion.section
      id="volunteering"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-12 p-6 rounded-lg shadow-lg bg-opacity-50 bg-gray-100 dark:bg-opacity-50 dark:bg-gray-800"
    >
      <h2 className="text-2xl font-bold mb-6 pb-2 flex items-center gap-2">
        <span>🤲</span> Volunteering
      </h2>
      <div className="space-y-6">
        {sortedVolunteeringExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-700 p-4 rounded-md"
          >
            <div className="flex items-start gap-3">
              <span className="p-2 mt-1">{exp.emoji}</span>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p>{exp.organization}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
