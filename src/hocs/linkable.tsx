import React, { ComponentType, forwardRef } from 'react'

export function linkable(WrappedComponent: ComponentType<any>): any {
  return forwardRef((props, ref) => {
    return <WrappedComponent forwardRef={ref} {...props} />
  })
}
