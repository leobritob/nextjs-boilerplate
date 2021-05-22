import React, { Fragment } from 'react'

import { Column, Header, Navbar, Footer } from 'components'
import { SiteConstant } from 'contants'

interface ISite {
  children: React.ReactChild
}

export const Site: React.FC<ISite> = ({ children }: ISite) => {
  return (
    <Fragment>
      <Header />
      <Navbar
        links={[
          { label: 'Início', link: '/', startsWith: false },
          { label: 'Login', link: '/login' },
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
      <Footer />
    </Fragment>
  )
}
