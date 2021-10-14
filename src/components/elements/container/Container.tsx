import styled from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { responsive } from 'styled-foundations'

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;

  ${responsive({
    breakpoints: [
      {
        maxWidth: '100%',
      },
      {
        maxWidth: '960px',
      },
      {
        maxWidth: '1152px',
      },
      {
        maxWidth: '1344px',
      },
    ],
  })}
`

export default Container
