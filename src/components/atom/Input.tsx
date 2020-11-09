import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from 'src/hooks/useTheme'

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  readonly value?: string
}

export const Input: FC<Props> = ({ value = '', ...props }) => {
  const theme = useTheme()
  return <StyledInput themes={theme} defaultValue={value} {...props} />
}

const StyledInput = styled.input<{ themes: Theme }>``
