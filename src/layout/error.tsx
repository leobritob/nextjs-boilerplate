import React, { Fragment } from 'react'
import Link from 'next/link'

import { Column } from 'components'
import { SiteConstant } from 'contants'

interface ISite {
  children: React.ReactChild
}

export const ErrorLayout: React.FC<ISite> = ({ children }: ISite) => {
  return (
    <Fragment>
      <Column width="100%" maxWidth={SiteConstant.MAX_WIDTH} margin="0 auto" py="20px">
        {children}
        <br />
        <Link href="/">Voltar para o site</Link>
      </Column>
    </Fragment>
  )
}
