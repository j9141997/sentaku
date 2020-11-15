import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from 'src/hooks/useTheme'

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
  type?: 'text' | 'url' | 'email' | 'password' | 'number'
  error?: boolean
  readonly value?: string
}

export const Input: FC<Props> = ({
  value = '',
  className = '',
  onValueChange,
  ...props
}) => {
  const theme = useTheme()
  return (
    <Wrapper themes={theme} className={className} width={props.width || 'auto'}>
      <StyledInput
        themes={theme}
        defaultValue={value}
        onChange={onValueChange}
        {...props}
      />
    </Wrapper>
  )
}

const Wrapper = styled.span<{
  themes: Theme
  width?: number | string
}>`
  ${({ themes, width }) => {
    const { palette, size, frame } = themes
    return css`
      display: inline-flex;
      align-items: stretch;
      width: ${typeof width === 'number' ? `${width}px` : width};
      padding: 0 ${size.pxToRem(size.space.XXS)};
      background-color: #fff;
      border-radius: ${frame.border.radius.m};
      border: ${frame.border.default};
      cursor: text;
    `
  }}
`

const StyledInput = styled.input<{ themes: Theme }>(({ themes }) => {
  const { size, palette } = themes

  return css`
    flex-grow: 1;
    display: inline-block;
    width: 100%;
    padding: ${size.pxToRem(size.space.XXS)};
    border: none;
    background: transparent;
    font-size: ${size.pxToRem(size.font.TALL)};
    color: ${palette.TEXT_BLACK};
    line-height: 1.6;
    outline: none;
  `
})
