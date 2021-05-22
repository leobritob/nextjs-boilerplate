import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  flex,
  FlexProps,
  padding,
  PaddingProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
} from 'styled-system'
import ReactCurrencyInput from 'react-currency-input'

export type IInputMask = React.InputHTMLAttributes<HTMLInputElement> &
  BackgroundProps &
  ColorProps &
  LayoutProps &
  FlexProps &
  PaddingProps &
  ShadowProps &
  SpaceProps &
  FlexboxProps &
  BorderProps &
  BorderRadiusProps

export const CurrencyInput = styled(ReactCurrencyInput).attrs({ decimalSeparator: ',', thousandSeparator: '.' })`
  width: 100%;
  padding: 10px;
  color: #000;
  border: 1px solid #cccccc;
  outline: none;
  ${background}
  ${color}
  ${layout}
  ${flex}
  ${padding}
  ${shadow}
  ${space}
  ${flexbox}
  ${border}
  ${borderRadius}
`
