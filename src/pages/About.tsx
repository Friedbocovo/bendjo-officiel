import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Sparkles } from 'lucide-react'
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

      {/* Story */}
      <section className={styles.story}>
        <div className={`container ${styles.storyInner}`}>
          <Reveal variant="left">
            <div className={styles.storyImage}>
              <img
                src="https://images.pexels.com/photos/4198562/pexels-photo-4198562.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt={t('about_story_title')}
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal variant="right">
            <div className={styles.storyText}>
              <span className="section-label">{t('about_story_label')}</span>
              <h2>{t('about_story_title')}</h2>
              <p>{t('about_story_p1')}</p>
              <p>{t('about_story_p2')}</p>
              <p>{t('about_story_p3')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className={styles.mvv}>
        <div className="container">
          <div className={styles.mvvGrid}>
            {[
              { icon: Target, title: t('about_mission_title'), text: t('about_mission_text') },
              { icon: Eye, title: t('about_vision_title'), text: t('about_vision_text') },
              { icon: Heart, title: t('about_values_title'), text: t('about_values_text') },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 120} variant="up">
                <div className={styles.mvvCard}>
                  <div className={styles.mvvIcon}>
                    <v.icon size={24} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className="container">
          <Reveal variant="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">{t('about_process_label')}</span>
              <h2>{t('about_process_title')}</h2>
            </div>
          </Reveal>
          <div className={styles.processSteps}>
            {[
              { num: '01', title: t('about_step1_title'), text: t('about_step1_text') },
              { num: '02', title: t('about_step2_title'), text: t('about_step2_text') },
              { num: '03', title: t('about_step3_title'), text: t('about_step3_text') },
              { num: '04', title: t('about_step4_title'), text: t('about_step4_text') },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100} variant="up">
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
              <Sparkles size={32} />
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
