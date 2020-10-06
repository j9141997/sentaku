import { merge } from 'lodash'

const defaultHtmlFontSize = 16
const defaultSpaceSize = 8

export type SizeProps = {
  htmlFontSize?: number
  space?: {
    defaultRem?: number
    XXS?: number
    XS?: number
    S?: number
    M?: number
    L?: number
    XL?: number
    XXL?: number
  }

  font?: {
    SHORT?: number
    TALL?: number
    GRANDE?: number
    VENTI?: number
  }
  mediaQuery?: {
    SP?: number
    TABLET?: number
    PC?: number
  }
}

export type CreatedSizeTheme = {
  pxToRem: (value: number) => string
  space: {
    XXS: number
    XS: number
    S: number
    M: number
    L: number
    XL: number
    XXL: number
  }
  font: {
    SHORT: number
    TALL: number
    GRANDE: number
    VENTI: number
  }
  mediaQuery: {
    SP: number
    TABLET: number
    PC: number
  }
}

const pxToRem = (value: number) => (font: number) => {
  return `${value / font}rem`
}

const getSpace = (size: number) => {
  return {
    XXS: size,
    XS: size * 2,
    S: size * 3,
    M: size * 4,
    L: size * 5,
    XL: size * 6,
    XXL: size * 7,
  }
}

const defaultFontSize = { SHORT: 11, TALL: 14, GRANDE: 18, VENTI: 24 }
const defaultMediaQuery = { SP: 599, TABLET: 959, PC: 1024 }
const defaultSpace = getSpace(defaultSpaceSize)

export const defaultSize: CreatedSizeTheme = {
  pxToRem: (value: number) => pxToRem(value)(defaultHtmlFontSize),
  font: defaultFontSize,
  space: defaultSpace,
  mediaQuery: defaultMediaQuery,
}

export const createSize = (userSize: SizeProps = {}): CreatedSizeTheme => {
  const space = userSize.space || {}
  const size = space.defaultRem || defaultSpaceSize
  const created: CreatedSizeTheme = merge(
    {
      pxToRem: (value: number) =>
        pxToRem(value)(userSize.htmlFontSize || defaultHtmlFontSize),
      space: getSpace(size),
      mediaQuery: defaultMediaQuery,
    },
    userSize
  )

  return created
}
