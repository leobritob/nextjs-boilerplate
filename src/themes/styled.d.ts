/* eslint @typescript-eslint/no-empty-interface: "off" */

import {} from 'styled-components'

import { styles } from './styles'

export type Theme = typeof styles

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
