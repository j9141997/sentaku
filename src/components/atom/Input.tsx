import React, { FC, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from 'src/hooks/useTheme'

export type Props = InputHTMLAttributes<HTMLInputElement> & {}

export const Input: FC<Props> = (props) => {
  const theme = useTheme()
  return <StyledInput themes={theme} {...props} />
}

const StyledInput = styled.input<{ themes: Theme }>``
