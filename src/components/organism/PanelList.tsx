import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

type Props = {}

export const PanelList: FC<Props> = () => {
  const theme = useTheme()

  return <Wrapper themes={theme}></Wrapper>
}

const Wrapper = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes

    return css``
  }}
`
