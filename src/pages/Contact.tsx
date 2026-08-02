import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { useT } from '../data/translations'
import Reveal from '../components/Reveal'
import styles from './Contact.module.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const t = useT()

  useSeo({
    title: t('seo_contact_title'),
    description: t('seo_contact_desc'),
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      setErrorMsg(t('contact_err_fields'))
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setErrorMsg(t('contact_err_email'))
      return
    }

    // Simulate form submission (no database)
    setTimeout(() => {
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    }, 1000)
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal variant="up">
            <span className="section-label">{t('contact_label')}</span>
            <h1>{t('contact_title')}</h1>
            <p>{t('contact_text')}</p>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.grid}>
            {/* Info */}
            <Reveal variant="left">
              <div className={styles.info}>
                <h2>{t('contact_info_title')}</h2>
                <p className={styles.infoText}>{t('contact_info_text')}</p>

                <ul className={styles.infoList}>
                  <li>
                    <div className={styles.infoIcon}><MapPin size={20} /></div>
                    <div>
                      <span className={styles.infoLabel}>{t('contact_address')}</span>
                      <span>{t('contact_address_val')}</span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.infoIcon}><Phone size={20} /></div>
                    <div>
                      <span className={styles.infoLabel}>{t('contact_phone')}</span>
                      <a href="tel:+22901620141661">+229 01 62 01 41 61</a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.infoIcon}><Mail size={20} /></div>
                    <div>
                      <span className={styles.infoLabel}>{t('contact_email')}</span>
                      <a href="mailto:contact@bendjo.bj">contact@bendjo.bj</a>
                    </div>
                  </li>
                </ul>

                <div className={styles.whatsappNote}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.124 1.528 5.858L0 24l6.334-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.213-3.73.888.928-3.627-.234-.373A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  <span>{t('contact_whatsapp_note')} <strong>+229 01 62 01 41 61</strong></span>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal variant="right">
              <div className={styles.formWrap}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h2>{t('contact_form_title')}</h2>

                  {status === 'success' && (
                    <div className={styles.alertSuccess}>
                      <CheckCircle size={20} />
                      <span>{t('contact_success')}</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className={styles.alertError}>
                      <AlertCircle size={20} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className={styles.field}>
                    <label htmlFor="name">{t('contact_name')}</label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder={t('contact_name_ph')}
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">{t('contact_email')}</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder={t('contact_email_ph')}
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message">{t('contact_message')}</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder={t('contact_message_ph')}
                      rows={5}
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      t('contact_sending')
                    ) : (
                      <><Send size={18} /> {t('contact_send')}</>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
