import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      bg: isDark ? '#0F172A' : '#FFFFFF',
      bgSecondary: isDark ? '#1E293B' : '#FFF5F0',
      text: isDark ? '#F1F5F9' : '#111827',
      textSecondary: isDark ? '#94A3B8' : '#6B7280',
      border: isDark ? '#334155' : '#E5E7EB',
      cardBg: isDark ? '#1E293B' : '#FFFFFF',
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
      gradientBg: isDark 
        ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)'
        : 'linear-gradient(135deg, #FFF5F0 0%, #FFFFFF 50%, #FFF8F0 100%)',
      accentBg: isDark ? 'rgba(255, 107, 53, 0.1)' : '#FFF5F0',
      shadow: isDark 
        ? '0 10px 40px rgba(0,0,0,0.5)' 
        : '0 10px 40px rgba(0,0,0,0.08)'
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
