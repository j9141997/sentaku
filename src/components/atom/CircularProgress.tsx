import React, { VFC } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled, { css } from 'styled-components'
import { useTheme, Theme } from 'src/hooks/useTheme'

type Props = {
  size?: string | number
}

const Circular: VFC<Props> = ({ size = 40 }) => {
  const theme = useTheme()
  return (
    <Wrapper>
      <StyledCircularProgress size={size} themes={theme} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const StyledCircularProgress = styled(CircularProgress)<{ themes: Theme }>(
  ({ themes }) => {
    const { palette } = themes
    console.log(palette.MAIN)
    return css`
      color: ${palette.MAIN} !important;
    `
  }
)
export default Circular
