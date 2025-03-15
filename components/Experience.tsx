"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Data Fellow",
    company: "Data Fellowship 2024",
    duration: "December 2024 - Present",
    description:
      "Recipient of prestigious year-long premium DataCamp subscription ($500 value). Engaged in advanced data science, artificial intelligence, and technology coursework.",
    emoji: "📊",
  },
  {
    title: "Intern",
    company: "Nobel Navigators",
    duration: "November 2024 - Present",
    description:
      "Received comprehensive training in web design and development. Developed pitch/presentation skills and technical troubleshooting capabilities.",
    emoji: "🎓",
  },
  {
    title: "Founder",
    company: "Eureka Organization",
    duration: "September 2024 - Present",
    description:
      "Founded and led a youth-focused organization centered on technology and innovation. Established an eight-member executive team and orchestrated workshops and campaigns.",
    emoji: "💡",
  },
  {
    title: "IT Officer, Board of Directors",
    company: "Interact Club of Pokhara Lakeside",
    duration: "July 2024 - Present",
    description:
      "Manage technical operations for events ensuring seamless execution. Coordinate and lead activities and programs beyond technical responsibilities.",
    emoji: "🖥️",
  },
  {
    title: "Digital Rights School Fellow",
    company: "Digital Rights Nepal",
    duration: "July 2024 - Present",
    description:
      "Completed specialized training in digital rights and safety. Active member of Digital Rights Advocate Network Gandaki promoting digital literacy.",
    emoji: "🔒",
  },
  {
  title: "Member",
  company: "LOFA Pokhara",
  duration: "January 2024 - Present",
  description: "Actively participate in events and programs organized by LOFA Pokhara.",
  emoji: "🤝",
},
  {
  title: "Rover",
  company: "Nepal Scouts, Milan Scout Crew",
  duration: "June 2023 - Present",
  description:
    "Actively volunteer and participate in Nepal Scouts events, training sessions, camps, and community service projects.",
  emoji: "🏕️",
},
  {
    title: "Community Leader",
    company: "Hand in Hand Global NGO",
    duration: "August 2024 - November 2024",
    description:
      "Coordinated community-building initiatives fostering collaboration and local engagement.",
    emoji: "🌏",
  },
  {
    title: "Co-head, Department of Computer Science",
    company: "Innovation Club Motherland",
    duration: "May 2023 - June 2024",
    description:
      "Led club activities and organized technical workshops. Mentored members in computer science fundamentals.",
    emoji: "💻",
  },
]

const sortedExperiences = [...experiences].sort((a, b) => {
  const dateA = new Date(a.duration.split(" - ")[1])
  const dateB = new Date(b.duration.split(" - ")[1])
  return dateB.getTime() - dateA.getTime()
})

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12 p-6 sm:p-8 rounded-xl bg-[#1a1a1a]"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center pb-2 flex items-center justify-center gap-2">
        <span>💼</span> Experience
      </h2>
      <div className="space-y-4">
        {sortedExperiences.map((exp, index) => (
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
                <p className="text-sm sm:text-base text-muted-foreground">{exp.company}</p>
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
