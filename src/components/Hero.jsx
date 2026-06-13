import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const codeSnippet = `const portfolio = {
  name: "Elmehdi",
  role: "Full Stack Developer",
  skills: ["React", "Node.js", "MongoDB"],
  passion: "Building scalable apps",
  hiring: true
}`

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Elmehdi
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Bouelhrajane
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl text-gray-400 font-semibold">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base md:text-lg text-gray-500 max-w-lg leading-relaxed">
                Building scalable modern web applications with clean architecture and exceptional user experience. Specializing in React, Node.js, and modern development practices.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-gray-700 text-white font-semibold rounded-lg hover:border-gray-600 hover:bg-white/5 transition-all text-center"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gray-800/50 hover:bg-gray-700 rounded-full transition-colors"
              >
                <Github size={20} className="text-gray-300" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gray-800/50 hover:bg-gray-700 rounded-full transition-colors"
              >
                <Linkedin size={20} className="text-gray-300" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gray-800/50 hover:bg-gray-700 rounded-full transition-colors"
              >
                <Mail size={20} className="text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Code Editor Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="relative bg-gradient-to-br from-secondary/50 to-secondary/30 border border-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-xl"
              whileHover={{ scale: 1.02, borderColor: 'rgb(100, 116, 139)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Code Editor Header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-gray-800/30 bg-black/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-500 font-mono">portfolio.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 space-y-0 font-mono text-sm">
                {codeSnippet.split('\n').map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-gray-300 leading-relaxed"
                  >
                    <span className="text-gray-600">
                      {String(index + 1).padStart(2, ' ')}.
                    </span>{' '}
                    <span className="text-blue-400">
                      {line.includes('const') ? 'const' : line.includes('return') ? 'return' : ''}
                    </span>
                    <span className={
                      line.includes(':') ? 'text-purple-400' : 
                      line.includes('"') ? 'text-green-400' :
                      line.includes('true') ? 'text-orange-400' :
                      ''
                    }>
                      {line.replace(/^const|return/, '')}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 hover:from-blue-500/5 hover:to-purple-500/5 transition-all pointer-events-none" />
            </motion.div>

            {/* Background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
