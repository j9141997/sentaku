import {
  PaletteProps,
  CreatedPaletteTheme,
  createPalette,
  darkPalette,
} from './createPalette'
import { CreatedFrameTheme, FrameProps, createFrame } from './createFrame'
import { CreatedSizeTheme, SizeProps, createSize } from './createSize'

type ThemeProps = {
  palette?: PaletteProps
  size?: SizeProps
  frame?: FrameProps
}

export type CreatedTheme = {
  palette: CreatedPaletteTheme
  size: CreatedSizeTheme
  frame: CreatedFrameTheme
}

export const themeModeOptions = {
  dark: {
    palette: darkPalette,
  },
}

export const createTheme = (theme: ThemeProps = {}): CreatedTheme => {
  const created: CreatedTheme = {
    palette: createPalette(theme.palette || {}),
    size: createSize(theme.size || {}),
    frame: createFrame(theme.frame || {}, theme.palette || {}),
  }

  return created
}
