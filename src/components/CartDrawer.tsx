import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { useT } from '../data/translations'
import { usePreferences } from '../context/PreferencesContext'
import styles from './CartDrawer.module.css'

const WHATSAPP_NUMBER = '22901620141661'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, clearCart } = useCart()
  const t = useT()
  const { language } = usePreferences()

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return
    const lines = items.map(i => `• ${i.product.nameKey === 'product_hibiscus_name' ? t('product_hibiscus_name') : i.product.nameKey === 'product_basilic_name' ? t('product_basilic_name') : t('product_citronnelle_name')} x${i.quantity} — ${(i.product.price * i.quantity).toLocaleString('fr-FR')} FCFA`)
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

  const getProductName = (nameKey: string) => {
    if (nameKey === 'product_hibiscus_name') return t('product_hibiscus_name')
    if (nameKey === 'product_basilic_name') return t('product_basilic_name')
    return t('product_citronnelle_name')
  }

  if (!isOpen) return null

  return (
    <>
      <div className={styles.backdrop} onClick={closeCart} />
      <aside className={styles.drawer}>
        <div className={styles.header}>
          <div className={styles.title}>
            <ShoppingBag size={20} />
            <span>{t('cart_title')}</span>
            {items.length > 0 && <span className={styles.count}>{items.reduce((s, i) => s + i.quantity, 0)}</span>}
          </div>
          <button className={styles.closeBtn} onClick={closeCart} aria-label={t('cart_close')}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <ShoppingBag size={48} strokeWidth={1} />
              <p>{t('cart_empty')}</p>
              <Link to="/infusions" className="btn-primary" onClick={closeCart}>
                {t('cart_discover')}
              </Link>
            </div>
          ) : (
            <ul className={styles.list}>
              {items.map(item => (
                <li key={item.product.id} className={styles.item}>
                  <div className={styles.itemImg} style={{ background: item.product.color }}>
                    <img src={item.product.image} alt={getProductName(item.product.nameKey)} />
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{getProductName(item.product.nameKey)}</p>
                    <p className={styles.itemFormat}>{t(item.product.formatKey)}</p>
                    <p className={styles.itemPrice} style={{ color: item.product.accentColor }}>
                      {(item.product.price * item.quantity).toLocaleString('fr-FR')} FCFA
                    </p>
                  </div>
                  <div className={styles.itemActions}>
                    <div className={styles.qty}>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <button className={styles.removeBtn} onClick={() => removeItem(item.product.id)}>
                      <Trash2 size={15} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <span>{t('cart_total')}</span>
              <span className={styles.totalAmount}>{total.toLocaleString('fr-FR')} FCFA</span>
            </div>
            <button className={`btn-primary ${styles.whatsappBtn}`} onClick={handleWhatsAppOrder}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.124 1.528 5.858L0 24l6.334-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.213-3.73.888.928-3.627-.234-.373A9.818 9.818 0 1112 21.818z"/>
              </svg>
              {t('cart_order_whatsapp')}
            </button>
            <button className={styles.clearBtn} onClick={clearCart}>
              {t('cart_clear')}
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
