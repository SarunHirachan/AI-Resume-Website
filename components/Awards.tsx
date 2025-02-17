"use client"

import { motion } from "framer-motion"

const awards = [
  {
    title: "Outstanding Participation Award",
    issuer: "6th Training Camp, Nepal Scouts Gandaki Province, Milan Scout Crew",
    date: "August 2024",
    emoji: "🏅",
  },
  {
    title: "Eco Delegate Showcase Representative",
    issuer: "3rd Virtual Green Fest, Notre Dame Nature Study Club",
    date: "June 2024",
    emoji: "🌿",
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
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12 p-8 rounded-lg shadow-lg bg-card"
    >
      <h2 className="text-2xl font-bold mb-6 text-center pb-2 flex items-center justify-center gap-2">
        <span>🏆</span> Awards
      </h2>
      <ul className="space-y-6">
        {sortedAwards.map((award, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-secondary p-4 rounded-md hover:bg-accent transition-colors"
          >
            <span className="p-2 mt-1">{award.emoji}</span>
            <div className="space-y-2 flex-1">
              <h3 className="font-semibold">{award.title}</h3>
              <p className="text-sm text-accent-foreground">{award.issuer}</p>
              <p className="text-xs text-muted-foreground">{award.date}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}
