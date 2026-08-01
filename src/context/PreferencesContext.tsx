import React, { createContext, useContext, useState, useEffect } from 'react'

export type Theme = 'light' | 'dark'
export type Language = 'fr' | 'en'

interface PreferencesContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (t: Theme) => void
  language: Language
  toggleLanguage: () => void
  setLanguage: (l: Language) => void
}

const PreferencesContext = createContext<PreferencesContextType | null>(null)

const STORAGE_KEY = 'bendjo-preferences'

interface StoredPrefs {
  theme: Theme
  language: Language
}

function loadPrefs(): StoredPrefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        theme: parsed.theme === 'dark' ? 'dark' : 'light',
        language: parsed.language === 'en' ? 'en' : 'fr',
      }
    }
  } catch {
    // ignore
  }
  return { theme: 'light', language: 'fr' }
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [prefs, setPrefs] = useState<StoredPrefs>(() => loadPrefs())

  useEffect(() => {
    const root = document.documentElement
    if (prefs.theme === 'dark') {
      root.setAttribute('data-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
    }
  }, [prefs.theme])

  useEffect(() => {
    document.documentElement.lang = prefs.language
  }, [prefs.language])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    } catch {
      // ignore
    }
  }, [prefs])

  const toggleTheme = () => setPrefs(p => ({ ...p, theme: p.theme === 'light' ? 'dark' : 'light' }))
  const setTheme = (theme: Theme) => setPrefs(p => ({ ...p, theme }))
  const toggleLanguage = () => setPrefs(p => ({ ...p, language: p.language === 'fr' ? 'en' : 'fr' }))
  const setLanguage = (language: Language) => setPrefs(p => ({ ...p, language }))

  return (
    <PreferencesContext.Provider value={{
      theme: prefs.theme,
      toggleTheme,
      setTheme,
      language: prefs.language,
      toggleLanguage,
      setLanguage,
    }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext)
  if (!ctx) throw new Error('usePreferences must be used inside PreferencesProvider')
  return ctx
}
