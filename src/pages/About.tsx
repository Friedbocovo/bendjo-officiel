import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Users } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { useT } from '../data/translations'
import Reveal from '../components/Reveal'
import styles from './About.module.css'

export default function About() {
  const t = useT()

  useSeo({
    title: t('seo_about_title'),
    description: t('seo_about_desc'),
  })

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal variant="up">
            <span className="section-label">{t('about_label')}</span>
            <h1>{t('about_title')}</h1>
            <p>{t('about_text')}</p>
          </Reveal>
        </div>
      </section>

      {/* Naissance de BenDjo */}
      <section className={styles.birth}>
        <div className={`container ${styles.birthInner}`}>
          <Reveal variant="left">
            <div className={styles.birthImage}>
              <img
                src="/images/about.webp"
                alt={t('about_birth_title')}
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal variant="right">
            <div className={styles.birthText}>
              <span className="section-label">{t('about_birth_label')}</span>
              <h2>{t('about_birth_title')}</h2>
              <p>{t('about_birth_p1')}</p>
              <p>{t('about_birth_p2')}</p>
              <p>{t('about_birth_p3')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pourquoi ce domaine */}
      <section className={styles.domain}>
        <div className="container">
          <Reveal variant="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">{t('about_domain_label')}</span>
              <h2>{t('about_domain_title')}</h2>
            </div>
          </Reveal>
          <div className={styles.domainContent}>
            <Reveal variant="up" delay={100}>
              <div className={styles.domainText}>
                <p>{t('about_domain_p1')}</p>
                <p>{t('about_domain_p2')}</p>
                <p>{t('about_domain_p3')}</p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <div className={styles.domainValues}>
                <div className={styles.domainValueCard}>
                  <Heart size={32} className={styles.domainValueIcon} />
                  <h4>{t('about_domain_value1_title')}</h4>
                  <p>{t('about_domain_value1_text')}</p>
                </div>
                <div className={styles.domainValueCard}>
                  <Users size={32} className={styles.domainValueIcon} />
                  <h4>{t('about_domain_value2_title')}</h4>
                  <p>{t('about_domain_value2_text')}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Présentation de la co-fondatrice */}
      <section className={styles.founder}>
        <div className={`container ${styles.founderInner}`}>
          <Reveal variant="left">
            <div className={styles.founderText}>
              <span className="section-label">{t('about_founder_label')}</span>
              <h2>{t('about_founder_name')}</h2>
              <p className={styles.founderTitle}>{t('about_founder_title')}</p>
              <p>{t('about_founder_bio_p1')}</p>
              <p>{t('about_founder_bio_p2')}</p>
              <p>{t('about_founder_bio_p3')}</p>
            </div>
          </Reveal>
          <Reveal variant="right">
            <div className={styles.founderImage}>
              <img
                src="/images/benedict.webp"
                alt={t('about_founder_name')}
                loading="lazy"
              />
              <div className={styles.founderImageOverlay}>
                <p className={styles.founderImageQuote}>{t('about_founder_quote')}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <Reveal variant="scale">
            <div className={styles.ctaInner}>
              <h2>{t('about_cta_title')}</h2>
              <p>{t('about_cta_text')}</p>
              <Link to="/infusions" className="btn-primary">
                {t('about_cta_btn')} <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
