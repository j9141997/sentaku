import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Layout from '@components/Layout'
import { AuthProvider } from '../auths/AuthProvider'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
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
