import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from '@components/Layout'
import { AuthProvider } from '../auths/AuthProvider'

// nprogressの設定
//    showSpinner: バーと一緒にローディングスピナーを表示するかどうか
//    speed: バーが右端に到達し消えるまでの時間 (msec)
//    minimum: バーの開始地点
nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
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
      font-family: 'Roboto', 'Noto Sans JP', sans-serif;
    }
  `
  return (
    <React.Fragment>
      <GlocalStyle />
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </React.Fragment>
  )
}

export default App
