import React from 'react'
import { ThemeProvider } from 'styled-components'

import { styles } from './styles'

interface ITheme {
  children: React.ReactNode
}

const Theme: React.FC<ITheme> = ({ children }: ITheme) => {
  return <ThemeProvider theme={styles}>{children}</ThemeProvider>
}

export default Theme
