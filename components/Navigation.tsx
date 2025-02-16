"use client"

import { motion } from "framer-motion"
import { Award, BriefcaseIcon, GraduationCap, Heart, Sparkles } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { name: "Skills", icon: Sparkles, href: "#skills" },
  { name: "Experience", icon: BriefcaseIcon, href: "#experience" },
  { name: "Volunteering", icon: Heart, href: "#volunteering" },
  { name: "Awards", icon: Award, href: "#awards" },
  { name: "Education", icon: GraduationCap, href: "#education" },
]

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4"
    >
      <div className="flex items-center gap-2 p-2 rounded-full bg-background/80 backdrop-blur-sm border">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="group relative flex items-center gap-2 p-2 rounded-full hover:bg-accent transition-colors active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="h-5 w-5" />
            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg bg-popover text-sm opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
              {item.name}
            </span>
          </motion.a>
        ))}
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}
