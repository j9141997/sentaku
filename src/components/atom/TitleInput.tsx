import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { useTheme, Theme } from '../../hooks/useTheme'

type Props = {
  className?: string
  placeholder?: string
}

export const TitleInput = forwardRef<HTMLInputElement, Props>(
  ({ className = '', ...props }, ref) => {
    const theme = useTheme()
    return (
      <StyledInput ref={ref} className={className} themes={theme} {...props} />
    )
  }
)

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
