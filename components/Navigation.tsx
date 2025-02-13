"use client"

import { useState, useEffect } from 'react'
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaTrophy, FaMoon, FaSun } from 'react-icons/fa'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <nav className="nav-bar">
      <button
        className={`nav-button ${activeSection === 'home' ? 'active' : ''}`}
        onClick={() => scrollToSection('home')}
      >
        <FaHome />
        <span>Home</span>
      </button>
      <button
        className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
        onClick={() => scrollToSection('about')}
      >
        <FaUser />
        <span>About</span>
      </button>
      <button
        className={`nav-button ${activeSection === 'experience' ? 'active' : ''}`}
        onClick={() => scrollToSection('experience')}
      >
        <FaBriefcase />
        <span>Experience</span>
      </button>
      <button
        className={`nav-button ${activeSection === 'education' ? 'active' : ''}`}
        onClick={() => scrollToSection('education')}
      >
        <FaGraduationCap />
        <span>Education</span>
      </button>
      <button
        className={`nav-button ${activeSection === 'awards' ? 'active' : ''}`}
        onClick={() => scrollToSection('awards')}
      >
        <FaTrophy />
        <span>Awards</span>
      </button>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  )
}

export default Navigation
