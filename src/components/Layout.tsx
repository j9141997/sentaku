import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import Head from 'next/head'

import { Theme, useTheme } from '../hooks/useTheme'
import { Header } from '@components/organism/Header'
import { Footer } from '@components/organism/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: FC<Props> = ({
  children,
  title = 'This is the default title',
}) => {
  const theme = useTheme()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>
        <StyledArticle themes={theme}>{children}</StyledArticle>
      </main>
      <Footer />
    </div>
  )
}

const StyledArticle = styled.article<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes
    const { PC } = themes.size.mediaQuery

    return css`
      max-width: ${PC}px;
      margin: 0 auto;
      padding: ${size.pxToRem(size.space.XS)} 0;
    `
  }}
`
export default Layout
