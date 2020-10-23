import React, { FC, useContext } from 'react'

import { DropdownContext } from './Dropwdown'

type Props = {
  className?: string
}

export const DropdownContent: FC<Props> = ({ children, className = '' }) => {
  const { active } = useContext(DropdownContext)
  return <>{active ? <>{children}</> : null}</>
}
