import React, { FC } from 'react'
import styled, { css } from 'styled-components'

export const ArticleForm: FC = () => {
  return (
    <Wrapper>
      <input type="text" name="title" />
      <button type="submit">投稿する</button>
    </Wrapper>
  )
}

const Wrapper = styled.div``
