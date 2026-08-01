import { Link } from 'react-router-dom'
import { MapPin, Phone, Facebook, Linkedin, Instagram } from 'lucide-react'
import { useT } from '../data/translations'
import styles from './Footer.module.css'

export default function Footer() {
  const t = useT()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoContainer}>
              <img src="/images/logo-bendjo.jpeg" alt="BenDjo Logo" className={styles.logoImage} />
              <span className={styles.logoText}>Ben<span className={styles.logoAccent}>Djo</span></span>
            </div>
            <p className={styles.tagline}>
              {t('footer_tagline')}
            </p>
            <p className={styles.description}>
              {t('footer_desc')}
            </p>
            <div className={styles.socials}>
              <a href="https://facebook.com/BenDjoBenin" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com/company/bendjo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>{t('footer_nav_title')}</h4>
            <ul className={styles.links}>
              <li><Link to="/">{t('nav_home')}</Link></li>
              <li><Link to="/a-propos">{t('nav_about')}</Link></li>
              <li><Link to="/services">{t('nav_services')}</Link></li>
              <li><Link to="/infusions">{t('nav_infusions')}</Link></li>
              <li><Link to="/contact">{t('nav_contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>{t('footer_products_title')}</h4>
            <ul className={styles.links}>
              <li><Link to="/infusions">{t('product_hibiscus_name')}</Link></li>
              <li><Link to="/infusions">{t('product_basilic_name')}</Link></li>
              <li><Link to="/infusions">{t('product_citronnelle_name')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>{t('footer_contact_title')}</h4>
            <ul className={styles.contact}>
              <li>
                <MapPin size={15} />
                <span>{t('contact_address_val')}</span>
              </li>
              <li>
                <Phone size={15} />
                <a href="tel:+22900000000">+229 00 00 00 00</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{t('footer_rights')}</p>
          <p>{t('footer_made')}</p>
        </div>

        <div className={styles.brandmark}>BENDJO</div>
      </div>
    </footer>
  )
}
