import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

import { PrimaryButton } from '@components/atom/PrimaryButton'

type Props = {
  className?: string
}

export const Header: FC<Props> = ({ className }) => {
  const theme = useTheme()
  const title = 'sentaku'
  const displayName = 'Junki Yoshida'

  return (
    <Wrapper themes={theme}>
      <HeaderContainer>
        <HeaderColumn>
          <HeaderLogo>{title}</HeaderLogo>
        </HeaderColumn>

        <HeaderColumn>
          <PrimaryButton>新規登録</PrimaryButton>
        </HeaderColumn>
      </HeaderContainer>
    </Wrapper>
  )
}

const Wrapper = styled.header<{ themes: Theme }>`
  ${({ themes }) => {
    const { size, palette } = themes
    const { PC } = themes.size.mediaQuery

    return css`
      height: 56px;
      padding: 0 ${size.pxToRem(size.space.XS)};
      background: ${palette.MAIN};

      @media (min-width: ${PC}) {
        height: 72px;
      }
    `
  }}
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    max-width: 1024px;
    margin: 0 auto;
  }
`

const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLogo = styled.button`
  padding: 0;
  border: none;
  background: none;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;

  &:hover {
    opacity: 0.7;
  }
`
