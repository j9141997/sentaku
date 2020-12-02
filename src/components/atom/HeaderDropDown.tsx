import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { useTheme, Theme } from 'src/hooks/useTheme'
import { useAuth } from 'src/hooks/useAuth'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
} from '@components/dropdown/index'
import { Icon } from '@components/atom/Icon'

type Props = {
  onClick?: () => void
  onClickThemeMode: () => void
}

export const HeaderDropDown: FC<Props> = ({ onClick, onClickThemeMode }) => {
  const { currentUser } = useAuth()
  const theme = useTheme()

  return (
    <Dropdown>
      <DropdownTrigger>
        <TriggerButton themes={theme}>
          <span className="trigger">{currentUser.displayName}</span>
          <Icon name="MdArrowDropDown" size={16} />
        </TriggerButton>
      </DropdownTrigger>

      <DropdownContent>
        <MenuList themes={theme}>
          <MenuListItem themes={theme}>
            <button onClick={onClick}>ログアウト</button>
          </MenuListItem>
          <MenuListItem themes={theme}>
            <button onClick={onClickThemeMode}>チェーんじ</button>
          </MenuListItem>
        </MenuList>
      </DropdownContent>
    </Dropdown>
  )
}

const TriggerButton = styled.button<{ themes: Theme }>`
  ${({ themes }) => {
    const { size, palette } = themes

    return css`
      color: ${palette.TEXT};
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
    const { size, frame, palette } = themes

    return css`
      padding: ${size.pxToRem(size.space.XXS)} 0;
    `
  }}
`

const MenuListItem = styled.div<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    padding: 0 ${size.pxToRem(size.space.XS)};
  `
})
