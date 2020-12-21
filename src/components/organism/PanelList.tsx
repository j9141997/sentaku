import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'
import { ContentPanel } from '@components/molecule/ContentPanel'
type Props = {
  data: {
    uuid: string
    title: string
  }[]
}

export const PanelList: FC<Props> = ({ data }) => {
  const theme = useTheme()

  return (
    <Wrapper themes={theme}>
      {data.map((item, i) => {
        return (
          <StyledPanel
            key={`item${item.uuid}`}
            item={item}
            // onClick={() => (location.href = `/options/${item.uuid}`)}
            onClick={() => {
              console.log(
                fetch(`${process.env.API_BASE_ENDPOINT}/options/${item.uuid}`)
              )
            }}
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

const StyledPanel = styled(ContentPanel)<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes

    return css`
      &:not(:last-of-type) {
        margin: 0 0 ${size.pxToRem(size.space.S)} 0;
      }
    `
  }}
`
