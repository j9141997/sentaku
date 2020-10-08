import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'
import { Panel } from '@components/molecule/Panel'
type Props = {}

export const PanelList: FC<Props> = () => {
  const theme = useTheme()

  const data = []
  for (let i = 0; i < 10; i++) {
    const obj = {
      title: `テストタイトル${i + 1}`,
      description: `テスト詳細${i + 1}`,
    }
    data.push(obj)
  }

  return (
    <Wrapper themes={theme}>
      {data.map((item, i) => {
        return (
          <StyledPanel
            key={`item${i}`}
            item={item}
            onClick={() => console.log(`clicked-${i}`)}
            themes={theme}
          />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes
    return css`
      max-width: ${size.mediaQuery.SP}px;
      margin: 0 auto;
    `
  }}
`

const StyledPanel = styled(Panel)<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes

    return css`
      &:not(:last-of-type) {
        margin: 0 0 ${size.pxToRem(size.space.S)} 0;
      }
    `
  }}
`
