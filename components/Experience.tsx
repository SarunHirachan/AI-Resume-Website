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
  {
    title: "Intern",
    company: "Nobel Navigators",
    duration: "November 2024 - Present",
    description:
      "Trained in web design, pitch/presentation development, internet troubleshooting, and leadership through an online internship program.",
    emoji: "🎓",
  },
  {
    title: "Founder",
    company: "Eureka Organization",
    duration: "September 2024 - Present",
    description:
      "Founded a youth-led organization focused on technology, innovation, and self-development for youths and students. Led workshops, campaigns, and events to empower youth, establishing an executive team of eight members.",
    emoji: "💡",
  },
  {
    title: "IT Officer, Board of Directors",
    company: "Interact Club of Pokhara Lakeside",
    duration: "July 2024 - Present",
    description:
      "Manage technical operations for events, ensuring seamless execution of programs. Coordinate and lead activities, and programs beyond technical operations.",
    emoji: "🖥️",
  },
  {
    title: "Digital Rights School Fellow",
    company: "Digital Rights Nepal",
    duration: "July 2024 - Present",
    description:
      "Completed a two-day in-person workshop on Digital Rights and Safety. An active member of the Digital Rights Advocate Network Gandaki, promoting digital literacy and online safety.",
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
    title: "Community Leader (Nepal Community)",
    company: "Hand in Hand Global NGO",
    duration: "August 2024 - November 2024",
    description:
      "Coordinated community-building initiatives under the NGO's guidance, fostering collaboration and local engagement.",
    emoji: "🌏",
  },
  {
    title: "Co-head, Department of Computer Science",
    company: "Innovation Club Motherland",
    duration: "May 2023 - June 2024",
    description:
      "Led club activities, organized tech workshops, and mentored members in computer science fundamentals.",
    emoji: "💻",
  }
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
