import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { useTheme, Theme } from 'src/hooks/useTheme'
import { useAuth } from 'src/hooks/useAuth'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
} from '@components/dropdown/index'

type Props = {
  onClick?: () => void
}

export const HeaderDropDown: FC<Props> = ({ onClick }) => {
  const { currentUser } = useAuth()
  const theme = useTheme()

  return (
    <Dropdown>
      <DropdownTrigger>
        <TriggerButton themes={theme}>
          <span className="trigger">{currentUser.displayName}</span>
          <i className="material-icons">arrow_drop_down</i>
        </TriggerButton>
      </DropdownTrigger>

      <DropdownContent>
        <MenuList themes={theme}>
          <button onClick={onClick}>ログアウト</button>
        </MenuList>
      </DropdownContent>
    </Dropdown>
  )
}

const TriggerButton = styled.button<{ themes: Theme }>`
  ${({ themes }) => {
    const { size } = themes

    return css`
      display: flex;
      align-items: center;
      background: none;
      height: 40px;
      padding: 0 ${size.pxToRem(size.space.XS)};
      border: none;
    `
  }}
`

const MenuList = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { size, frame } = themes

    return css`
      border: ${frame.border.default};
    `
  }}
`
