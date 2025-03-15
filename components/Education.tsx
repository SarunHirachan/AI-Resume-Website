"use client"

import { motion } from "framer-motion"

const education = [
  {
    school: "Motherland Secondary School",
    degree: "SLC (School Leaving Certificate), Management",
    duration: "June 2022 - August 2024",
    description:
      "Actively participated in leadership roles and extracurricular activities.",
    emoji: "🎓",
  },
  {
    school: "Shishu Niketan Secondary English School",
    degree: "SEE (Secondary Education Examination)",
    duration: "April 2009 - March 2022",
    description:
      "SEE (Secondary Education Examination) with distinction. Participated in various academic and extracurricular activities.",
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
      className="mb-12 p-6 sm:p-8 rounded-xl bg-[#1a1a1a]"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center pb-2 flex items-center justify-center gap-2">
        <span>🎓</span> Education
      </h2>
      <div className="space-y-4">
        {sortedEducation.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#242424] hover:bg-[#333] transition-colors duration-200 p-4 rounded-xl"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl p-2">{edu.emoji}</span>
              <div className="space-y-2">
                <h3 className="font-semibold text-base sm:text-lg">{edu.school}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{edu.degree}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{edu.duration}</p>
                <p className="text-sm sm:text-base">{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
