import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stats = [
    { label: '3+', description: 'Projects Built' },
    { label: 'React', description: 'Specialist' },
    { label: 'MERN', description: 'Stack' },
    { label: 'APIs', description: 'Development' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                Passionate full stack developer focused on building scalable applications, modern interfaces, and high performance systems. I believe in writing clean, maintainable code and creating exceptional user experiences.
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              With expertise in the MERN stack and a strong foundation in modern web technologies, I transform ideas into elegant solutions. I'm committed to continuous learning and staying updated with the latest industry trends and best practices.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all inline-block mt-4"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 border border-gray-800/50 hover:border-gray-700 backdrop-blur-lg cursor-pointer transition-all"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.label}
                  </p>
                  <p className="text-gray-500 text-sm md:text-base">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
