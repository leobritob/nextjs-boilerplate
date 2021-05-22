import React, { Fragment } from 'react'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { Animated } from 'react-animated-css'

import { Row, Column, Text, NavbarItem, Desktop, MobileAndTablet } from 'components'
import { SiteConstant } from 'contants'
import { useRouter } from 'next/router'
import { useNavMobile } from '../../contexts/nav-mobile'
import Link from 'next/link'

export interface INavbarLink {
  label: string
  link: string
  startsWith?: boolean
}

interface INavbar {
  links: INavbarLink[]
}

export const Navbar: React.FC<INavbar> = ({ links }: INavbar) => {
  const { navMobile, setNavMobile } = useNavMobile()
  const router = useRouter()

  const isActive = (path: string, startWith = true) => {
    if (startWith) {
      return router.route.startsWith(path)
    }

    return router.route === path
  }

  const pushRoute = (route: string) => {
    router.push(route)
    setNavMobile({ isVisible: false })
  }

  return (
    <Fragment>
      <Row
        as="nav"
        id="navbar"
        width="100%"
        height="60px"
        bg="primary"
        boxShadow="0px 5px 10px rgba(0,0,0,0.2)"
        position="sticky"
        top="0"
        zIndex={8}
        borderRadius="0"
      >
        <Row id="navbar-inner" maxWidth={SiteConstant.MAX_WIDTH} width="100%" height="100%">
          <Desktop as={Column} flex={1} display="flex">
            <Row flex={1} flexWrap="wrap" width="100%" alignItems="center" justifyContent="flex-start">
              {links.map((item: INavbarLink, index: number) => (
                <NavbarItem
                  key={index}
                  isActive={isActive(item.link, item.startsWith)}
                  onClick={() => pushRoute(item.link)}
                >
                  {item.label}
                </NavbarItem>
              ))}
            </Row>
          </Desktop>

          <MobileAndTablet as={Column} flex={1} display="flex">
            <Column
              flex={1}
              width="100%"
              height="60px"
              cursor="pointer"
              alignItems="flex-end"
              justifyContent="flex-end"
              hoverBgColor
              onClick={() => setNavMobile({ isVisible: true })}
            >
              <Column width="90px" height="100%">
                <IoIosMenu color="#fff" fontSize="32px" />
              </Column>
            </Column>
          </MobileAndTablet>
        </Row>
      </Row>

      <Column
        as={Animated}
        animationIn="fadeIn"
        animationInDuration={200}
        animationInDelay={0}
        animationOut="fadeOut"
        animationOutDelay={0}
        animationOutDuration={200}
        isVisible={navMobile.isVisible}
        animateOnMount={false}
        width="100vw"
        height="100vh"
        alignItems="flex-start"
        justifyContent="flex-start"
        bg="rgba(255,255,255,0.4)"
        backdropFilter="blur(10px)"
        position="fixed"
        top="0"
        left="0"
        zIndex={9}
      >
        <Column width="100%" height="60px" alignItems="flex-end">
          <Text px="20px" cursor="pointer" onClick={() => setNavMobile({ isVisible: false })}>
            <IoIosClose color="#000" size="38px" />
          </Text>
        </Column>
        <Column width="100%" p="20px 0">
          <Text fontSize={36}>{SiteConstant.SITE_NAME}</Text>
          <Column width="60%" height="1px" bg="rgba(0,0,0,0.1)" my="10px" />
        </Column>
        <Column width="100%">
          {links.map((item: INavbarLink, index: number) => (
            <Text key={index} color="#000" py="20px" cursor="pointer" onClick={() => pushRoute(item.link)}>
              {item.label}
            </Text>
          ))}
        </Column>
      </Column>
    </Fragment>
  )
}
