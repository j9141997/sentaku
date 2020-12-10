import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Theme, useTheme } from 'src/hooks/useTheme'

import { Input, Props as InputProps } from '@components/atom/Input'

type Props = Omit<InputProps, 'error'> & {
  label?: string
  className?: string
}

type TableProps = Omit<InputProps, 'error'> & {
  columns: Array<string>
  className?: string
}

export const FieldSet: FC<Props> = ({
  label,
  className = '',
  children,
  ...props
}) => {
  const theme = useTheme()

  return (
    <Wrapper width={props.width || 'auto'} className={className} themes={theme}>
      {label && (
        <Label themes={theme}>
          <LabelText themes={theme}>{label}</LabelText>
          {props.required && <span>必須</span>}
        </Label>
      )}

      {children ? children : <Input {...props} />}
    </Wrapper>
  )
}

export const TableFieldSet: FC<TableProps> = ({
  columns,
  className = '',
  children,
  ...props
}) => {
  const theme = useTheme()
  const TheadLabel = Label.withComponent('thead')
  return (
    <Wrapper width={props.width || 'auto'} className={className} themes={theme}>
      <table>
        <TheadLabel themes={theme}>
          <tr>
            {columns.map((column, i) => (
              <Th key={`column-${i}`}>{column}</Th>
            ))}
          </tr>
        </TheadLabel>
        <tbody>{children}</tbody>
      </table>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ width: string | number; themes: Theme }>(
  ({ width, themes }) => {
    const { size } = themes
    return css`
      width: ${typeof width === 'number' ? `${width}px` : width};

      &:not(:first-of-type) {
        margin-top: ${size.pxToRem(size.space.XS)};
      }
    `
  }
)

const Label = styled.label<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    display: flex;
    align-items: center;
    margin: 0 0 ${size.pxToRem(size.space.XXS)};

    > *:not(:first-of-type) {
      margin-left: ${size.pxToRem(size.space.XXS)};
    }
  `
})

const LabelText = styled.div<{ themes: Theme }>(({ themes }) => {
  return null
})

const Th = styled.th`
  text-align: left;
`
