import React from 'react'
import { MdAddCircleOutline } from 'react-icons/md'

export type IconProps = {
  name: string
  className?: string
  color?: string
  size?: number
}

export const iconMap = {
  MdAddCircleOutline: MdAddCircleOutline,
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  ...props
}) => {
  const SvgIcon = iconMap[name]
  return <SvgIcon className={className} {...props} />
}
