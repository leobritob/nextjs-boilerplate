import React from 'react'

import { Column, Row, Text as TextComponent } from 'components'
import { SiteConstant } from 'contants'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

const Text = ({ ...props }) => <TextComponent color="#fff" fontSize="12px" {...props} />

export const Footer: React.FC = () => {
  return (
    <Column as="footer" id="footer" width="100%" borderTop="1px solid #f0f0f0">
      <Column width="100%" bg="#fff" py="40px" px="20px">
        <Row width="100%" maxWidth={SiteConstant.MAX_WIDTH} display="flex" flexWrap="wrap" alignItems="flex-start">
          <Column
            flex={1}
            minWidth="250px"
            alignItems="center"
            py={['20px', '20px', '20px', 0]}
            px={[0, 0, '20px', '20px']}
          >
            <Text fontWeight="bold" fontSize="14px" pb="5px" color="#333">
              Box 1
            </Text>
            <Text color="#333">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error ipsam veritatis, quisquam
              voluptates laboriosam esse nisi eos quam magni, labore dolor nulla velit, expedita repellendus dicta
              accusamus molestiae rerum.
            </Text>
          </Column>
          <Column flex={1} minWidth="250px" alignItems="center" py={['20px', '20px', '20px', 0]}>
            <Text fontWeight="bold" fontSize="14px" pb="5px" color="#333">
              Box 2
            </Text>
            <Text color="#333">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error ipsam veritatis, quisquam
              voluptates laboriosam esse nisi eos quam magni, labore dolor nulla velit, expedita repellendus dicta
              accusamus molestiae rerum.
            </Text>
          </Column>
          <Column flex={1} minWidth="250px" alignItems="center" py={['20px', '20px', '20px', 0]}>
            <Text fontWeight="bold" fontSize="14px" pb="5px" color="#333">
              Box 3
            </Text>
            <Row>
              <Column px="5px">
                <a href="#!" target="_blank" rel="noreferrer">
                  <FaFacebookSquare fontSize="32px" color="#333" />
                </a>
              </Column>
              <Column px="5px">
                <a href="#!" target="_blank" rel="noreferrer">
                  <FaInstagramSquare fontSize="32px" color="#333" />
                </a>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
      <Column width="100%" py="20px" bg="#f7f7f7">
        <Text fontSize="12px" color="#333">
          NextJS Boilerplate &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </Text>
      </Column>
    </Column>
  )
}
