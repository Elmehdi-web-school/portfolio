import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-theme-border/80 bg-theme-card/90 shadow-soft-sm backdrop-blur transition-all hover:border-theme-accent/50 hover:bg-theme-card hover:shadow-soft dark:border-theme-dark-border dark:bg-theme-dark-card/90 dark:hover:border-theme-dark-accent/50 dark:hover:bg-theme-dark-card dark:hover:shadow-dark-soft"
    >
      {/* Image Container */}
      <div className="relative h-52 md:h-72 overflow-hidden bg-theme-secondary dark:bg-theme-dark-secondary">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-[100%] h-[80%] mt-10 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-card via-theme-card/20 to-transparent opacity-80 transition-opacity group-hover:opacity-55 dark:from-theme-dark-card dark:via-theme-dark-card/30" />
        <div className="absolute left-1 top-1 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-theme-accent shadow-soft-sm backdrop-blur dark:border-white/10 dark:bg-theme-dark-card/80 dark:text-theme-dark-accent">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-extrabold text-theme-text group-hover:text-theme-accent dark:text-theme-dark-text dark:group-hover:text-theme-dark-accent transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-theme-muted dark:text-theme-dark-muted text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 py-2">
          {project.technologies.map((tech, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-theme-border bg-theme-secondary px-3 py-1 text-xs font-bold text-theme-accent transition-colors hover:bg-theme-hover dark:border-theme-dark-border dark:bg-theme-dark-secondary dark:text-theme-dark-accent dark:hover:bg-theme-dark-hover md:text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-theme-accent px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-theme-ink dark:bg-theme-dark-accent dark:text-theme-dark-bg dark:hover:bg-theme-dark-accentSoft md:text-base"
          >
            <ExternalLink size={16} />
            Live Demo
          </motion.a>

          <motion.a
            href={project.githubUrl}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-theme-border bg-theme-card px-4 py-2.5 text-sm font-bold text-theme-text transition-all hover:bg-theme-hover dark:border-theme-dark-border dark:bg-theme-dark-card dark:text-theme-dark-text dark:hover:bg-theme-dark-hover md:text-base"
          >
            <Github size={16} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
