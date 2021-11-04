import styled from 'styled-components'

const TableCell = styled.td`
  padding: 0.5em 0.75em;
  vertical-align: middle;

  ${(props) => props.theme.typography.font14}
`

export default TableCell
