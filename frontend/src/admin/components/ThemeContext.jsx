import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const themes = {
  dark: {
    bg: '#1e1e2d',
    sidebar: '#1b1b29',
    card: '#1b1b29',
    cardAlt: '#16161f',
    border: '#2b2b40',
    text: '#ffffff',
    textMuted: '#92929f',
    textFaint: '#6c7293',
    textLabel: '#4a4a6a',
    rowHover: '#1e1e2d',
    chartGrid: '#2b2b40',
    chartTick: '#6c7293',
    tooltipBg: '#1b1b29',
    inputBg: '#1e1e2d',
    selectBg: 'transparent',
  },
  light: {
    bg: '#f5f8fa',
    sidebar: '#ffffff',
    card: '#ffffff',
    cardAlt: '#f9fafb',
    border: '#e4e6ef',
    text: '#181c32',
    textMuted: '#5e6278',
    textFaint: '#7e8299',
    textLabel: '#b5b5c3',
    rowHover: '#f9fafb',
    chartGrid: '#e4e6ef',
    chartTick: '#7e8299',
    tooltipBg: '#ffffff',
    inputBg: '#f5f8fa',
    selectBg: 'transparent',
  },
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem('admin_theme') || 'dark')

  const toggle = () => {
    const next = mode === 'dark' ? 'light' : 'dark'
    setMode(next)
    localStorage.setItem('admin_theme', next)
  }

  return (
    <ThemeContext.Provider value={{ mode, theme: themes[mode], toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
