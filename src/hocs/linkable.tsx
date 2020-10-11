import React, { ComponentType, ComponentProps, forwardRef } from 'react'

import { Theme } from '../hooks/useTheme'
import { BaseButtonAnchor } from '@components/atom/BaseButton'

type LinkProps = {
  forwardRef: any
  themes?: Theme
}
type AnchorProps = ComponentProps<typeof BaseButtonAnchor>
type Props = ComponentType<AnchorProps & LinkProps>
type ExternalProps = ComponentType<AnchorProps & Pick<LinkProps, 'themes'>>

export function linkable(WrappedComponent: Props): ExternalProps {
  return forwardRef((props, ref) => {
    return <WrappedComponent forwardRef={ref} {...props} />
  })
}
