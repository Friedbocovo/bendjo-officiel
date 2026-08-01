import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
import { getBotResponse, ChatMessage } from '../lib/chatbot'
import { useT } from '../data/translations'
import { usePreferences } from '../context/PreferencesContext'
import styles from './Chatbot.module.css'

export default function Chatbot() {
  const t = useT()
  const { language } = usePreferences()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const suggestions = [t('chat_s1'), t('chat_s2'), t('chat_s3'), t('chat_s4')]

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        id: 'welcome',
        role: 'bot',
        text: t('chat_welcome'),
        time: Date.now(),
      }])
    }
  }, [open, messages.length, t])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, typing])

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: text.trim(),
      time: Date.now(),
    }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const response = getBotResponse(text, language)
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        role: 'bot',
        text: response,
        time: Date.now(),
      }
      setMessages(prev => [...prev, botMsg])
      setTyping(false)
    }, 600 + Math.random() * 500)
  }

  return (
    <>
      {/* Toggle button */}
      <button
        className={`${styles.toggle} ${open ? styles.toggleHidden : ''}`}
        onClick={() => setOpen(true)}
        aria-label={t('chat_open')}
      >
        <MessageCircle size={24} />
        <span className={styles.togglePulse} />
      </button>

      {/* Chat window */}
      <div className={`${styles.window} ${open ? styles.windowOpen : ''}`}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.headerAvatar}>
              <Sparkles size={18} />
            </div>
            <div>
              <h3>{t('chat_title')}</h3>
              <span className={styles.status}>
                <span className={styles.statusDot} />
                {t('chat_online')}
              </span>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label={t('chat_close')}>
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className={styles.messages} ref={scrollRef}>
          {messages.map(msg => (
            <div key={msg.id} className={`${styles.msg} ${msg.role === 'user' ? styles.msgUser : styles.msgBot}`}>
              {msg.role === 'bot' && <div className={styles.msgAvatar}><Sparkles size={14} /></div>}
              <div className={styles.msgBubble}>
                {msg.text.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </div>
            </div>
          ))}

          {typing && (
            <div className={`${styles.msg} ${styles.msgBot}`}>
              <div className={styles.msgAvatar}><Sparkles size={14} /></div>
              <div className={styles.typing}>
                <span /><span /><span />
              </div>
            </div>
          )}

          {messages.length <= 1 && !typing && (
            <div className={styles.suggestions}>
              <p className={styles.suggestionsLabel}>{t('chat_suggestions')}</p>
              {suggestions.map(s => (
                <button key={s} className={styles.suggestionBtn} onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <form className={styles.inputBar} onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={t('chat_placeholder')}
            disabled={typing}
          />
          <button type="submit" className={styles.sendBtn} disabled={!input.trim() || typing} aria-label={t('chat_send')}>
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  )

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    sendMessage(input)
  }
}
