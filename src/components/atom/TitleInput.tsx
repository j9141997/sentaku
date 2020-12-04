import React, { memo, InputHTMLAttributes, ChangeEvent } from 'react'
import styled, { css } from 'styled-components'
import { useTheme, Theme } from '../../hooks/useTheme'

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  placeholder?: string
}

export const TitleInput = memo(({ ...props }: Props) => {
  const theme = useTheme()
  return <StyledInput themes={theme} {...props} />
})

const StyledInput = styled.input<{ themes: Theme }>(({ themes }) => {
  const { size, palette } = themes
  return css`
    background: inherit;
    color: ${palette.TEXT};
    caret-color: ${palette.TEXT};
    font-size: ${size.pxToRem(size.font.VENTI)};
    width: 100%;
    height: 56px;
    outline: 0;
    border: none;
    margin: ${size.pxToRem(size.space.XXS)} 0;
    font-weight: bold;
  `
})
