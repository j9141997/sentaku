import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

type Props = {
  item: {
    title?: string
    description?: string
  }
}

export const Panel: FC<Props> = ({ item, ...props }) => {
  const theme = useTheme()

  return (
    <Wrapper themes={theme} {...props}>
      <Content themes={theme}>
        <ContentTitle themes={theme}>{item.title}</ContentTitle>
      </Content>
      <Summary themes={theme}>{item.description}</Summary>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: inherit;
`
const Content = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette, frame } = themes
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 140px;
      background: ${palette.MAIN};
      color: #fff;
      border-radius: ${frame.border.radius.s} ${frame.border.radius.s} 0 0;
    `
  }}
`

const ContentTitle = styled.p<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes

    return css`
      font-size: ${size.pxToRem(size.font.GRANDE)};
    `
  }}
`

const Summary = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { size, frame } = themes

    return css`
      height: 80px;
      background: #f9f9f9;
      padding: ${size.pxToRem(size.space.XXS)} ${size.pxToRem(size.space.XS)};
      border-radius: 0 0 ${frame.border.radius.s} ${frame.border.radius.s};
    `
  }}
`
