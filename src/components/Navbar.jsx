import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownToLine, Menu, Moon, Sun, X } from 'lucide-react'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
      setIsOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-theme-bg/80 dark:bg-theme-dark-bg/80 backdrop-blur-xl border-b border-theme-border/80 dark:border-theme-dark-border/80 shadow-soft-sm dark:shadow-dark-soft'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-2 text-sm font-extrabold text-theme-text dark:text-theme-dark-text cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-theme-ink text-white shadow-glow dark:bg-theme-dark-accent dark:text-theme-dark-bg">
              EB
            </span>
            <span className="hidden sm:block text-theme-muted group-hover:text-theme-accent dark:text-theme-dark-muted dark:group-hover:text-theme-dark-accent">
              Portfolio
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-theme-border/80 bg-theme-card/70 p-1 shadow-soft-sm backdrop-blur-xl dark:border-theme-dark-border/80 dark:bg-theme-dark-card/70">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  activeSection === item.id
                    ? 'bg-theme-accent text-white shadow-soft-sm dark:bg-theme-dark-accent dark:text-theme-dark-bg'
                    : 'text-theme-muted hover:bg-theme-hover hover:text-theme-text dark:text-theme-dark-muted dark:hover:bg-theme-dark-hover dark:hover:text-theme-dark-text'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection('contact')
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="hidden items-center gap-2 rounded-full bg-theme-ink px-4 py-2.5 text-sm font-bold text-white shadow-soft-sm transition-all hover:bg-theme-accent dark:bg-theme-dark-accent dark:text-theme-dark-bg dark:hover:bg-theme-dark-accentSoft lg:inline-flex"
            >
              <ArrowDownToLine size={16} />
              Hire Me
            </motion.a>

            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.92, rotate: 18 }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-theme-border bg-theme-card text-theme-accent hover:bg-theme-hover dark:border-theme-dark-border dark:bg-theme-dark-card dark:text-theme-dark-accent dark:hover:bg-theme-dark-hover shadow-soft-sm dark:shadow-dark-soft"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-theme-border bg-theme-card text-theme-text hover:bg-theme-hover dark:border-theme-dark-border dark:bg-theme-dark-card dark:text-theme-dark-text dark:hover:bg-theme-dark-hover md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3 border-t border-theme-border dark:border-theme-dark-border">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'bg-theme-accent text-white dark:bg-theme-dark-accent dark:text-theme-dark-bg'
                    : 'text-theme-muted hover:bg-theme-hover hover:text-theme-text dark:text-theme-dark-muted dark:hover:bg-theme-dark-hover dark:hover:text-theme-dark-text'
                }`}
                whileHover={{ x: 4 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
