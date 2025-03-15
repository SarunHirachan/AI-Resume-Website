"use client"

import { motion } from "framer-motion"

const awards = [
  {
    title: "Certificate of Merit, 19th Safal Pokhara International Marathon 2025",
    issuer: "21km Half Marathon",
    date: "February 2025",
    emoji: "🏃",
  },
  {
    title: "Outstanding Participation Award",
    issuer: "6th Training Camp, Nepal Scouts Gandaki Province, Milan Scout Crew",
    date: "August 2024",
    emoji: "🏅",
  },
  {
    title: "Best Position Paper",
    issuer: "Pokhara Model UN Edition V, Youth Thinkers' Society Pokhara",
    date: "May 2024",
    emoji: "📄",
  },
  {
    title: "2nd Runner-Up",
    issuer: "dpHackathon 1.0, Digital Pathshala",
    date: "December 2023",
    emoji: "🏆",
  }
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
      className="mb-12 p-6 sm:p-8 rounded-xl bg-[#1a1a1a]"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center pb-2 flex items-center justify-center gap-2">
        <span className="text-2xl">🏆</span> Awards
      </h2>
      <div className="space-y-4">
        {sortedAwards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#242424] hover:bg-[#333] transition-colors duration-200 p-4 rounded-xl"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl p-2">{award.emoji}</span>
              <div className="space-y-2">
                <h3 className="font-semibold text-base sm:text-lg">{award.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{award.issuer}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{award.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
