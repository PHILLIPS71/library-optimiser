import type { TabsContext } from '@/components/blocks/tabs/Tabs'

import React from 'react'
import styled from 'styled-components'

import Tabs from '@/components/blocks/tabs/Tabs'

type TabListProps = {
  onChange: (index: number) => void
}

type TabListElementProps = TabsContext & {
  index: number
}

const TabList = styled.ul`
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
  margin: 10px 0;
  padding: 0;

  ${(props) => props.theme.typography.font16}
`

const TabListItemElement = styled.li<TabListElementProps>`
  color: ${(props) => (props.active === props.index ? props.theme.colors.primary : '#d2d2d7')};
  cursor: pointer;
  display: block;
  text-align: center;
  flex-basis: 156px;
  font-weight: 500;
  transition: color 0.4s;
`

const TabsList: React.FC<TabListProps> = ({ children, onChange }) => (
  <Tabs.Consumer>
    {(context) => (
      <TabList>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return null
          }

          if (child.type === Tabs.Tab) {
            return (
              <TabListItemElement index={index} active={context.active} onClick={() => onChange(index)}>
                {child.props.title}
              </TabListItemElement>
            )
          }

          return children
        })}
      </TabList>
    )}
  </Tabs.Consumer>
)

export default TabsList
