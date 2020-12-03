import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from '@components/Layout'
import { AuthProvider, ThemeProvider } from 'src/deps/Providers'
import { createTheme, themeModeOptions } from 'src/themes/createTheme'
import { useThemeMode } from 'src/hooks/useTheme'

// nprogressの設定
//  showSpinner: バーと一緒にローディングスピナーを表示するかどうか
//  speed: バーが右端に到達し消えるまでの時間 (msec)
//  minimum: バーの開始地点
nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [themeMode, toggleTheme, componentMounted] = useThemeMode()
  const theme = createTheme(themeModeOptions[themeMode])

  if (process.browser) {
    nprogress.start()
  }

  useEffect(() => {
    nprogress.done()
  })

  // CSS Global
  const GlocalStyle = createGlobalStyle`
    ${reset}

    body {
      background: ${theme.palette.BACKGROUND};
      color: ${theme.palette.TEXT};
      font-family: 'Roboto', 'Noto Sans JP', sans-serif;
    }
  `

  if (!componentMounted) {
    return <div />
  }

  return (
    <React.Fragment>
      <GlocalStyle />
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Layout onClickThemeMode={toggleTheme} themeMode={themeMode}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </React.Fragment>
  )
}

export default App
