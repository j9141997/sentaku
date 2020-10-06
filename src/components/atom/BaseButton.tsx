import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'
import { hoverable } from '../../hocs/hoverable'

type Tag = 'button' | 'a'
type Size = 'default' | 's'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseProps
export type AnchorProps = React.ButtonHTMLAttributes<HTMLAnchorElement> &
  BaseProps

export type BaseProps = {
  size?: Size
  className?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  square?: boolean
  wide?: boolean
}

export const buttonFactory: <T extends BaseProps>(tag: Tag) => FC<T> = (
  tag
) => {
  return ({
    size = 'default',
    className = '',
    square = false,
    children = '',
    prefix = '',
    suffix = '',
    ...props
  }) => {
    const theme = useTheme()
    // prettier-ignore
    const classNames = `${size} ${className} ${square ? 'square' : ''} ${prefix ? 'prefix' : ''} ${suffix ? 'suffix' : ''}`

    return (
      <Base as={tag} className={classNames} themes={theme} {...props}>
        {children}
      </Base>
    )
  }
}

const Base = styled.div<{ themes: Theme; wide: boolean; as: any }>`
  ${({ themes, wide }) => {
    const { frame, size } = themes

    return css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: ${wide ? '100%;' : 'auto'};
      min-width: 2rem;
      vertical-align: middle;
      border-radius: ${frame.border.radius.m};
      font-family: inherit;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      box-sizing: border-box;
      cursor: pointer;
      white-space: nowrap;

      &.default {
        font-size: ${size.pxToRem(size.font.TALL)};
        height: 40px;
        padding: 0 ${size.pxToRem(size.space.XS)};
      }

      &.s {
        font-size: ${size.pxToRem(size.font.SHORT)};
        height: 27px;
        padding: 0 ${size.pxToRem(size.space.XXS)};
      }

      &.square {
        width: 40px;
        padding: 0;

        &.s {
          width: 27px;
          min-width: 27px;
        }
      }

      &[disabled] {
        cursor: not-allowed;
      }

      &.suffix {
        justify-content: space-between;
      }

      &.prefix {
        justify-content: left;
      }
    `
  }}
`

export const BaseButton: FC<ButtonProps> = buttonFactory<ButtonProps>('button')
export const BaseButtonAnchor: FC<AnchorProps> = buttonFactory<AnchorProps>('a')
