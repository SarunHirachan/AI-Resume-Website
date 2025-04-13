"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Volunteering", href: "#volunteering" },
  { name: "Awards", href: "#awards" },
  { name: "Education", href: "#education" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsScrolled(latest > 0)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (typeof window === 'undefined') return

    const element = document.querySelector(href)
    if (element) {
      const headerOffset = window.innerWidth > 768 ? 80 : 60
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <motion.div
          className="absolute bottom-[-2px] left-0 right-0 h-1 bg-white/30 origin-left z-50"
          style={{ scaleX }}
        />

        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} scrollToSection={scrollToSection} />
              ))}
            </div>
          </div>

          <motion.div
            className={`md:hidden overflow-hidden ${
              isMenuOpen ? "max-h-screen" : "max-h-0"
            } transition-all duration-300`}
          >
            <div className="flex flex-col items-center gap-4 pt-4 pb-6">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} scrollToSection={scrollToSection} mobile />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  )
}

interface NavLinkProps {
  item: NavItem;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  mobile?: boolean;
}

const NavLink = ({ item, scrollToSection, mobile = false }: NavLinkProps) => (
  <motion.a
    href={item.href}
    onClick={(e) => scrollToSection(e, item.href)}
    className={`relative ${
      mobile ? "px-6 py-3 text-lg" : "px-4 py-2 text-base"
    } font-medium text-white hover:text-gray-300 transition-colors`}
    whileHover={{ 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10">{item.name}</span>
    <motion.span
      className="absolute inset-0 bg-white/10 rounded-lg z-0"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ originX: 0.5, originY: 0.5 }}
    />
  </motion.a>
)
