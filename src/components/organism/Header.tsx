import React, { FC } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

import { PrimaryButtonAnchor } from '@components/atom/PrimaryButton'
import { SecondaryButtonAnchor } from '@components/atom/SecondaryButton'

type Props = {
  className?: string
}

function wrappedRef(WrappedComponent): any {
  return React.forwardRef((props, ref) => {
    return <WrappedComponent {...props} forwardedRef={ref} />
  })
}

export const Header: FC<Props> = ({ className }) => {
  const theme = useTheme()
  const title = 'sentaku'
  const RefPrimaryStyledButton = wrappedRef(PrimaryStyledButton)
  const RefSecondaryStyledButton = wrappedRef(SecondaryStyledButton)

  return (
    <Wrapper themes={theme}>
      <HeaderContainer themes={theme}>
        <HeaderColumn>
          <HeaderLogo themes={theme}>{title}</HeaderLogo>
        </HeaderColumn>

        <HeaderColumn>
          <Link href="/login">
            <RefSecondaryStyledButton>ログイン</RefSecondaryStyledButton>
          </Link>
          <Link href="/signup">
            <RefPrimaryStyledButton themes={theme}>
              新規登録
            </RefPrimaryStyledButton>
          </Link>
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

const PrimaryStyledButton = styled(PrimaryButtonAnchor)<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes

    return css`
      margin: 0 0 0 ${size.pxToRem(size.space.XS)};
    `
  }}
`

const SecondaryStyledButton = styled(SecondaryButtonAnchor)``
