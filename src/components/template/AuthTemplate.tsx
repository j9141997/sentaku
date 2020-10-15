import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

const AuthTemplate: FC = ({ children }) => {
  const theme = useTheme()
  return <Wrapper themes={theme}>{children}</Wrapper>
}

const Wrapper = styled.article<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes
    return css`
      max-width: 470px;
      margin: 0 auto;
      padding: ${size.pxToRem(size.space.XS)} 0;
      text-align: center;
    `
  }}
`

export default AuthTemplate
