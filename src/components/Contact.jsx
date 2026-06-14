import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Elmehdi-web-school',
      color: 'neutral'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/elmehdi-bouelhrajane',
      color: 'accent'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:elmehdibouelhrajane@gmail.com',
      color: 'soft'
    }
  ]

  return (
    <section id="contact" className="px-4 py-20 md:px-8 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative overflow-hidden rounded-3xl border border-theme-border/80 bg-theme-card/80 px-5 py-12 text-center shadow-soft backdrop-blur-xl dark:border-theme-dark-border dark:bg-theme-dark-card/80 dark:shadow-dark-soft md:px-10 md:py-16"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#1F6F78,#C77B38,#7A9B68)]" />
          {/* Title */}
          <motion.div variants={itemVariants}>
            <div className="section-kicker">Contact</div>
            <h2 className="section-title mb-4">
              Let's Build Something Great
            </h2>
            <p className="section-copy max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello.
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group rounded-2xl border border-theme-border bg-theme-secondary/70 px-8 py-4 font-bold text-theme-text shadow-soft-sm transition-all duration-300 hover:border-theme-accent/50 hover:bg-theme-card dark:border-theme-dark-border dark:bg-theme-dark-secondary/70 dark:text-theme-dark-text dark:hover:border-theme-dark-accent/50 dark:hover:bg-theme-dark-card"
                >
                  <div className="flex items-center justify-center gap-2 relative z-10">
                    <Icon size={20} className="text-theme-accent dark:text-theme-dark-accent" />
                    <span>{link.label}</span>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Additional message */}
          <motion.div
            variants={itemVariants}
            className="mt-8 border-t border-theme-border pt-8 dark:border-theme-dark-border"
          >
            <p className="text-theme-muted dark:text-theme-dark-muted text-sm md:text-base">
              Response time: 2-24 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
