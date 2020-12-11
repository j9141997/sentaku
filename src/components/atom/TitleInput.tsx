import React, {
  useEffect,
  useRef,
  memo,
  InputHTMLAttributes,
  ChangeEvent,
} from 'react'
import styled, { css } from 'styled-components'
import { useTheme, Theme } from '../../hooks/useTheme'

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  onChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  placeholder?: string
  autoFocus?: boolean
}

export const TitleInput = memo(({ autoFocus, ...props }: Props) => {
  const innerRef = useRef<HTMLInputElement>(null)
  const theme = useTheme()

  useEffect(() => {
    if (autoFocus && innerRef.current) {
      innerRef.current.focus()
    }
  }, [autoFocus])

  return <StyledInput themes={theme} ref={innerRef} {...props} />
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
