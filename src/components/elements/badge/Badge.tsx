import styled from 'styled-components'

type BadgeProps = {}

const Badge = styled.div<BadgeProps>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 0.375em;
  color: ${(props) => props.theme.colors.white};
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
`

export default Badge
