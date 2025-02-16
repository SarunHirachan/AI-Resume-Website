"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, BriefcaseIcon, GraduationCap, HandHeart, Sparkles } from 'lucide-react'

const navItems = [
  { name: "Skills", icon: Sparkles, href: "#skills" },
  { name: "Experience", icon: BriefcaseIcon, href: "#experience" },
  { name: "Volunteering", icon: HandHeart, href: "#volunteering" },
  { name: "Awards", icon: Award, href: "#awards" },
  { name: "Education", icon: GraduationCap, href: "#education" }
]

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-16 right-4 z-50"
    >
      <div className="flex flex-col gap-2 p-2 rounded-2xl bg-background/80 backdrop-blur-sm border">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group relative flex items-center gap-2 p-2 rounded-xl hover:bg-accent transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span className="absolute left-8 px-2 py-1 rounded-lg bg-popover text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
