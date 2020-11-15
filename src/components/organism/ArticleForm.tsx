import React, { FC, MouseEvent, ChangeEvent } from 'react'
import styled, { css } from 'styled-components'
import { FieldSet } from '@components/molecule/FieldSet'
import { Input } from '@components/atom/Input'

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
      {options.map((value, i) => (
        <FieldSet
          key={`fieldSet${i + 1}`}
          label={`オプション${i + 1}`}
          value={value}
          onValueChange={(e) => onValueChange(e, i)}
        />
      ))}
      <button onClick={onClickAddRow}>追加する</button>
      <button type="submit">投稿する</button>
    </Wrapper>
  )
}

const Wrapper = styled.div``
