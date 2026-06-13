import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/40 to-secondary/20 border border-gray-800/50 hover:border-gray-700 backdrop-blur-lg transition-all"
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 py-2">
          {project.technologies.map((tech, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-xs md:text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 rounded-full hover:border-blue-500/50 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all text-sm md:text-base"
          >
            <ExternalLink size={16} />
            Live Demo
          </motion.a>

          <motion.a
            href={project.githubUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-gray-600 transition-all text-sm md:text-base"
          >
            <Github size={16} />
            GitHub
          </motion.a>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all pointer-events-none" />
    </motion.div>
  )
}
