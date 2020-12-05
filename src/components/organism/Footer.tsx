import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

export const Footer: FC = () => {
  const theme = useTheme()

  return (
    <Wrapper themes={theme}>
      <FooterContainer themes={theme}>
        <Credit themes={theme}>Created By Junki Yoshida</Credit>
      </FooterContainer>
    </Wrapper>
  )
}

const Wrapper = styled.footer<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes

    return css`
      padding: 0 ${size.pxToRem(size.space.XS)};
      jutify-content: space-between;
      height: 60px;
    `
  }}
`

const FooterContainer = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { PC } = themes.size.mediaQuery

    return css`
      height: inherit;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media (min-width: ${PC}px) {
        max-width: 1024px;
        margin: 0 auto;
      }
    `
  }}
`

const Credit = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes

    return css`
      font-size: ${size.pxToRem(size.font.SHORT)};
    `
  }}
`
