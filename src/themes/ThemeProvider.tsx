import React, { FC, createContext } from 'react'
import { CreatedTheme, createTheme } from './createTheme'

export const ThemeContext = createContext<CreatedTheme>(createTheme())
const { Provider } = ThemeContext

type Props = {
  theme: CreatedTheme
}

export const ThemeProvider: FC<Props> = ({ theme, children }) => {
  return <Provider value={theme}>{children}</Provider>
}
