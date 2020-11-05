import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Input } from '@components/atom/Input'

export const ArticleForm: FC = () => {
  return (
    <Wrapper>
      <Input />
      <button>追加する</button>
      <button type="submit">投稿する</button>
    </Wrapper>
  )
}

const Wrapper = styled.div``
