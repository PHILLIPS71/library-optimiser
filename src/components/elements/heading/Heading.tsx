import styled from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { variant } from 'styled-foundations'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type HeadingProps = {
  level: HeadingLevel
}

const variants: Record<HeadingLevel, {}> = {
  1: {
    fontSize: 48,
  },
  2: {
    fontSize: 42,
  },
  3: {
    fontSize: 30,
  },
  4: {
    fontSize: 24,
  },
  5: {
    fontSize: 20,
  },
  6: {
    fontSize: 16,
  },
}

const Heading = styled.h1.attrs<HeadingProps>(({ level }) => ({ as: `h${level}` }))<HeadingProps>`
  color: ${(props) => props.theme.colors.grays[100]};
  font-family: ${(props) => props.theme.fonts.text};
  font-weight: 400;
  margin: 0;

  ${() => variant({ variants, prop: 'level' })}
`

export default Heading
