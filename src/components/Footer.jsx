import { motion } from 'framer-motion'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-theme-border/80 bg-theme-secondary/70 px-4 py-12 dark:border-theme-dark-border dark:bg-theme-dark-secondary/70 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-theme-muted dark:text-theme-dark-muted">
              © {currentYear} Elmehdi Bouelhrajane. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 text-xs font-bold uppercase tracking-[0.14em] text-theme-muted dark:text-theme-dark-muted">
            <motion.a
              href="#home"
              whileHover={{ color: '#1F6F78' }}
              className="transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ color: '#1F6F78' }}
              className="transition-colors"
            >
              Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ color: '#1F6F78' }}
              className="transition-colors"
            >
              Contact
            </motion.a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs font-medium text-theme-muted dark:text-theme-dark-muted">
              Designed and built with{' '}
              <span className="font-bold text-theme-accent dark:text-theme-dark-accent">
                React
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
