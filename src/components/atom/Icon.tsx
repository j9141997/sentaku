import React from 'react'
import { MdAddCircleOutline, MdArrowDropDown } from 'react-icons/md'

export type IconProps = {
  name: string
  className?: string
  color?: string
  size?: number
}

export const iconMap = {
  MdAddCircleOutline: MdAddCircleOutline,
  MdArrowDropDown: MdArrowDropDown,
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  ...props
}) => {
  const SvgIcon = iconMap[name]
  return <SvgIcon className={className} {...props} />
}
