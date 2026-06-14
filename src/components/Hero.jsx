import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const codeSnippet = `const portfolio = {
  name: "Elmehdi",
  role: "Full Stack Developer",
  skills: ["React", "Node.js", "MongoDB"],
  passion: "Building scalable apps",
  hiring: true
}`

const highlights = [
  { value: 'MERN', label: 'Stack' },
  { value: '3+', label: 'Projects' },
  { value: 'UI/UX', label: 'Focused' },
]

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
    <section id="home" className="min-h-screen flex items-center px-4 pb-16 pt-28 md:px-8 md:pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.03fr_0.97fr] gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="section-kicker">
              <Sparkles size={14} />
              Available for impactful web projects
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-theme-text dark:text-theme-dark-text leading-[0.98]">
                Elmehdi
                <br />
                <span className="bg-[linear-gradient(110deg,#1F6F78_0%,#C77B38_55%,#7A9B68_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(110deg,#79C3C4_0%,#E3A15E_55%,#A7C77B_100%)]">
                  Bouelhrajane
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl text-theme-ink dark:text-theme-dark-ink font-bold">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="section-copy max-w-xl">
                Building scalable modern web applications with clean architecture and exceptional user experience. Specializing in React, Node.js, and modern development practices.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-theme-border/80 bg-theme-card/70 shadow-soft-sm backdrop-blur dark:border-theme-dark-border dark:bg-theme-dark-card/70"
            >
              {highlights.map((item) => (
                <div key={item.label} className="border-r border-theme-border/70 px-4 py-4 last:border-r-0 dark:border-theme-dark-border">
                  <p className="text-lg font-extrabold text-theme-accent dark:text-theme-dark-accent md:text-2xl">
                    {item.value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-theme-muted dark:text-theme-dark-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 rounded-xl bg-theme-ink px-8 py-3.5 font-bold text-white shadow-glow transition-all hover:bg-theme-accent dark:bg-theme-dark-accent dark:text-theme-dark-bg dark:hover:bg-theme-dark-accentSoft"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-theme-border bg-theme-card/80 px-8 py-3.5 text-center font-bold text-theme-text shadow-soft-sm backdrop-blur transition-all hover:bg-theme-hover dark:border-theme-dark-border dark:bg-theme-dark-card/80 dark:text-theme-dark-text dark:hover:bg-theme-dark-hover"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label="GitHub profile"
                className="p-3 bg-theme-card hover:bg-theme-hover border border-theme-border dark:bg-theme-dark-card dark:hover:bg-theme-dark-hover dark:border-theme-dark-border rounded-full transition-colors shadow-soft-sm dark:shadow-dark-soft"
              >
                <Github size={20} className="text-theme-accent dark:text-theme-dark-accent" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label="LinkedIn profile"
                className="p-3 bg-theme-card hover:bg-theme-hover border border-theme-border dark:bg-theme-dark-card dark:hover:bg-theme-dark-hover dark:border-theme-dark-border rounded-full transition-colors shadow-soft-sm dark:shadow-dark-soft"
              >
                <Linkedin size={20} className="text-theme-accent dark:text-theme-dark-accent" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label="Email Elmehdi"
                className="p-3 bg-theme-card hover:bg-theme-hover border border-theme-border dark:bg-theme-dark-card dark:hover:bg-theme-dark-hover dark:border-theme-dark-border rounded-full transition-colors shadow-soft-sm dark:shadow-dark-soft"
              >
                <Mail size={20} className="text-theme-accent dark:text-theme-dark-accent" />
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
            <div className="absolute -left-6 top-8 hidden rounded-2xl border border-theme-border/80 bg-theme-card/90 px-4 py-3 shadow-soft-sm backdrop-blur dark:border-theme-dark-border dark:bg-theme-dark-card/90 md:block">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-theme-muted dark:text-theme-dark-muted">
                Status
              </p>
              <p className="text-sm font-extrabold text-theme-fresh dark:text-theme-dark-fresh">
                Ready to build
              </p>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-2xl border border-white/70 bg-theme-card/90 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-theme-dark-card/90 dark:shadow-dark-soft"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Code Editor Header */}
              <div className="flex items-center justify-between border-b border-theme-border/80 bg-theme-secondary/90 px-6 py-3 dark:border-theme-dark-border dark:bg-theme-dark-secondary/90">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#D36B5D]" />
                  <div className="w-3 h-3 rounded-full bg-[#D5A84A]" />
                  <div className="w-3 h-3 rounded-full bg-[#6F9D7A]" />
                </div>
                <span className="text-xs text-theme-muted dark:text-theme-dark-muted font-mono">portfolio.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 space-y-1 font-mono text-sm md:p-8">
                {codeSnippet.split('\n').map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="grid grid-cols-[2.5rem_1fr] text-theme-muted dark:text-theme-dark-muted leading-relaxed"
                  >
                    <span className="select-none text-theme-accentSoft dark:text-theme-dark-accentSoft">
                      {String(index + 1).padStart(2, ' ')}.
                    </span>{' '}
                    <span className="text-theme-accent dark:text-theme-dark-accent">
                      {line.includes('const') ? 'const' : line.includes('return') ? 'return' : ''}
                      <span className={
                        line.includes('"') ? 'text-theme-warm dark:text-theme-dark-warm' :
                        line.includes('true') ? 'text-theme-fresh dark:text-theme-dark-fresh' :
                        line.includes(':') ? 'text-theme-text dark:text-theme-dark-text' :
                        'text-theme-muted dark:text-theme-dark-muted'
                      }>
                        {line.replace(/^const|return/, '')}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-theme-border/80 bg-theme-secondary/60 px-6 py-4 dark:border-theme-dark-border dark:bg-theme-dark-secondary/60">
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'Tailwind'].map((tool) => (
                    <span key={tool} className="rounded-full border border-theme-border bg-theme-card px-3 py-1 text-xs font-bold text-theme-accent dark:border-theme-dark-border dark:bg-theme-dark-card dark:text-theme-dark-accent">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="absolute -inset-4 rounded-[1.75rem] border border-theme-border/70 bg-theme-secondary/60 dark:border-theme-dark-border/70 dark:bg-theme-dark-secondary/60 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
