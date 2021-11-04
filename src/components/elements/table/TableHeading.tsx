import styled from 'styled-components'

const TableHead = styled.th`
  padding: 0.5em 0.75em;
  vertical-align: top;

  ${(props) => props.theme.typography.font16}
`

export default TableHead
