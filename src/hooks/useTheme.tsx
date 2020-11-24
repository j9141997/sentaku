import { useState, useEffect, useContext } from 'react'
import { CreatedTheme } from '../themes/createTheme'
import { ThemeContext } from '../themes/ThemeProvider'

export type Theme = CreatedTheme
export type ThemeMode = [theme: string, toggleTheme: () => void]

export const useTheme = (): Theme => {
  const theme: Theme = useContext(ThemeContext)
  return theme
}

// For Dart Mode
export const useThemeMode = (): ThemeMode => {
  const [themeMode, setThemeMode] = useState('default')

  const toggleTheme = () => {
    if (themeMode === 'default') {
      window.localStorage.setItem('theme', 'dark')
      setThemeMode('dark')
    } else {
      window.localStorage.setItem('theme', 'default')
      setThemeMode('default')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setThemeMode(localTheme)
  }, [])

  return [themeMode, toggleTheme]
}
