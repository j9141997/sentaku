import React, { FC } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { routes } from 'src/routes'
import firebase from '../../../utils/firebase'

import { Theme, useTheme } from '../../hooks/useTheme'

import { linkable } from '../../hocs/linkable'
import { useAuth } from '../../hooks/useAuth'
import { HeaderDropDown } from '@components/atom/HeaderDropDown'
import { PrimaryButtonAnchor } from '@components/atom/PrimaryButton'
import { SecondaryButtonAnchor } from '@components/atom/SecondaryButton'

type Props = {
  className?: string
}

export const Header: FC<Props> = ({ className }) => {
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('logout!')
        location.reload()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const theme = useTheme()
  const { currentUser } = useAuth()
  const title = 'sentaku'

  return (
    <Wrapper themes={theme}>
      <HeaderContainer themes={theme}>
        <HeaderColumn>
          <Link href="/">
            <LinkHeaderLogo themes={theme}>{title}</LinkHeaderLogo>
          </Link>
        </HeaderColumn>
        {currentUser ? (
          <HeaderColumn>
            <HeaderDropDown onClick={signOut} />
            <Link href="/articles/new">
              <LinkPrimaryStyledButton themes={theme}>
                投稿する
              </LinkPrimaryStyledButton>
            </Link>
          </HeaderColumn>
        ) : (
          <HeaderColumn>
            <Link href="/login">
              <LinkSecondaryStyledButton>ログイン</LinkSecondaryStyledButton>
            </Link>
            <Link href="/signup">
              <LinkPrimaryStyledButton themes={theme}>
                新規登録
              </LinkPrimaryStyledButton>
            </Link>
          </HeaderColumn>
        )}
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
      border-bottom: 1px solid ${palette.BORDER};

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
      color: ${palette.TEXT};

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

const LinkPrimaryStyledButton = linkable(PrimaryStyledButton)
const LinkSecondaryStyledButton = linkable(SecondaryStyledButton)
const LinkHeaderLogo = linkable(HeaderLogo)
