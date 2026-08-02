import { Link } from 'react-router-dom'
import { ArrowRight, Building2, CheckCircle2, MapPin } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useSeo } from '../hooks/useSeo'
import { useT } from '../data/translations'
import Reveal from '../components/Reveal'
import styles from './Home.module.css'

function AnimatedNumber({ end, suffix = '', delay = 0 }: { end: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (!isVisible) return
    
    const duration = 2000
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
  }, [end, isVisible])

  return (
    <div ref={ref} className={styles.trustNumber}>
      {count}{suffix}
    </div>
  )
}

export default function Home() {
  const t = useT()
  const [currentBg, setCurrentBg] = useState(0)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)

  const backgrounds = [
    '/images/bg-1.jpeg',
    '/images/bg-2.jpeg',
    '/images/bg-3.jpeg',
    '/images/bg-4.jpeg'
  ]

  const galleryImages = [
    '/images/g1.webp',
    '/images/g2.webp',
    '/images/g3.webp',
    '/images/g5.webp',
    '/images/g6.webp',
    '/images/g7.webp',
    '/images/g8.webp',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [])

  const handlePrevImage = () => {
    setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleNextImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length)
  }

  useSeo({
    title: t('seo_home_title'),
    description: t('seo_home_desc'),
  })

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        {backgrounds.map((bg, index) => (
          <img
            key={bg}
            className={`${styles.heroBgImg} ${index === currentBg ? styles.heroBgActive : ''}`}
            src={bg}
            alt={`${t('home_hero_title')} - Background ${index + 1}`}
          />
        ))}
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>{t('home_hero_badge')}</span>
          <h1 className={styles.heroTitle}>
            {t('home_hero_title').split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p className={styles.heroText}>{t('home_hero_text')}</p>
          <div className={styles.heroActions}>
            <Link to="/infusions" className={styles.heroBtnPrimary}>
              {t('home_hero_cta')} <ArrowRight size={18} />
            </Link>
            <Link to="/services" className={styles.heroBtnGhost}>
              {t('home_hero_services')}
            </Link>
          </div>
          <div className={styles.heroScroll}>
            <span className={styles.heroScrollLine} />
            {t('home_hero_scroll')}
          </div>
        </div>
      </section>

      {/* Aperçu À propos */}
      <section className={styles.about}>
        <div className={`container ${styles.aboutInner}`}>
          <Reveal variant="left">
            <div className={styles.aboutImage}>
              <img
                src="/images/about.webp"
                alt={t('home_about_title')}
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal variant="right">
            <div className={styles.aboutText}>
              <span className="section-label">{t('home_about_label')}</span>
              <h2>{t('home_about_title')}</h2>
              <p>{t('home_about_text')}</p>
              <Link to="/a-propos" className="btn-secondary">
                {t('home_about_link')} <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Aperçu Services */}
      <section className={styles.services}>
        <img src="/images/f1.png" alt="" className={styles.servicesDecor1} />
        <img src="/images/f2.png" alt="" className={styles.servicesDecor2} />
        <img src="/images/f3.png" alt="" className={styles.servicesDecor3} />
        <img src="/images/f4.png" alt="" className={styles.servicesDecor4} />
        <img src="/images/f1.png" alt="" className={styles.servicesDecor5} />
        <img src="/images/f2.png" alt="" className={styles.servicesDecor6} />
        <img src="/images/f3.png" alt="" className={styles.servicesDecor7} />
        <img src="/images/f4.png" alt="" className={styles.servicesDecor8} />
        <img src="/images/f1.png" alt="" className={styles.servicesDecor9} />
        <img src="/images/f2.png" alt="" className={styles.servicesDecor10} />
        <img src="/images/f3.png" alt="" className={styles.servicesDecor11} />
        <img src="/images/f4.png" alt="" className={styles.servicesDecor12} />
        <div className="container">
          <Reveal variant="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">{t('home_services_label')}</span>
              <h2 className={styles.sectionTitle}>{t('home_services_title')}</h2>
              <p className={styles.sectionText}>{t('home_services_text')}</p>
            </div>
          </Reveal>
          <div className={styles.servicesGrid}>
            {[
              { image: '/images/infusion.jpeg', title: t('home_services_infusions'), desc: t('home_services_infusions_desc') },
              { image: '/images/petit.jpeg', title: t('home_services_breakfast'), desc: t('home_services_breakfast_desc') },
              { image: '/images/traiteur.jpeg', title: t('home_services_catering'), desc: t('home_services_catering_desc') },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 120} variant="up">
                <div className={styles.serviceCard}>
                  <div className={styles.serviceImage}>
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  <h3>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="up" delay={200}>
            <div className={styles.servicesCta}>
              <Link to="/services" className="btn-secondary">
                {t('home_services_link')} <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className="container">
          <Reveal variant="up">
            <div className={styles.sectionHeader}>
              <h2 className={styles.galleryTitle}>Gallery des infusions</h2>
            </div>
          </Reveal>
          
          <Reveal variant="up" delay={100}>
            <div className={styles.galleryMain}>
              <button 
                className={styles.galleryPrev} 
                onClick={handlePrevImage}
                aria-label="Image précédente"
              >
                <ArrowRight size={24} />
              </button>
              <div className={styles.galleryMainImage}>
                <img src={galleryImages[currentGalleryImage]} alt="BenDjo Gallery" loading="lazy" />
              </div>
              <button 
                className={styles.galleryNext} 
                onClick={handleNextImage}
                aria-label="Image suivante"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <div className={styles.galleryThumbs}>
              {galleryImages.map((img, i) => (
                <div 
                  key={i} 
                  className={`${styles.galleryThumb} ${i === currentGalleryImage ? styles.galleryThumbActive : ''}`}
                  onClick={() => setCurrentGalleryImage(i)}
                >
                  <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <div className={styles.galleryCta}>
              <Link to="/infusions" className="btn-secondary">
                Nos infusions <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bloc de réassurance */}
      <section className={styles.trust}>
        <div className="container">
          <Reveal variant="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">{t('home_trust_label')}</span>
            </div>
          </Reveal>
          <div className={styles.trustGrid}>
            {[
              { icon: Building2, value: 50, suffix: '+', text: t('home_trust_partners_text'), color: '#FFD700' },
              { icon: MapPin, value: 100, suffix: '%', text: t('home_trust_local_text'), color: '#FFD700' },
              { icon: CheckCircle2, value: 100, suffix: '%', text: t('home_trust_natural_text'), color: '#FFD700' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} variant="scale">
                <div className={styles.trustCard}>
                  <div className={styles.trustIcon} style={{ color: item.color }}>
                    <item.icon size={48} strokeWidth={2} />
                  </div>
                  <AnimatedNumber end={item.value} suffix={item.suffix} delay={i * 200} />
                  <div className={styles.trustText}>{item.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <Reveal variant="scale">
            <div className={styles.ctaInner}>
              <h2>{t('home_cta_title')}</h2>
              <p>{t('home_cta_text')}</p>
              <Link to="/infusions" className="btn-orange">
                {t('home_cta_btn')} <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
