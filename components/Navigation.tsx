"use client"

import { motion } from "framer-motion"
import { Award, BriefcaseIcon, GraduationCap, Heart, Sparkles } from 'lucide-react'

const navItems = [
  { name: "Skills", icon: Sparkles, href: "#skills" },
  { name: "Experience", icon: BriefcaseIcon, href: "#experience" },
  { name: "Volunteering", icon: Heart, href: "#volunteering" },
  { name: "Awards", icon: Award, href: "#awards" },
  { name: "Education", icon: GraduationCap, href: "#education" },
]

export default function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2"
    >
      <div className="flex flex-col items-end gap-2 p-2 rounded-lg bg-background/80 backdrop-blur-sm border">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="group flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {item.name}
            </span>
            <item.icon className="h-5 w-5" />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  )
}
