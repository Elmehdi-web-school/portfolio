import { motion } from 'framer-motion'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800/30 bg-gradient-to-t from-secondary/50 to-transparent py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Elmehdi Bouelhrajane. All rights reserved.
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-6 text-xs text-gray-500">
            <motion.a
              href="#"
              whileHover={{ color: '#ffffff' }}
              className="transition-colors"
            >
              Privacy
            </motion.a>
            <span>•</span>
            <motion.a
              href="#"
              whileHover={{ color: '#ffffff' }}
              className="transition-colors"
            >
              Terms
            </motion.a>
            <span>•</span>
            <motion.a
              href="#"
              whileHover={{ color: '#ffffff' }}
              className="transition-colors"
            >
              Sitemap
            </motion.a>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs">
              Designed & built with <span className="text-red-500">♥</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
