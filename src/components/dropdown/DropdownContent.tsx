import React, { FC, useContext } from 'react'
import styled, { css } from 'styled-components'
import { Theme, useTheme } from 'src/hooks/useTheme'
import { DropdownContext } from './Dropwdown'

type Props = {
  className?: string
}

export const DropdownContent: FC<Props> = ({ children }) => {
  const theme = useTheme()
  const { active } = useContext(DropdownContext)
  return <>{active ? <Wrapper themes={theme}>{children}</Wrapper> : null}</>
}

const Wrapper = styled.div<{ themes: Theme }>(({ themes }) => {
  const { palette, frame } = themes
  return css`
    z-index: 99999;
    position: absolute;
    top: 50px;
    border: 1px solid ${palette.BORDER};
    border-radius: ${frame.border.radius.m};
    box-shadow: 0 4px 10px 0 rgba(51, 51, 51, 0.3);
    white-space: nowrap;
    background: ${palette.BACKGROUND};
  `
})
