import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import Head from 'next/head'
import { Theme, useTheme } from '../hooks/useTheme'

import { Header } from '@components/organism/Header'
import { Footer } from '@components/organism/Footer'

type Props = {
  children?: ReactNode
  title?: string
  onClickThemeMode: () => void
  themeMode?: string
}

const Layout: FC<Props> = ({
  children,
  title = 'sentaku ーー人生の選択肢を幅広く。',
  onClickThemeMode,
  themeMode = 'default',
}) => {
  const theme = useTheme()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header onClickThemeMode={onClickThemeMode} themeMode={themeMode} />
      <Main themes={theme}>{children}</Main>
      <Footer />
    </div>
  )
}

const Main = styled.main<{ themes: Theme }>(({ themes }) => {
  const { palette } = themes

  return css`
    min-height: 100vh;
    background: ${palette.BACKGROUND};
  `
})

export default Layout
