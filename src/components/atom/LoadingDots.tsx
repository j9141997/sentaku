import React, { memo, VFC } from 'react'
import styled from 'styled-components'

const LoadingDots: VFC = () => {
  return (
    <Span>
      <span />
      <span />
      <span />
    </Span>
  )
}

const Span = styled.span`
  @apply inline-flex text-center items-center leading-7;

  & span {
    @apply bg-accents-6 rounded-full h-2 w-2;
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    margin: 0 2px;

    &:nth-of-type(2) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.4s;
    }
  }
`

export default memo(LoadingDots)
