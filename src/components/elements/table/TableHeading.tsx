import styled from 'styled-components'

const TableHead = styled.th`
  padding: 8px 16px;
  vertical-align: middle;

  ${(props) => props.theme.typography.font16}
`

export default TableHead
