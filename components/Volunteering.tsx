"use client"

import { motion } from "framer-motion"

const volunteeringExperiences = [
  {
    title: "Volunteer",
    organization: "Youth Thinkers' Society Pokhara",
    duration: "September 2024 - Present",
    description: "Assist in organizing Model UN conferences and facilitate youth empowerment programs aimed at developing critical thinking and leadership skills.",
    emoji: "🤝",
  },
  {
    title: "Content Creator",
    organization: "SEE Ko Guide",
    duration: "August 2024 - Present",
    description: "Develop educational PowerPoint presentations and produce YouTube video content for Secondary Education Examination preparation, helping students master key concepts.",
    emoji: "🎥",
  },
  {
    title: "Co-Chair, UN-WOMEN Committee",
    organization: "MY-MUN 2024",
    duration: "September 6–7, 2024",
    description:
      "Served as Co-Chair for committee proceedings, collaborated with leadership to guide delegates, and ensured productive and structured discussions on gender equality issues.",
    emoji: "🌐",
  },
  {
    title: "Service Team Rover",
    organization: "2nd Adventure Fest",
    duration: "June 15–24, 2024",
    description: "Provided comprehensive logistical support for a major Nepal Scouts Gandaki Province event, ensuring smooth operations and participant satisfaction.",
    emoji: "🏕️",
  },
  {
    title: "Member",
    organization: "Nepal Scouts, Milan Scout Crew",
    duration: "June 2023 - Present",
    description: "Actively volunteer in community service initiatives, participate in training sessions and camps, and contribute to projects that address local community needs.",
    emoji: "⚜️",
  }
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
      className="mb-12 p-6 sm:p-8 rounded-xl bg-[#1a1a1a]"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center pb-2 flex items-center justify-center gap-2">
        <span>🤲</span> Volunteering
      </h2>
      <div className="space-y-4">
        {sortedVolunteeringExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#242424] hover:bg-[#333] transition-colors duration-200 p-4 rounded-xl"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl p-2">{exp.emoji}</span>
              <div className="space-y-2">
                <h3 className="font-semibold text-base sm:text-lg">{exp.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{exp.organization}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{exp.duration}</p>
                <p className="text-sm sm:text-base">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
