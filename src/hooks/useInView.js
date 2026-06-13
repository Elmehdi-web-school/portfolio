import { useState, useEffect } from 'react'

export const useInView = (options = {}) => {
  const { triggerOnce = false, threshold = 0.1 } = options
  const [ref, setRef] = useState(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (triggerOnce) {
          observer.unobserve(entry.target)
        }
      } else if (!triggerOnce) {
        setInView(false)
      }
    }, { threshold })

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, triggerOnce, threshold])

  return { ref: setRef, inView }
}
