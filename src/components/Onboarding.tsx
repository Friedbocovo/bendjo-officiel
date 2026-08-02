import { useState, useEffect } from 'react'
import styles from './Onboarding.module.css'

interface OnboardingProps {
  onComplete: () => void
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [progress, setProgress] = useState(0)
  const [showBendjo, setShowBendjo] = useState(false)

  useEffect(() => {
    // BenDjo appears after all 3 products (after 3 seconds)
    setTimeout(() => setShowBendjo(true), 3000)

    // Progress bar animation starts immediately
    const duration = 5000 // 5 seconds
    const interval = 50 // Update every 50ms
    const increment = (100 / duration) * interval

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(progressInterval)
          // Complete onboarding and redirect
          setTimeout(() => onComplete(), 300)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  return (
    <div className={styles.onboarding}>
      {/* Products Animation */}
      <div className={styles.productsContainer}>
        {/* Hibiscus - First: From Left (0-1s) */}
        <div className={styles.productItem}>
          <div className={`${styles.productImage} ${styles.fromLeft}`}>
            <img 
              src="/images/on-1.webp" 
              alt="Hibiscus" 
            />
          </div>
          <div className={`${styles.productLabel} ${styles.labelFromLeft}`}>
            Hibiscus
          </div>
        </div>

        {/* Basilic - Second: From Top (1-2s) */}
        <div className={styles.productItem}>
          <div className={`${styles.productImage} ${styles.fromTop}`}>
            <img 
              src="/images/on-2.webp" 
              alt="Basilic" 
            />
          </div>
          <div className={`${styles.productLabel} ${styles.labelFromBottom}`}>
            Basilic
          </div>
        </div>

        {/* Citronnelle - Third: From Right (2-3s) */}
        <div className={styles.productItem}>
          <div className={`${styles.productImage} ${styles.fromRight}`}>
            <img 
              src="/images/on-3.webp" 
              alt="Citronnelle" 
            />
          </div>
          <div className={`${styles.productLabel} ${styles.labelFromRight}`}>
            Citronnelle
          </div>
        </div>
      </div>

      {/* BenDjo Logo - Appears after all 3 products */}
      <div className={`${styles.bendjoLogo} ${showBendjo ? styles.showBendjo : ''}`}>
        <div className={styles.logoContainer}>
          <img src="/images/logo-bendjo.jpeg" alt="BenDjo" className={styles.logoImage} />
          <div className={styles.brandText}>
            <span className={styles.letter} style={{ animationDelay: '0.1s' }}>B</span>
            <span className={styles.letter} style={{ animationDelay: '0.2s' }}>e</span>
            <span className={styles.letter} style={{ animationDelay: '0.3s' }}>n</span>
            <span className={`${styles.letter} ${styles.letterGreen}`} style={{ animationDelay: '0.4s' }}>D</span>
            <span className={`${styles.letter} ${styles.letterGreen}`} style={{ animationDelay: '0.5s' }}>j</span>
            <span className={`${styles.letter} ${styles.letterGreen}`} style={{ animationDelay: '0.6s' }}>o</span>
          </div>
        </div>
      </div>

      {/* Progress Bar - Starts immediately */}
      <div className={styles.progressSection}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className={styles.progressText}>
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  )
}
