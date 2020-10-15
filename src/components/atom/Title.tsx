import React, { memo, SFC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

type Props = {
  children: string
}

const Title: SFC<Props> = ({ children }) => {
  const theme = useTheme()
  return <H1 themes={theme}>{children}</H1>
}

const H1 = styled.h1<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes

    return css`
      font-size: ${size.pxToRem(size.font.VENTI)};
    `
  }}
`

const MemoizedTitle = memo(Title)
export default MemoizedTitle
