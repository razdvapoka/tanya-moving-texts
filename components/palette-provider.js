import { ThemeProvider, withTheme } from 'emotion-theming'
import { compose, withProps } from 'recompose'

const ThemeDefaultsProvider = compose(
  withTheme,
  withProps(({ theme, ...rest }) => ({
    theme: {
      default: {
        ...theme.default,
        ...rest
      }
    }
  }))
)(ThemeProvider)

const PaletteProvider = withProps(({ name }) => ({
  palette: name || 'default'
}))(ThemeDefaultsProvider)

export default PaletteProvider
