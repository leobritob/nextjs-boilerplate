import React from 'react'
import Link from 'next/link'

import { Column, Text } from 'components'

interface IDefault {
  children: React.ReactNode
  onClick?: any
  isActive?: boolean
}

const Default: React.FC<IDefault> = ({ children, onClick, isActive }: IDefault) => (
  <Column
    as="a"
    cursor="pointer"
    width={[1, 1, 'auto', 'auto']}
    height="60px"
    p="5px 20px"
    color="#fff"
    onClick={onClick}
    hoverBgColor
    bg={isActive ? 'rgba(0, 0, 0, 0.2)' : ''}
  >
    <Text fontSize="15px" fontWeight="500" lineHeight="24px">
      {children}
    </Text>
  </Column>
)

interface INavItem {
  children: React.ReactNode
  href?: string
  onClick?: any
  isActive?: boolean
}

export const NavbarItem: React.FC<INavItem> = ({ children, href, onClick, isActive }: INavItem) => {
  if (href) {
    return (
      <Link href={href}>
        <Default isActive={isActive}>{children}</Default>
      </Link>
    )
  }

  return <Default onClick={onClick}>{children}</Default>
}
