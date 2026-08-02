import { Link } from 'react-router-dom'
import { ArrowRight, Coffee, Users, Sparkles, Check } from 'lucide-react'
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

      {/* Service 1: Infusions naturelles */}
      <section className={styles.serviceDetail}>
        <div className="container">
          <div className={styles.serviceDetailInner}>
            <Reveal variant="left">
              <div className={styles.serviceDetailImage}>
                <img
                  src="/images/infusion.jpeg"
                  alt={t('services_s1_title')}
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal variant="right">
              <div className={styles.serviceDetailText}>
                <div className={styles.serviceIcon}>
                  <Coffee size={24} />
                </div>
                <h2>{t('services_s1_title')}</h2>
                
                {/* Description */}
                <p className={styles.serviceDesc}>{t('services_s1_desc')}</p>
                
                {/* Bénéfices */}
                <div className={styles.benefitsSection}>
                  <h4>{t('services_s1_benefits_title')}</h4>
                  <ul className={styles.benefitsList}>
                    <li><Check size={16} /> {t('services_s1_benefit1')}</li>
                    <li><Check size={16} /> {t('services_s1_benefit2')}</li>
                    <li><Check size={16} /> {t('services_s1_benefit3')}</li>
                    <li><Check size={16} /> {t('services_s1_benefit4')}</li>
                  </ul>
                </div>
                
                {/* Étapes */}
                <div className={styles.stepsSection}>
                  <h4>{t('services_s1_steps_title')}</h4>
                  <ol className={styles.stepsList}>
                    <li>{t('services_s1_step1')}</li>
                    <li>{t('services_s1_step2')}</li>
                    <li>{t('services_s1_step3')}</li>
                    <li>{t('services_s1_step4')}</li>
                  </ol>
                </div>

                {/* Appel à l'action */}
                <Link to="/infusions" className="btn-primary">
                  {t('services_s1_cta')} <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service 2: Petit-déjeuner en entreprise */}
      <section className={`${styles.serviceDetail} ${styles.serviceDetailAlt}`}>
        <div className="container">
          <div className={styles.serviceDetailInner}>
            <Reveal variant="left">
              <div className={styles.serviceDetailText}>
                <div className={styles.serviceIcon}>
                  <Users size={24} />
                </div>
                <h2>{t('services_s2_title')}</h2>
                
                {/* Description */}
                <p className={styles.serviceDesc}>{t('services_s2_desc')}</p>
                
                {/* Bénéfices */}
                <div className={styles.benefitsSection}>
                  <h4>{t('services_s2_benefits_title')}</h4>
                  <ul className={styles.benefitsList}>
                    <li><Check size={16} /> {t('services_s2_benefit1')}</li>
                    <li><Check size={16} /> {t('services_s2_benefit2')}</li>
                    <li><Check size={16} /> {t('services_s2_benefit3')}</li>
                    <li><Check size={16} /> {t('services_s2_benefit4')}</li>
                  </ul>
                </div>
                
                {/* Étapes */}
                <div className={styles.stepsSection}>
                  <h4>{t('services_s2_steps_title')}</h4>
                  <ol className={styles.stepsList}>
                    <li>{t('services_s2_step1')}</li>
                    <li>{t('services_s2_step2')}</li>
                    <li>{t('services_s2_step3')}</li>
                    <li>{t('services_s2_step4')}</li>
                  </ol>
                </div>

                {/* Appel à l'action */}
                <Link to="/contact" className="btn-secondary">
                  {t('services_s2_cta')} <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
            <Reveal variant="right">
              <div className={styles.serviceDetailImage}>
                <img
                  src="/images/petit.jpeg"
                  alt={t('services_s2_title')}
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service 3: Service traiteur */}
      <section className={styles.serviceDetail}>
        <div className="container">
          <div className={styles.serviceDetailInner}>
            <Reveal variant="left">
              <div className={styles.serviceDetailImage}>
                <img
                  src="/images/traiteur.jpeg"
                  alt={t('services_s3_title')}
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal variant="right">
              <div className={styles.serviceDetailText}>
                <div className={styles.serviceIcon}>
                  <Sparkles size={24} />
                </div>
                <h2>{t('services_s3_title')}</h2>
                
                {/* Description */}
                <p className={styles.serviceDesc}>{t('services_s3_desc')}</p>
                
                {/* Bénéfices */}
                <div className={styles.benefitsSection}>
                  <h4>{t('services_s3_benefits_title')}</h4>
                  <ul className={styles.benefitsList}>
                    <li><Check size={16} /> {t('services_s3_benefit1')}</li>
                    <li><Check size={16} /> {t('services_s3_benefit2')}</li>
                    <li><Check size={16} /> {t('services_s3_benefit3')}</li>
                    <li><Check size={16} /> {t('services_s3_benefit4')}</li>
                  </ul>
                </div>
                
                {/* Étapes */}
                <div className={styles.stepsSection}>
                  <h4>{t('services_s3_steps_title')}</h4>
                  <ol className={styles.stepsList}>
                    <li>{t('services_s3_step1')}</li>
                    <li>{t('services_s3_step2')}</li>
                    <li>{t('services_s3_step3')}</li>
                    <li>{t('services_s3_step4')}</li>
                  </ol>
                </div>

                {/* Appel à l'action */}
                <Link to="/contact" className="btn-secondary">
                  {t('services_s3_cta')} <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
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
