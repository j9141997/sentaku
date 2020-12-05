import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Theme, useTheme } from 'src/hooks/useTheme'

import { Input, Props as InputProps } from '@components/atom/Input'

type Props = {
  columns: Array<string>
}

export const TableFieldSet: FC<Props> = ({ columns, children }) => {
  const theme = useTheme()
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, i) => (
            <Th key={`column-${i}`}>{column}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>{children}</tr>
      </tbody>
    </table>
  )
}

const Th = styled.th`
  text-align: left;
`
