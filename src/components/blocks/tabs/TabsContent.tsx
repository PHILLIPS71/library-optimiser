import type { TabsContext } from '@/components/blocks/tabs/Tabs'

import React from 'react'
import styled from 'styled-components'

import Tabs from '@/components/blocks/tabs/Tabs'

type TabsContentElementProps = TabsContext & {
  index: number
}

const TabContentElement = styled.div<TabsContentElementProps>`
  padding: 0.5em;
  display: ${(props) => (props.active === props.index ? 'block' : 'none')};
`
const TabsContent: React.FC = ({ children }) => (
  <Tabs.Consumer>
    {(context) => (
      <>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return null
          }

          if (child.type === Tabs.Tab) {
            return (
              <TabContentElement active={context.active} index={index}>
                {child}
              </TabContentElement>
            )
          }

          return children
        })}
      </>
    )}
  </Tabs.Consumer>
)

export default TabsContent
