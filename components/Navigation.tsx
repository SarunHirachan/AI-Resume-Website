"use client"

import { motion } from "framer-motion"

const navItems = [
  { name: "Skills", icon: "✨", href: "#skills" },
  { name: "Experience", icon: "💼", href: "#experience" },
  { name: "Volunteering", icon: "🤲", href: "#volunteering" },
  { name: "Awards", icon: "🏆", href: "#awards" },
  { name: "Education", icon: "🎓", href: "#education" },
]

export default function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 32
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="fixed top-4 right-4 z-50"
    >
      <div className="flex items-center gap-2 p-2 rounded-xl bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#333]">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="group relative flex items-center justify-center w-10 h-10 rounded-xl hover:bg-[#333] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 rounded-xl bg-[#333] text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.name}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  )
}
