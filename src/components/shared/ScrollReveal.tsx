import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/use-scroll-reveal'

export function ScrollReveal({ children, className = '' }: {
  children: ReactNode
  className?: string
}) {
  const ref = useScrollReveal()
  return <div ref={ref} className={`scroll-reveal ${className}`}>{children}</div>
}
