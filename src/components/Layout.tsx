import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import { Header } from '@components/organism/Header'
import { Footer } from '@components/organism/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: FC<Props> = ({
  children,
  title = 'sentaku ーー人生の選択肢を幅広く。',
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

const Main = styled.main`
  min-height: 100vh;
`

export default Layout
