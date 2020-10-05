import { useContext } from 'react'
import { CreatedTheme } from '../themes/createTheme'
import { ThemeContext } from '../themes/ThemeProvider'

export type Theme = CreatedTheme

export const useTheme = (): Theme => {
  const theme: Theme = useContext(ThemeContext)
  return theme
}
