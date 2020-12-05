import React, { FC, MouseEvent, ChangeEvent } from 'react'
import styled, { css } from 'styled-components'
import { useTheme, Theme } from 'src/hooks/useTheme'
import { FieldSet } from '@components/molecule/FieldSet'
import { Panel } from '@components/molecule/Panel'
import { TitleInput } from '@components/atom/TitleInput'
import { PrimaryButton } from '@components/atom/PrimaryButton'
import { Icon } from '@components/atom/Icon'

export type Props = {
  options?: string[]
  onClickAddRow: (e: MouseEvent<HTMLButtonElement>) => void
  onValueChange: (e: ChangeEvent<HTMLInputElement>, i: number) => void
}

export const ArticleForm: FC<Props> = ({
  options = [],
  onClickAddRow,
  onValueChange,
}) => {
  const theme = useTheme()
  return (
    <Wrapper>
      <TitleInput placeholder="Title" autoFocus={true} />
      {options.map((value, i) => (
        <StyledPanel
          key={`fieldSet${i + 1}`}
          title={`オプション#${i + 1}`}
          themes={theme}
        >
          <FieldSet
            label="オプション名"
            onValueChange={(e) => onValueChange(e, i)}
          />
        </StyledPanel>
      ))}
      <PrimaryButton size="s" onClick={onClickAddRow}>
        追加する
        <Icon name="MdAddCircleOutline" />
      </PrimaryButton>
      {/* <button type="submit">投稿する</button> */}
    </Wrapper>
  )
}

const Wrapper = styled.div``
const StyledPanel = styled(Panel)<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    &:not(:last-of-type) {
      margin: 0 0 ${size.pxToRem(size.space.S)} 0;
    }
  `
})
