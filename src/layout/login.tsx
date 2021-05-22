import React from 'react'
import Link from 'next/link'

import { Column, Text } from 'components'
import { SiteConstant } from 'contants'

interface ILogin {
  children: React.ReactChild
}

export const Login: React.FC<ILogin> = ({ children }: ILogin) => {
  return (
    <Column width="100%" height="100%" py={20} justifyContent="center" alignItems="center" bg="#f5f5f5">
      <Column
        maxWidth="500px"
        width="100%"
        alignItems="flex-start"
        justifyContent="flex-start"
        p="20px"
        bg="#fff"
        boxShadow="5px 5px 15px rgba(0, 0, 0, 0.1)"
      >
        <Column width="100%" py="20px">
          <Link href="/">
            <Column cursor="pointer">
              <Text fontSize="2.2rem">{SiteConstant.SITE_NAME}</Text>
            </Column>
          </Link>
        </Column>
        {children}
      </Column>
    </Column>
  )
}
