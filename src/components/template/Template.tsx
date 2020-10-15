import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

const Container: FC = ({ size = 1024, children }) => {
  const theme = useTheme()

  return (
    <Wrapper themes={theme} size={size}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.article<{ themes: Theme }>`
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

export default Container
