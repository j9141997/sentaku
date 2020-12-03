import React from 'react'
import { IoIosMoon } from 'react-icons/io'
import { WiDaySunny } from 'react-icons/wi'
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
  WiDaySunny: WiDaySunny,
  IoIosMoon: IoIosMoon,
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  ...props
}) => {
  const SvgIcon = iconMap[name]
  return <SvgIcon className={className} {...props} />
}
