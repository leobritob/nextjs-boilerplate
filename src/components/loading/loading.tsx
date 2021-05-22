import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

import { Column, Row, Text } from 'components'

export interface ILoading {
  msg?: string
}

export const Loading: React.FC<ILoading> = ({ msg }: ILoading) => {
  return (
    <Column width={1} py="20px">
      <Row width={1}>
        <AiOutlineLoading fontSize="26px" color="#000" className="spin" />
        <Text px="10px" fontSize="14px">
          {msg || 'Carregando...'}
        </Text>
      </Row>
    </Column>
  )
}
