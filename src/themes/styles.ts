import color from 'color'

const primary = '#0BC9D4'

export const styles = {
  breakpoints: ['480px', '768px', '992px', '1024px'],
  spaces: [],
  radii: { borderRadius: 4 },
  colors: {
    primary,
    secondary: color(primary).darken(0.5).hex(),
    success: '#22bb33',
    warning: '#f0ad4e',
    danger: '#bb2124',
    dark: '#333',
  },
}
