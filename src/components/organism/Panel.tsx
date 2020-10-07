import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

type Props = {
  title?: string
  description?: string
}

export const Panel: FC<Props> = ({
  title = 'これはテストですよ',
  description = 'これはテストパネルです。たくさん文字を入力しています。',
}) => {
  const theme = useTheme()

  return (
    <Wrapper themes={theme}>
      <Content themes={theme}>
        <ContentTitle themes={theme}>{title}</ContentTitle>
      </Content>
      <Summary themes={theme}>{description}</Summary>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes
    return css`
      max-width: ${size.mediaQuery.SP}px;
      margin: 20px 0;
    `
  }}
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
    const { frame } = themes

    return css`
      height: 80px;
      background: #f9f9f9;
      border-radius: 0 0 ${frame.border.radius.s} ${frame.border.radius.s};
    `
  }}
`
