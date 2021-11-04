import type { TableContext } from '@/components/elements/table/Table'

import React from 'react'
import styled from 'styled-components'

import Table from '@/components/elements/table/Table'

const TableRowElement = styled.tr<TableContext>`
  border-top: ${(props) => (props.bordered ? '1px solid #eef0f6' : 'unset')};

  &:hover {
    background-color: ${(props) => (props.hoverable ? '#fafafa' : 'unset')};
  }
`

const TableRow: React.FC = ({ children }) => (
  <Table.Consumer>
    {(context) => (
      <TableRowElement bordered={context.bordered} hoverable={context.hoverable}>
        {children}
      </TableRowElement>
    )}
  </Table.Consumer>
)

export default TableRow
