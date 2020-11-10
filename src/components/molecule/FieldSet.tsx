import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Theme, useTheme } from 'src/hooks/useTheme'

import { Input, Props as InputProps } from '@components/atom/Input'

type Props = Omit<InputProps, 'error'> & {
  label: string
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
    <Wrapper width={props.width || 'auto'} className={className}>
      <Label themes={theme}>
        <LabelText themes={theme}>{label}</LabelText>
        {props.required && <span>必須</span>}
      </Label>

      {children ? children : <Input {...props} />}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ width: string | number }>(({ width }) => {
  return css`
    display: inline-block;
    width: ${typeof width === 'number' ? `${width}px` : width};
  `
})

const Label = styled.label<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    display: flex;
    align-items: center;
    margin: 0 0 ${size.pxToRem(size.space.XXS)};

    > *:not(:first-child) {
      margin-left: ${size.pxToRem(size.space.XXS)};
    }
  `
})

const LabelText = styled.div<{ themes: Theme }>(({ themes }) => {
  return null
})
