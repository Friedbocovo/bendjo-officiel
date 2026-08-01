import { useReveal } from '../hooks/useReveal'
import styles from './Reveal.module.css'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  variant?: 'up' | 'left' | 'right' | 'scale' | 'fade'
  className?: string
}

export default function Reveal({ children, delay = 0, variant = 'up', className = '' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const variantClass = styles[variant] || styles.up

  return (
    <div
      ref={ref}
      className={`${variantClass} ${visible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
