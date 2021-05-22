import React from 'react'
import Link from 'next/link'

import { Row, Column, Text } from 'components'
import { SiteConstant } from 'contants'

export const Header: React.FC = () => {
  return (
    <Row as="header" width="100%" display="flex" flexWrap="wrap">
      <Column as="header" width="100%" minHeight="150px" py="30px" backgroundColor="#ffffff">
        <Row
          maxWidth={SiteConstant.MAX_WIDTH}
          width="100%"
          height="100%"
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <Column width={['100%', '100%', '300px', '300px']} cursor="pointer">
            <Link href="/">
              <Text fontSize="2.2rem">NextJS Boilerplate</Text>
            </Link>
          </Column>
        </Row>
      </Column>
    </Row>
  )
}
