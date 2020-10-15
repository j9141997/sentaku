import { merge } from 'lodash'
import { darken, rgba, transparentize } from 'polished'

export type PaletteProps = {
  TEXT_BLACK?: string
  TEXT_DISABLED?: string
  TEXT_LINK?: string
  BORDER?: string
  BACKGROUND?: string
  MAIN?: string
  DANGER?: string
  OUTLINE?: string
}

export type CreatedPaletteTheme = {
  hoverColor: (value: string) => string
  disableColor: (value: string) => string
  TEXT_BLACK: string
  TEXT_DISABLED: string
  TEXT_LINK: string
  BORDER: string
  BACKGROUND: string
  MAIN: string
  SUB: string
  DANGER: string
  OUTLINE: string
}

export const defaultPalette = {
  TEXT_BLACK: 'rgba(0, 0, 0, 0.87)',
  TEXT_DISABLED: '#c1c1c1',
  TEXT_LINK: '#007bc2',
  BORDER: '#8e8e93',
  BACKGROUND: '#fff',
  MAIN: '#2b2b2b',
  SUB: '#6b9e7c',
  DANGER: '#ff8800',
}

export const createPalette = (
  userPalette: PaletteProps = {}
): CreatedPaletteTheme => {
  const created: CreatedPaletteTheme = merge(
    {
      hoverColor: (value: string): string => darken(0.05, value),
      disableColor: (value: string): string => rgba(value, 0.5),
      OUTLINE: transparentize(0.5, defaultPalette.MAIN),
      ...defaultPalette,
    },
    userPalette,
    userPalette.OUTLINE == null && userPalette.MAIN != null
      ? { OUTLINE: transparentize(0.5, userPalette.MAIN) }
      : null
  )
  return created
}
