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
      url: '#',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: '#',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:elmehdi@example.com',
      color: 'from-purple-400 to-pink-600'
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center space-y-8"
        >
          {/* Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
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
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group px-8 py-4 rounded-xl bg-gradient-to-r ${link.color} text-white font-semibold transition-all hover:shadow-lg hover:shadow-current/20`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Icon size={20} />
                    <span>{link.label}</span>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-full group-hover:translate-x-full duration-500" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Additional message */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-gray-800/50"
          >
            <p className="text-gray-500 text-sm md:text-base">
              Response time: 24-48 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
