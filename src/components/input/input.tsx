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

export type IInput = React.InputHTMLAttributes<HTMLInputElement> &
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

export const Input = styled.input<IInput>`
  width: 100%;
  padding: 10px;
  color: #000;
  border: 1px solid #cccccc;
  outline: none;
  ${({ theme }) => `border-radius: ${theme.radii.borderRadius}px;`}
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
