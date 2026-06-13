import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { skills } from '../data/skills'
import { useInView } from '../hooks/useInView'

export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const renderSkillCards = (skillList) => {
    return skillList.map((skill, index) => {
      const IconComponent = Icons[skill.icon]
      return (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.08, y: -8 }}
          className="group relative p-6 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 border border-gray-800/50 hover:border-gray-700 backdrop-blur-lg transition-all cursor-pointer"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative">
            <div className="mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg w-fit group-hover:scale-110 transition-transform">
              {IconComponent && (
                <IconComponent className="w-6 h-6 text-blue-400" />
              )}
            </div>
            <p className="text-white font-semibold text-lg">
              {skill.name}
            </p>
          </div>
        </motion.div>
      )
    })
  }

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl">
            Proficient in modern web technologies and best practices
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Frontend */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-white mb-6"
            >
              Frontend
            </motion.h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            >
              {renderSkillCards(skills.frontend)}
            </motion.div>
          </div>

          {/* Backend */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-white mb-6"
            >
              Backend
            </motion.h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {renderSkillCards(skills.backend)}
            </motion.div>
          </div>

          {/* Databases */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-white mb-6"
            >
              Databases
            </motion.h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {renderSkillCards(skills.databases)}
            </motion.div>
          </div>

          {/* Tools */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-white mb-6"
            >
              Tools & Platforms
            </motion.h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {renderSkillCards(skills.tools)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
