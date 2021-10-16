import React from 'react'
import styled from 'styled-components'

const TabsTabElement = styled.li`
  display: block;
`

type TabProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  title: string
}

const TabsTab: React.FC<TabProps> = ({ children }) => <TabsTabElement>{children}</TabsTabElement>

export default TabsTab
