import React, { FC, ComponentProps } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

import { BaseButton, BaseButtonAnchor } from './BaseButton'

type ButtonProps = ComponentProps<typeof BaseButton>
type AnchorProps = ComponentProps<typeof BaseButtonAnchor>

export const SecondaryButton: FC<ButtonProps> = (props) => {
  const theme = useTheme()
  return <SecondaryStyleButton themes={theme} {...props} />
}

export const SecondaryButtonAnchor: FC<AnchorProps> = (props) => {
  const theme = useTheme()
  return <SecondaryStyleButtonAnchor themes={theme} {...props} />
}

const SecondaryStyle = css`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes

    return css`
      color: ${palette.TEXT_BLACK};
      border: none;
      background-color: #fff;
      border-color: ${palette.MAIN};
      &.hover {
        background-color: ${palette.hoverColor(palette.MAIN)};
      }

      &[disabled] {
        background-color: ${palette.disableColor(palette.MAIN)};
        color: ${palette.disableColor('#fff')};
      }
    `
  }}
`
const SecondaryStyleButton = styled(BaseButton)`
  ${SecondaryStyle}
`

const SecondaryStyleButtonAnchor = styled(BaseButtonAnchor)`
  ${SecondaryStyle}
`
