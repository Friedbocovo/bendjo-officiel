import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu, X, Globe } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { usePreferences } from '../context/PreferencesContext'
import { useT } from '../data/translations'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { itemCount, openCart } = useCart()
  const { language, toggleLanguage } = usePreferences()
  const t = useT()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/', label: t('nav_home') },
    { to: '/a-propos', label: t('nav_about') },
    { to: '/services', label: t('nav_services') },
    { to: '/infusions', label: t('nav_infusions') },
    { to: '/contact', label: t('nav_contact') },
  ]

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navWrap} ${scrolled ? styles.navScrolled : ''}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src="/images/logo-bendjo.jpeg" alt="BenDjo Logo" className={styles.logoImage} />
          <span className={styles.logoText}>
            Ben<span className={styles.logoAccent}>Djo</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.iconBtn} onClick={toggleLanguage} aria-label="Change language" title={language === 'fr' ? 'Switch to English' : 'Passer au français'}>
            <Globe size={18} />
            <span className={styles.langLabel}>{language.toUpperCase()}</span>
          </button>
          <Link to="/infusions" className={styles.ctaBtn}>
            {t('nav_order')}
          </Link>
          <button className={styles.cartBtn} onClick={openCart} aria-label={t('cart_title')}>
            <ShoppingCart size={18} />
            {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
          </button>
          <button
            className={styles.menuBtn}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className={styles.mobileToggles}>
            <button className={styles.iconBtn} onClick={toggleLanguage}>
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
          <Link to="/infusions" className={`btn-primary ${styles.mobileCta}`} onClick={() => setMobileOpen(false)}>
            {t('nav_order')}
          </Link>
        </nav>
      </div>

      {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}
    </header>
  )
}
