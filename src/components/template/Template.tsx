import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

const Container: FC = ({ children }) => {
  const theme = useTheme()

  return <Wrapper themes={theme}>{children}</Wrapper>
}

const Wrapper = styled.article<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes
    const { SP, PC } = themes.size.mediaQuery

    return css`
      max-width: ${PC}px;
      margin: 0 auto;
      padding: ${size.pxToRem(size.space.XS)} 0;

      @media (max-width: ${SP}px) {
        margin: 0 ${size.pxToRem(size.space.XS)};
      }
    `
  }}
`

export default Container
