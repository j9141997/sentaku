import React, { FC, ComponentProps } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

import { BaseButton } from './BaseButton'

type ButtonProps = ComponentProps<typeof BaseButton>

export const GoogleAuthButton: FC<ButtonProps> = (props) => {
  const theme = useTheme()
  return <GoogleAuthStyleButton themes={theme} {...props} />
}

const GoogleAuthStyleButton = styled(BaseButton)<{ themes: Theme }>`
  ${({ themes }) => {
    return css`
      background-color: #4285f4;
      color: #fff;
      border: none;
    `
  }}
`
