// eslint-disable-next-line import/no-extraneous-dependencies
import type { PaddingProps } from 'styled-foundations'

import styled from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { padding } from 'styled-foundations'

type CardBodyProps = PaddingProps

const CardBody = styled.div<CardBodyProps>`
  font-size: 16px;
  padding: 8px 16px;

  img {
    max-width: 100%;
    object-fit: cover;
  }

  ${padding}
`

export default CardBody
