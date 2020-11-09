import React, { FC, MouseEvent } from 'react'
import styled, { css } from 'styled-components'
import { Input } from '@components/atom/Input'

type Props = {
  options?: string[]
  onClickAddRow: (e: MouseEvent<HTMLButtonElement>) => void
}

export const ArticleForm: FC<Props> = ({ options = [], onClickAddRow }) => {
  return (
    <Wrapper>
      {options.map((value, i) => (
        <Input key={`optionInput${i}`} value={value} />
      ))}
      <button onClick={onClickAddRow}>追加する</button>
      <button type="submit">投稿する</button>
    </Wrapper>
  )
}

const Wrapper = styled.div``
