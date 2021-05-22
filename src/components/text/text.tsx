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
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  space,
  SpaceProps,
} from 'styled-system'

type IColumn = BackgroundProps &
  ColorProps &
  LayoutProps &
  FlexProps &
  PaddingProps &
  ShadowProps &
  FontFamilyProps &
  FontSizeProps &
  FontStyleProps &
  FontWeightProps &
  SpaceProps & { textDecoration?: string; lineHeight?: string; hoverColor?: string | boolean; cursor?: string }

export const Text = styled.span<IColumn>`
  ${({ textDecoration }) => textDecoration && `text-decoration: ${textDecoration};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ hoverColor, theme }) =>
    Boolean(hoverColor) === true
      ? `
        transition: all 100ms linear;
        &:hover {
          color: ${hoverColor === true ? theme.colors.primary : hoverColor};
        }
      `
      : null}
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
  ${background}
  ${color}
  ${layout}
  ${flex}
  ${padding}
  ${shadow}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${space}
`
