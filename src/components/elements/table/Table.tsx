import React from 'react'
import styled from 'styled-components'

import TableBody from '@/components/elements/table/TableBody'
import TableCell from '@/components/elements/table/TableCell'
import TableHead from '@/components/elements/table/TableHead'
import TableHeading from '@/components/elements/table/TableHeading'
import TableRow from '@/components/elements/table/TableRow'

export type TableContext = {
  bordered?: boolean
  hoverable?: boolean
}

const { Provider, Consumer } = React.createContext<TableContext>({
  bordered: false,
  hoverable: false,
})

type TableComponent = React.FC<TableContext> & {
  Consumer: React.Consumer<TableContext>
  Head: typeof TableHead
  Body: typeof TableBody
  Cell: typeof TableCell
  Heading: typeof TableHeading
  Row: typeof TableRow
}

const TableElement = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`

const Table: TableComponent = ({ children, ...props }) => (
  <Provider
    value={{
      bordered: props.bordered,
      hoverable: props.hoverable,
    }}
  >
    <TableElement>{children}</TableElement>
  </Provider>
)

Table.Consumer = Consumer
Table.Body = TableBody
Table.Cell = TableCell
Table.Head = TableHead
Table.Heading = TableHeading
Table.Row = TableRow

export default Table
