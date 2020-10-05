import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

type Props = {
  className?: string
}

export const Header: FC<Props> = ({ className }) => {
  const theme = useTheme()
  const title = 'sentaku'
  const displayName = 'Junki Yoshida'

  return (
    <Wrapper themes={theme}>
      <HeaderColumn>
        <HeaderLogo>{title}</HeaderLogo>
      </HeaderColumn>
      {displayName}
    </Wrapper>
  )
}

const Wrapper = styled.header<{ themes: Theme }>`
  ${({ themes }) => {
    const { size, palette } = themes

    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      padding: 0 ${size.pxToRem(size.space.XS)};
      background: ${palette.MAIN};
    `
  }}
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

  &:hover {
    opacity: 0.7;
  }
`
