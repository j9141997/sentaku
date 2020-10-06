import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

type Props = {
  onClick?: () => void
}

export const HeaderButton: FC<Props> = ({ children, onClick }) => {
  const theme = useTheme()

  return (
    <Wrapper themes={theme} onClick={onClick}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.button<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes
    const { PC } = themes.size.mediaQuery

    return css`
      display: inline-block;
      margin: 0;
      padding: 0 ${size.pxToRem(10)};
      border: none;
      background: none;
      color: #fff;
      font-size: ${size.pxToRem(10)};
      line-height: 56px;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }

      @media (min-width: ${PC}) {
        line-height: 72px;
      }
    `
  }}
`
