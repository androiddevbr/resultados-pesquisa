import deepMerge from 'deepmerge'
import { red } from '@material-ui/core/colors'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
  Theme,
} from '@material-ui/core/styles'

const makeTheme = (variant: ThemeOptions): Theme => {
  const common = {
    palette: {
      primary: {
        main: '#4caf4f',
      },
      secondary: {
        main: '#002477',
      },
      error: {
        main: red.A400,
      },
    },
  }

  const theme = createMuiTheme(deepMerge(common, variant))
  return responsiveFontSizes(theme)
}

const light: ThemeOptions = {
  palette: {
    type: 'light',
  },
}

const dark: ThemeOptions = {
  palette: {
    type: 'dark',
  },
}

const themes = {
  light: makeTheme(light),
  dark: makeTheme(dark),
}

export default themes
