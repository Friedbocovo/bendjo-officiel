import { useState, useEffect, useRef } from 'react'

interface TrustStatProps {
  value: string
  icon: React.ComponentType<{ size: number; strokeWidth: number }>
  text: string
  color: string
  delay: number
}

function useCounter(end: number, duration: number, startCounting: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return
    
    const startTime = Date.now()
    
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(end * easeOutQuart)
      
      setCount(current)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, startCounting])

  return count
}

export default function TrustStat({ value, icon: Icon, text, color, delay }: TrustStatProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Extract number from value (e.g., "50+" -> 50, "100%" -> 100)
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0
  const suffix = value.replace(/\d/g, '') // Get non-numeric parts like "+", "%"

  const count = useCounter(numericValue, 2000, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref}>
      <div style={{ color }}>
        <Icon size={48} strokeWidth={2} />
      </div>
      <div>
        {count}{suffix}
      </div>
      <div>{text}</div>
    </div>
  )
}
