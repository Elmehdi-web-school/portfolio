import { motion } from 'framer-motion'
import { Code2, Layers, Rocket, Workflow } from 'lucide-react'
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
    { label: '3+', description: 'Projects Built', icon: Rocket },
    { label: 'React', description: 'Specialist', icon: Code2 },
    { label: 'MERN', description: 'Stack', icon: Layers },
    { label: 'APIs', description: 'Development', icon: Workflow },
  ]

  return (
    <section id="about" className="px-4 py-20 md:px-8 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <div className="section-kicker">About</div>
              <h2 className="section-title mb-6">About Me</h2>
              <p className="section-copy">
                I build digital products with a strong focus on performance, scalability, and long-term maintainability.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-7">
              <p className="section-copy">
                My work revolves around full stack development, where I combine
                modern frontend technologies with robust backend architecture to
                create applications that are not only functional, but thoughtfully
                engineered.
                <br /><br />
                I'm constantly exploring better ways to structure code, design
                efficient systems, and improve development workflows because for
                me, software development is not only about making things work,
                but about building them the right way.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block rounded-xl border border-theme-accent bg-theme-accent px-6 py-3 font-bold text-white shadow-glow transition-all hover:bg-theme-ink dark:border-theme-dark-accent dark:bg-theme-dark-accent dark:text-theme-dark-bg dark:hover:bg-theme-dark-accentSoft"
            >
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-theme-border/80 bg-theme-card/80 p-6 shadow-soft-sm backdrop-blur transition-all hover:border-theme-accent/50 hover:bg-theme-card dark:border-theme-dark-border dark:bg-theme-dark-card/80 dark:hover:border-theme-dark-accent/50 dark:hover:bg-theme-dark-card"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1F6F78,#C77B38,#7A9B68)] opacity-80" />
                <div className="relative">
                  <div className="mb-6 grid h-11 w-11 place-items-center rounded-xl bg-theme-secondary text-theme-accent transition-colors group-hover:bg-theme-accent group-hover:text-white dark:bg-theme-dark-secondary dark:text-theme-dark-accent dark:group-hover:bg-theme-dark-accent dark:group-hover:text-theme-dark-bg">
                    <stat.icon size={21} />
                  </div>
                  <p className="text-3xl md:text-4xl font-extrabold text-theme-text dark:text-theme-dark-text mb-2">
                    {stat.label}
                  </p>
                  <p className="text-theme-muted dark:text-theme-dark-muted text-sm md:text-base font-medium">
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

