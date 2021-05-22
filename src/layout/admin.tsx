import React, { Fragment } from 'react'

import { Column, Navbar } from 'components'
import { SiteConstant } from 'contants'

interface IAdmin {
  children: React.ReactChild
}

export const Admin: React.FC<IAdmin> = ({ children }: IAdmin) => {
  return (
    <Fragment>
      <Navbar
        links={[
          { label: 'Dashboard', link: '/admin', startsWith: false },
          { label: 'Sair', link: '/' },
        ]}
      />
      <Column width="100%" minHeight="calc(100vh - 240px)" py={20} justifyContent="flex-start">
        <Column
          width="100%"
          maxWidth={SiteConstant.MAX_WIDTH}
          alignItems="flex-start"
          justifyContent="flex-start"
          px="20px"
        >
          {children}
        </Column>
      </Column>
    </Fragment>
  )
}
