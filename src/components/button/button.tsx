import React from 'react'
import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps, background, BackgroundProps, border, BorderProps } from 'styled-system'
import { AiOutlineLoading } from 'react-icons/ai'

import { Text } from 'components'

const ButtonComponent = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  ${({ theme }) => `border-radius: ${theme.radii.borderRadius}px;`}
  ${layout}
  ${space}
  ${background}
  ${border}
`

export type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> &
  LayoutProps &
  SpaceProps &
  BorderProps &
  BackgroundProps & {
    label?: string
    type?: 'submit' | 'button' | 'reset'
    isLoading?: boolean
    children?: React.ReactNode
    textColor?: string
  }

export const Button: React.FC<IButton> = ({ label, isLoading, children, textColor, ...props }: IButton) => {
  return (
    <ButtonComponent {...props} disabled={isLoading}>
      {isLoading ? (
        <AiOutlineLoading fontSize="14px" color="#fff" className="spin" />
      ) : children ? (
        children
      ) : (
        <Text fontSize="14px" color={textColor || '#fff'}>
          {label}
        </Text>
      )}
    </ButtonComponent>
  )
}
