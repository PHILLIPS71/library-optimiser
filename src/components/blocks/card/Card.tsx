import React from 'react'
import styled from 'styled-components'

import CardBody from '@/components/blocks/card/CardBody'
import CardHead from '@/components/blocks/card/CardHead'

type CardComponent = React.FC & {
  Head: typeof CardHead
  Body: typeof CardBody
}

const CardElement = styled.div`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid #eef0f6;
  border-radius: 6px;
  position: relative;
`

const Card: CardComponent = ({ children }) => <CardElement>{children}</CardElement>

Card.Head = CardHead
Card.Body = CardBody

export default Card
