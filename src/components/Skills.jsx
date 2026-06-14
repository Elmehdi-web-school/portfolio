import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faBootstrap,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faLaravel,
  faGitAlt,
  faDocker,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faServer, faDatabase, faLeaf, faPalette } from '@fortawesome/free-solid-svg-icons'
import { skills } from '../data/skills'
import { useInView } from '../hooks/useInView'

// Map icon names to actual icon objects
const iconMap = {
  react: faReact,
  tailwind: faPalette,
  bootstrap: faBootstrap,
  js: faJs,
  html5: faHtml5,
  'css3-alt': faCss3Alt,
  'node-js': faNodeJs,
  laravel: faLaravel,
  server: faServer,
  'git-alt': faGitAlt,
  docker: faDocker,
  github: faGithub,
  database: faDatabase,
  leaf: faLeaf
}

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
      const isImageIcon = skill.type === 'image'
      const iconObj = isImageIcon ? null : iconMap[skill.icon]
      return (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.04, y: -4 }}
          className="group flex min-h-[8.75rem] flex-col items-center justify-center gap-3 rounded-2xl border border-theme-border/80 bg-theme-card/80 p-5 shadow-soft-sm backdrop-blur transition-all duration-300 hover:border-theme-accent/50 hover:bg-theme-card dark:border-theme-dark-border dark:bg-theme-dark-card/80 dark:hover:border-theme-dark-accent/50 dark:hover:bg-theme-dark-card"
        >
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-theme-secondary text-theme-accent transition-all duration-300 group-hover:bg-theme-accent group-hover:text-white group-hover:shadow-glow dark:bg-theme-dark-secondary dark:text-theme-dark-accent dark:group-hover:bg-theme-dark-accent dark:group-hover:text-theme-dark-bg">
            {isImageIcon ? (
              <img 
                src={`/images/${skill.icon}`} 
                alt={skill.name}
                className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            ) : iconObj ? (
              <FontAwesomeIcon 
                icon={iconObj}
                className="text-2xl transition-colors duration-300"
              />
            ) : null}
          </div>
          <p className="text-theme-muted group-hover:text-theme-text dark:text-theme-dark-muted dark:group-hover:text-theme-dark-text font-medium text-sm text-center transition-colors duration-300">
            {skill.name}
          </p>
        </motion.div>
      )
    })
  }

  return (
    <section id="skills" className="px-4 py-20 md:px-8 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="section-kicker">Toolkit</div>
          <h2 className="section-title mb-4">
            Skills & Technologies
          </h2>
          <p className="section-copy max-w-2xl">
            Expertly crafted solutions using modern web technologies. Specialized in building scalable, performant, and user-friendly applications with a focus on best practices and clean architecture.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Frontend */}
          <div className="space-y-6 rounded-3xl border border-theme-border/70 bg-theme-secondary/40 p-5 dark:border-theme-dark-border dark:bg-theme-dark-secondary/40 md:p-7">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1 rounded-full bg-theme-accent dark:bg-theme-dark-accent" />
              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-extrabold text-theme-text dark:text-theme-dark-text"
              >
                Frontend
              </motion.h3>
            </div>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {renderSkillCards(skills.frontend)}
            </motion.div>
          </div>

          {/* Backend */}
          <div className="space-y-6 rounded-3xl border border-theme-border/70 bg-theme-secondary/40 p-5 dark:border-theme-dark-border dark:bg-theme-dark-secondary/40 md:p-7">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1 rounded-full bg-theme-warm dark:bg-theme-dark-warm" />
              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-extrabold text-theme-text dark:text-theme-dark-text"
              >
                Backend
              </motion.h3>
            </div>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {renderSkillCards(skills.backend)}
            </motion.div>
          </div>

          {/* Databases */}
          <div className="space-y-6 rounded-3xl border border-theme-border/70 bg-theme-secondary/40 p-5 dark:border-theme-dark-border dark:bg-theme-dark-secondary/40 md:p-7">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1 rounded-full bg-theme-fresh dark:bg-theme-dark-fresh" />
              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-extrabold text-theme-text dark:text-theme-dark-text"
              >
                Databases
              </motion.h3>
            </div>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {renderSkillCards(skills.databases)}
            </motion.div>
          </div>

          {/* Tools */}
          <div className="space-y-6 rounded-3xl border border-theme-border/70 bg-theme-secondary/40 p-5 dark:border-theme-dark-border dark:bg-theme-dark-secondary/40 md:p-7">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1 rounded-full bg-theme-accentSoft dark:bg-theme-dark-accentSoft" />
              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-extrabold text-theme-text dark:text-theme-dark-text"
              >
                Tools & Platforms
              </motion.h3>
            </div>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {renderSkillCards(skills.tools)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
