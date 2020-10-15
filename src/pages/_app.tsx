import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { AuthProvider } from '../hooks/Auth'

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
        <Component {...pageProps} />
      </AuthProvider>
    </React.Fragment>
  )
}

export default App
