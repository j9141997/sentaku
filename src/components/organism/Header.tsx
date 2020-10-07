import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

import { PrimaryButton } from '@components/atom/PrimaryButton'
import { SecondaryButton } from '@components/atom/SecondaryButton'

type Props = {
  className?: string
}

export const Header: FC<Props> = ({ className }) => {
  const theme = useTheme()
  const title = 'sentaku'
  const displayName = 'Junki Yoshida'

  return (
    <Wrapper themes={theme}>
      <HeaderContainer themes={theme}>
        <HeaderColumn>
          <HeaderLogo themes={theme}>{title}</HeaderLogo>
        </HeaderColumn>

        <HeaderColumn>
          <SecondaryButton>ログイン</SecondaryButton>
          <PrimaryStyledButton themes={theme}>新規登録</PrimaryStyledButton>
        </HeaderColumn>
      </HeaderContainer>
    </Wrapper>
  )
}

const Wrapper = styled.header<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes
    const { PC } = themes.size.mediaQuery

    return css`
      height: 56px;
      padding: 0 ${size.pxToRem(size.space.XS)};
      background: #f9f9f9;

      @media (min-width: ${PC}px) {
        height: 72px;
      }
    `
  }}
`

const HeaderContainer = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { PC } = themes.size.mediaQuery

    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: inherit;
      @media (min-width: ${PC}px) {
        max-width: 1024px;
        margin: 0 auto;
      }
    `
  }}
`
const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLogo = styled.button<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette } = themes
    return css`
      padding: 0;
      border: none;
      background: none;
      box-sizing: border-box;
      cursor: pointer;
      color: ${palette.TEXT_BLACK};

      &:hover {
        opacity: 0.7;
      }
      &:focus {
        outline: 0;
      }
    `
  }}
`

const PrimaryStyledButton = styled(PrimaryButton)<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes

    return css`
      margin: 0 0 0 ${size.pxToRem(size.space.XS)};
    `
  }}
`
