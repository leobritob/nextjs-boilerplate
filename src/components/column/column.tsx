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
  position,
  PositionProps,
  opacity,
  OpacityProps,
} from 'styled-system'

export type IColumn = BackgroundProps &
  ColorProps &
  LayoutProps &
  FlexProps &
  PaddingProps &
  ShadowProps &
  SpaceProps &
  FlexboxProps &
  BorderProps &
  BorderRadiusProps &
  PositionProps &
  OpacityProps & {
    cursor?: string
    hoverBgColor?: string | boolean
    outline?: string
    filter?: string
    backdropFilter?: string
  }

export const Column = styled.div<IColumn>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
  ${({ outline }) => outline && `outline: ${outline};`}
  ${({ hoverBgColor }) =>
    Boolean(hoverBgColor) === true
      ? `
        transition: all 100ms linear;
        &:hover {
          background-color: ${hoverBgColor === true ? 'rgba(0, 0, 0, 0.15)' : hoverBgColor};
        }
      `
      : null}
  ${({ filter }) => filter && `filter: ${filter};`}
  ${({ backdropFilter }) => backdropFilter && `backdrop-filter: ${backdropFilter};`}
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
  ${position}
  ${opacity}
`
