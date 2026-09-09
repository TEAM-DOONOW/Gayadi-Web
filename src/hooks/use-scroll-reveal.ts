import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches || !('IntersectionObserver' in window)) {
      element.dataset.revealed = 'true'
      return
    }

    element.dataset.revealed = 'false'
    element.dataset.revealReady = 'true'
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) reveal()
    }, { threshold: 0.15 })
    const reveal = () => {
      element.dataset.revealed = 'true'
      observer.disconnect()
    }
    observer.observe(element)

    const onMotionChange = () => { if (motion.matches) reveal() }
    motion.addEventListener('change', onMotionChange)
    return () => {
      observer?.disconnect()
      motion.removeEventListener('change', onMotionChange)
      delete element.dataset.revealReady
    }
  }, [])

  return ref
}
