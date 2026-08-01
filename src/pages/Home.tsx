import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Heart, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import { useSeo } from '../hooks/useSeo'
import { useT } from '../data/translations'
import Reveal from '../components/Reveal'
import styles from './Home.module.css'

export default function Home() {
  const { addItem } = useCart()
  const t = useT()
  const products = useProducts()
  const [currentBg, setCurrentBg] = useState(0)

  const backgrounds = [
    '/images/bg-1.jpeg',
    '/images/bg-2.jpeg',
    '/images/bg-3.jpeg',
    '/images/bg-4.jpeg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  useSeo({
    title: t('seo_home_title'),
    description: t('seo_home_desc'),
  })

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <img
          className={styles.heroBgImg}
          src="public/images/bg-1.jpeg"
          alt={t('home_hero_title')}
        />
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

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesGrid}>
            {[
              { icon: Leaf, title: t('home_value1_title'), text: t('home_value1_text') },
              { icon: Heart, title: t('home_value2_title'), text: t('home_value2_text') },
              { icon: Globe, title: t('home_value3_title'), text: t('home_value3_text') },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 120} variant="up">
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
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

      {/* Products preview */}
      <section className={styles.products}>
        <div className="container">
          <Reveal variant="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">{t('home_products_label')}</span>
              <h2 className={styles.sectionTitle}>{t('home_products_title')}</h2>
            </div>
          </Reveal>
          <div className={styles.productsGrid}>
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i * 150} variant="up">
                <div className={styles.productCard} style={{ background: product.color }}>
                  <div className={styles.productImg}>
                    <img src={product.image} alt={`${product.name} BenDjo`} loading="lazy" />
                  </div>
                  <h3 style={{ color: product.accentColor }}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.shortDesc}</p>
                  <div className={styles.productBenefits}>
                    {product.benefits.slice(0, 3).map(b => (
                      <span key={b} className={styles.benefitTag} style={{ color: product.accentColor, borderColor: product.accentColor }}>
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className={styles.productFooter}>
                    <span className={styles.productPrice}>{product.price.toLocaleString('fr-FR')} FCFA</span>
                    <button
                      className={styles.addBtn}
                      style={{ background: product.accentColor }}
                      onClick={() => addItem(product)}
                    >
                      {t('home_add_cart')}
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="up" delay={200}>
            <div className={styles.productsCta}>
              <Link to="/infusions" className="btn-secondary">
                {t('home_view_all')} <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Origin story teaser */}
      <section className={styles.origin}>
        <div className={`container ${styles.originInner}`}>
          <Reveal variant="left">
            <div className={styles.originText}>
              <span className="section-label">{t('home_origin_label')}</span>
              <h2>{t('home_origin_title')}</h2>
              <p>{t('home_origin_text')}</p>
              <Link to="/a-propos" className="btn-secondary">
                {t('home_origin_link')} <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
          <Reveal variant="right">
            <div className={styles.originImage}>
              <img
                src="https://images.pexels.com/photos/4198562/pexels-photo-4198562.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt={t('home_origin_title')}
                loading="lazy"
              />
            </div>
          </Reveal>
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
