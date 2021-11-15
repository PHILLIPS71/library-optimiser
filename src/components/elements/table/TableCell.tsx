import styled from 'styled-components'

const TableCell = styled.td`
  padding: 8px 16px;
  vertical-align: middle;

  ${(props) => props.theme.typography.font14}
`

export default TableCell
