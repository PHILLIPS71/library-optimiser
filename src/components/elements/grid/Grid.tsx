import type { Responsive } from '@/utilities/styling/typings/responsive.types'
import type { Property } from 'csstype'
import type { DefaultTheme, ThemedStyledProps } from 'styled-components'

import React from 'react'
import styled from 'styled-components'

import GridColumn from '@/components/elements/grid/GridColumn'
import { getMediaQueries, getResponsiveNumber, getResponsiveValue } from '@/utilities/styling/responsive'

export type GridContext = {
  columns: Responsive<number>
  gaps: Responsive<number>
  gutters: Responsive<number>
}

type GridProps = Partial<GridContext> & {
  align?: Property.JustifyContent
  behavior?: 'fluid' | 'fixed'
  gutters?: Responsive<number>
  margins?: Responsive<number>
}

const defaultState: GridContext = {
  columns: [4, 8, 12],
  gaps: 0,
  gutters: [16, 16, 16],
}

const { Provider, Consumer } = React.createContext<GridContext>(defaultState)

type GridComponent = React.FC<GridProps> & {
  Consumer: React.Consumer<GridContext>
  Column: typeof GridColumn
}

const getGridStyles = ({ theme, align, behavior, gutters, margins }: ThemedStyledProps<GridProps, DefaultTheme>) => {
  const mediaQueries = getMediaQueries(theme.breakpoints)
  const gridStyles = mediaQueries.reduce(
    (acc, cur, idx) => ({
      ...acc,
      [cur]: {
        paddingLeft: getResponsiveNumber(margins, idx) - getResponsiveNumber(gutters, idx) / 2 - 0.5,
        paddingRight: getResponsiveNumber(margins, idx) - getResponsiveNumber(gutters, idx) / 2 - 0.5,
        alignItems: `${getResponsiveValue(align, idx)}`,
      },
    }),
    {
      paddingLeft: getResponsiveNumber(margins, 0) - getResponsiveNumber(gutters, 0) / 2 - 0.5,
      paddingRight: getResponsiveNumber(margins, 0) - getResponsiveNumber(gutters, 0) / 2 - 0.5,
      alignItems: getResponsiveValue(align, 0),
    }
  )

  return {
    maxWidth:
      behavior === 'fixed' ? `calc(${theme.layout.maxWidth} * ${getResponsiveNumber(margins, Infinity) - 1})` : 'unset',
    ...gridStyles,
  }
}

const GridElement = styled.div<GridProps>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: ${(props) => props.align};
  margin-left: auto;
  margin-right: auto;

  ${getGridStyles}
`

const Grid: GridComponent = ({ children, align, behavior, columns, gaps, gutters, margins }) => (
  <GridElement align={align} behavior={behavior} gutters={gutters} margins={margins}>
    <Provider
      value={{
        columns: columns || defaultState.columns,
        gaps: gaps || defaultState.gaps,
        gutters: gutters || defaultState.gutters,
      }}
    >
      {children}
    </Provider>
  </GridElement>
)

Grid.Consumer = Consumer
Grid.Column = GridColumn

Grid.defaultProps = {
  align: 'flex-start',
  behavior: 'fluid',
  gutters: [8, 16, 36, 36],
  margins: [8, 16, 36, 64],
}

export default Grid
