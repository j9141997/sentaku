import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const GlocalStyle = createGlobalStyle`
    ${reset}
  `
  return (
    <React.Fragment>
      <GlocalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App
