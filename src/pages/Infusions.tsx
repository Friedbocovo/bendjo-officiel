import { useState } from 'react'
import { Plus, Minus, ShoppingBag, Check, Leaf } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import { useCart } from '../context/CartContext'
import { useSeo } from '../hooks/useSeo'
import { useT } from '../data/translations'
import { usePreferences } from '../context/PreferencesContext'
import Reveal from '../components/Reveal'
import styles from './Infusions.module.css'

const WHATSAPP_NUMBER = '2290162014161'

export default function Infusions() {
  const { items, addItem, updateQuantity, removeItem, total, clearCart, itemCount } = useCart()
  const [added, setAdded] = useState<string | null>(null)
  const t = useT()
  const { language } = usePreferences()

  useSeo({
    title: t('seo_infusions_title'),
    description: t('seo_infusions_desc'),
  })

  const getProductName = (nameKey: string) => {
    if (nameKey === 'product_hibiscus_name') return t('product_hibiscus_name')
    if (nameKey === 'product_basilic_name') return t('product_basilic_name')
    return t('product_citronnelle_name')
  }

  const handleAdd = (productId: string) => {
    const product = PRODUCTS.find(p => p.id === productId)
    if (product) {
      addItem(product)
      setAdded(productId)
      setTimeout(() => setAdded(null), 1500)
    }
  }

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return
    const lines = items.map(i => `• ${getProductName(i.product.nameKey)} x${i.quantity} — ${(i.product.price * i.quantity).toLocaleString('fr-FR')} FCFA`)
    const totalLine = `\n${t('infusions_total')} : ${total.toLocaleString('fr-FR')} FCFA`
    const greeting = language === 'fr'
      ? `Bonjour BenDjo ! Je souhaite commander :\n\n`
      : `Hello BenDjo! I would like to order:\n\n`
    const ending = language === 'fr'
      ? `\n\nMerci de me confirmer la disponibilité.`
      : `\n\nPlease confirm availability.`
    const msg = `${greeting}${lines.join('\n')}${totalLine}${ending}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal variant="up">
            <span className="section-label">{t('infusions_label')}</span>
            <h1>{t('infusions_title')}</h1>
            <p>{t('infusions_text')}</p>
          </Reveal>
        </div>
      </section>

      {/* Section éducative - Format Héro avec badges */}
      <section className={styles.eduSection}>
        <div className="container">
          <Reveal variant="up">
            <div className={styles.eduHero}>
              <div className={styles.eduHeroContent}>
                <span className={styles.eduBadge}>🍃 100% Naturel</span>
                <h2 className={styles.eduHeroTitle}>Infusions naturelles du Bénin</h2>
                <p className={styles.eduHeroText}>{t('infusions_edu_def_text')}</p>
              </div>
              
              <div className={styles.eduStats}>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>💧</div>
                  <div className={styles.statContent}>
                    <h4>{t('infusions_edu_why_benefit1')}</h4>
                    <p>{t('infusions_edu_why_benefit1_desc')}</p>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>🌿</div>
                  <div className={styles.statContent}>
                    <h4>{t('infusions_edu_why_benefit2')}</h4>
                    <p>{t('infusions_edu_why_benefit2_desc')}</p>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>🇧🇯</div>
                  <div className={styles.statContent}>
                    <h4>{t('infusions_edu_bendjo_benefit1')}</h4>
                    <p>{t('infusions_edu_bendjo_benefit1_desc')}</p>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>🚫</div>
                  <div className={styles.statContent}>
                    <h4>{t('infusions_edu_bendjo_benefit2')}</h4>
                    <p>{t('infusions_edu_bendjo_benefit2_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className={styles.products}>
        <div className="container">
          <div className={styles.productsGrid}>
            {PRODUCTS.map((product, i) => {
              const inCart = items.find(it => it.product.id === product.id)
              const name = getProductName(product.nameKey)
              const desc = product.descKey === 'product_hibiscus_desc' ? t('product_hibiscus_desc') : product.descKey === 'product_basilic_desc' ? t('product_basilic_desc') : t('product_citronnelle_desc')
              return (
                <Reveal key={product.id} delay={i * 150} variant="up">
                  <div className={styles.productCard} style={{ background: product.color }}>
                    <div className={styles.productImg}>
                      <img src={product.image} alt={`${name} BenDjo`} loading="lazy" />
                      <div className={styles.productBadge} style={{ background: product.accentColor }}>
                        <Leaf size={14} /> {t('infusions_natural_badge')}
                      </div>
                    </div>
                    <div className={styles.productBody}>
                      <h3 style={{ color: product.accentColor }}>{name}</h3>
                      <p className={styles.productDesc}>{desc}</p>

                      <div className={styles.benefits}>
                        <span className={styles.benefitsLabel}>{t('infusions_benefits_label')}</span>
                        <div className={styles.benefitTags}>
                          {product.benefits.map(b => (
                            <span key={b} className={styles.benefitTag} style={{ color: product.accentColor, borderColor: product.accentColor }}>
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className={styles.productMeta}>
                        <div>
                          <span className={styles.format}>{t(product.formatKey)}</span>
                          <span className={styles.price}>{product.price.toLocaleString('fr-FR')} FCFA</span>
                        </div>
                      </div>

                      {inCart ? (
                        <div className={styles.qtyRow}>
                          <div className={styles.qty}>
                            <button onClick={() => updateQuantity(product.id, inCart.quantity - 1)} aria-label="-">
                              <Minus size={16} />
                            </button>
                            <span>{inCart.quantity}</span>
                            <button onClick={() => updateQuantity(product.id, inCart.quantity + 1)} aria-label="+">
                              <Plus size={16} />
                            </button>
                          </div>
                          <button className={styles.removeLink} onClick={() => removeItem(product.id)}>
                            {t('infusions_remove')}
                          </button>
                        </div>
                      ) : (
                        <button
                          className={styles.addBtn}
                          style={{ background: product.accentColor }}
                          onClick={() => handleAdd(product.id)}
                        >
                          {added === product.id ? (
                            <><Check size={18} /> {t('infusions_added')}</>
                          ) : (
                            <><Plus size={18} /> {t('infusions_add_cart')}</>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {items.length > 0 && (
        <section className={styles.summary}>
          <div className="container">
            <Reveal variant="up">
              <div className={styles.summaryCard}>
                <div className={styles.summaryHeader}>
                  <ShoppingBag size={20} />
                  <h3>{t('infusions_summary')} ({itemCount} {itemCount > 1 ? t('infusions_articles') : t('infusions_article')})</h3>
                </div>
                <ul className={styles.summaryList}>
                  {items.map(item => (
                    <li key={item.product.id}>
                      <span>{getProductName(item.product.nameKey)} x{item.quantity}</span>
                      <span>{(item.product.price * item.quantity).toLocaleString('fr-FR')} FCFA</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.summaryTotal}>
                  <span>{t('infusions_total')}</span>
                  <span>{total.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className={styles.summaryActions}>
                  <button className={`btn-primary ${styles.whatsappBtn}`} onClick={handleWhatsAppOrder}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.124 1.528 5.858L0 24l6.334-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.213-3.73.888.928-3.627-.234-.373A9.818 9.818 0 1112 21.818z"/>
                    </svg>
                    {t('infusions_order_whatsapp')}
                  </button>
                  <button className={styles.clearBtn} onClick={clearCart}>
                    {t('infusions_clear_cart')}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </div>
  )
}
