import React, { FC, ComponentProps } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

import { BaseButton, BaseButtonAnchor } from './BaseButton'

type ButtonProps = ComponentProps<typeof BaseButton>
type AnchorProps = ComponentProps<typeof BaseButtonAnchor>

export const PrimaryButton: FC<ButtonProps> = (props) => {
  const theme = useTheme()
  return <PrimaryStyleButton themes={theme} {...props} />
}

export const PrimaryButtonAnchor: FC<AnchorProps> = (props) => {
  const theme = useTheme()
  return <PrimaryStyleButtonAnchor themes={theme} {...props} />
}

const primaryStyle = css`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes

    return css`
      color: ${palette.SUB};
      border: none;
      background-color: ${palette.MAIN};

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
const PrimaryStyleButton = styled(BaseButton)`
  ${primaryStyle}
`

const PrimaryStyleButtonAnchor = styled(BaseButtonAnchor)`
  ${primaryStyle}
`
