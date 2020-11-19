import React, { FC, MouseEvent, ChangeEvent, useRef } from 'react'
import styled, { css } from 'styled-components'
import { FieldSet } from '@components/molecule/FieldSet'
import { TitleInput } from '@components/atom/TitleInput'
import { PrimaryButton } from '@components/atom/PrimaryButton'

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
  return (
    <Wrapper>
      <TitleInput placeholder="Title" />
      {options.map((value, i) => (
        <FieldSet
          key={`fieldSet${i + 1}`}
          label={`オプション${i + 1}`}
          value={value}
          onValueChange={(e) => onValueChange(e, i)}
        />
      ))}
      <PrimaryButton size="s" onClick={onClickAddRow}>
        追加する
      </PrimaryButton>
      <button type="submit">投稿する</button>
    </Wrapper>
  )
}

const Wrapper = styled.div``
