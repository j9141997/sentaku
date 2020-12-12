import React, { FC, MouseEvent } from 'react'
import styled, { css } from 'styled-components'
import { Theme, useTheme } from '../../hooks/useTheme'
import { Icon } from '@components/atom/Icon'

type Props = {
  title?: string
  className?: string
  onClose?: (event: MouseEvent<HTMLButtonElement>, index?: number) => void
}

export const Panel: FC<Props> = ({
  children,
  title = '',
  className = '',
  onClose,
}) => {
  const theme = useTheme()
  return (
    <Wrapper className={className} themes={theme}>
      {title && (
        <PanelHeader>
          <Title themes={theme}>{title}</Title>
          {onClose && <Icon name="IoMdClose" size={24} />}
        </PanelHeader>
      )}
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ themes: Theme }>(({ themes }) => {
  const { palette } = themes
  const { pxToRem, space } = themes.size
  return css`
    width: inherit;
    padding: ${pxToRem(space.S)};
    border: 1px solid ${palette.BORDER};
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  `
})

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h4<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    font-size: ${size.pxToRem(size.font.GRANDE)};
    font-weight: bold;
  `
})
