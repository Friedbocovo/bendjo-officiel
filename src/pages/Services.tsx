import { Link } from 'react-router-dom'
import { ArrowRight, Coffee, Truck, Sparkles, Check } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { useT } from '../data/translations'
import Reveal from '../components/Reveal'
import styles from './Services.module.css'

export default function Services() {
  const t = useT()

  useSeo({
    title: t('seo_services_title'),
    description: t('seo_services_desc'),
  })

  const services = [
    {
      icon: Coffee,
      title: t('services_s1_title'),
      text: t('services_s1_text'),
      features: [t('services_s1_f1'), t('services_s1_f2'), t('services_s1_f3')],
      img: 'https://images.pexels.com/photos/3752874/pexels-photo-3752874.jpeg?auto=compress&cs=tinysrgb&w=700',
      alt: t('services_s1_title'),
    },
    {
      icon: Truck,
      title: t('services_s2_title'),
      text: t('services_s2_text'),
      features: [t('services_s2_f1'), t('services_s2_f2'), t('services_s2_f3')],
      img: 'https://images.pexels.com/photos/4393072/pexels-photo-4393072.jpeg?auto=compress&cs=tinysrgb&w=700',
      alt: t('services_s2_title'),
    },
    {
      icon: Sparkles,
      title: t('services_s3_title'),
      text: t('services_s3_text'),
      features: [t('services_s3_f1'), t('services_s3_f2'), t('services_s3_f3')],
      img: 'https://images.pexels.com/photos/3033242/pexels-photo-3033242.jpeg?auto=compress&cs=tinysrgb&w=700',
      alt: t('services_s3_title'),
    },
  ]

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal variant="up">
            <span className="section-label">{t('services_label')}</span>
            <h1>{t('services_title')}</h1>
            <p>{t('services_text')}</p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 150} variant="up">
                <div className={styles.serviceCard}>
                  <div className={styles.serviceImg}>
                    <img src={s.img} alt={s.alt} loading="lazy" />
                  </div>
                  <div className={styles.serviceBody}>
                    <div className={styles.serviceIcon}>
                      <s.icon size={24} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <ul className={styles.serviceFeatures}>
                      {s.features.map(f => (
                        <li key={f}><Check size={16} /> {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.how}>
        <div className="container">
          <Reveal variant="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">{t('services_how_label')}</span>
              <h2>{t('services_how_title')}</h2>
            </div>
          </Reveal>
          <div className={styles.steps}>
            {[
              { num: '1', title: t('services_step1_title'), text: t('services_step1_text') },
              { num: '2', title: t('services_step2_title'), text: t('services_step2_text') },
              { num: '3', title: t('services_step3_title'), text: t('services_step3_text') },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 120} variant="up">
                <div className={styles.step}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
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
              <h2>{t('services_cta_title')}</h2>
              <p>{t('services_cta_text')}</p>
              <div className={styles.ctaActions}>
                <Link to="/contact" className="btn-secondary">
                  {t('services_cta_contact')}
                </Link>
                <Link to="/infusions" className="btn-primary">
                  {t('services_cta_order')} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
