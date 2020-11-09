import React, { FC, MouseEvent } from 'react'
import styled, { css } from 'styled-components'
import { Input } from '@components/atom/Input'

type Props = {
  onClickAddRow: (e: MouseEvent<HTMLButtonElement>) => void
}

export const ArticleForm: FC<Props> = ({ onClickAddRow }) => {
  return (
    <Wrapper>
      <Input />
      <button onClick={onClickAddRow}>追加する</button>
      <button type="submit">投稿する</button>
    </Wrapper>
  )
}

const Wrapper = styled.div``
