import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { useTheme, Theme } from 'src/hooks/useTheme'
import { useAuth } from 'src/hooks/useAuth'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
} from '@components/dropdown/index'

export const HeaderDropDown: FC = (props) => {
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
          <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
          </ul>
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
