import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

type Props = {
  item: {
    title?: string
    description?: string
  }
  onClick?: () => void
}

export const ContentPanel: FC<Props> = ({ item, ...props }) => {
  const theme = useTheme()

  return (
    <Wrapper {...props}>
      <Content themes={theme}>
        <ContentTitle themes={theme}>{item.title}</ContentTitle>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: inherit;
  cursor: pointer;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`
const Content = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette } = themes
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      background: ${palette.MAIN};
      color: #fff;
    `
  }}
`

const ContentTitle = styled.p<{ themes: Theme }>`
  ${({ themes }) => {
    const { size, palette } = themes

    return css`
      font-size: ${size.pxToRem(size.font.GRANDE)};
      color: ${palette.SUB};
    `
  }}
`
