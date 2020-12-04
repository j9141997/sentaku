import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { DropdownContext } from './Dropwdown'

type Props = {
  className?: string
}

export const DropdownTrigger: FC<Props> = ({ children }) => {
  const { active, onClickTrigger } = useContext(DropdownContext)
  return (
    <Wrapper onClick={onClickTrigger}>
      {React.Children.map(children, (child: any) => {
        const props = child.props ? child.props : {}
        const { className: classNameProps = '' } = props

        switch (typeof child) {
          case 'string':
            return child

          case 'object':
            return React.cloneElement(child, {
              className: `${active ? 'active' : ''} ${classNameProps}`,
            })
        }
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-block;
`
