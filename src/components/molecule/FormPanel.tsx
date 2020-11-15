import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

export const FormPanel: FC = ({ children }) => {
  const theme = useTheme()

  return <div>{children}</div>
}
