import styled from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import * as foundations from 'styled-foundations'

type BlockProps =
  | foundations.DisplayProps
  | foundations.MarginProps
  | foundations.MarginXProps
  | foundations.MarginYProps
  | foundations.MarginTopProps
  | foundations.MarginBottomProps
  | foundations.MarginLeftProps
  | foundations.MarginRightProps
  | foundations.PaddingProps
  | foundations.PaddingXProps
  | foundations.PaddingYProps
  | foundations.PaddingTopProps
  | foundations.PaddingBottomProps
  | foundations.PaddingLeftProps
  | foundations.PaddingRightProps

const Block = styled.div<BlockProps>`
  ${foundations.display}

  ${foundations.margin}
  ${foundations.marginX}
  ${foundations.marginY}
  ${foundations.marginTop}
  ${foundations.marginBottom}
  ${foundations.marginLeft}
  ${foundations.marginRight}

  ${foundations.padding}
  ${foundations.paddingX}
  ${foundations.paddingY}
  ${foundations.paddingTop}
  ${foundations.paddingBottom}
  ${foundations.paddingLeft}
  ${foundations.paddingRight}
`

export default Block
