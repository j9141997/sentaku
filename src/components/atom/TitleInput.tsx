import React, { memo, InputHTMLAttributes, ChangeEvent } from 'react'
import styled, { css } from 'styled-components'
import { useTheme, Theme } from '../../hooks/useTheme'

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void
  error?: boolean
}

export const TitleInput = memo(({ ...props }) => {
  const theme = useTheme()
  return <StyledInput themes={theme} {...props} />
})

const StyledInput = styled.input<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    font-size: ${size.pxToRem(size.font.VENTI)};
    width: 100%;
    height: 56px;
    outline: 0;
    border: none;
    margin: ${size.pxToRem(size.space.XXS)} 0;
    font-weight: bold;
  `
})
