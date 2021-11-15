import React from 'react'
import styled from 'styled-components'

import TabsContent from '@/components/blocks/tabs/TabsContent'
import TabsList from '@/components/blocks/tabs/TabsList'
import TabsTab from '@/components/blocks/tabs/TabsTab'
import TabsTrack from '@/components/blocks/tabs/TabsTrack'

export type TabsContext = {
  active: number
}

const { Provider, Consumer } = React.createContext<TabsContext>({
  active: 0,
})

type TabComponent = React.FC & {
  Consumer: React.Consumer<TabsContext>
  Tab: typeof TabsTab
}

const TabElement = styled.div``

const Tabs: TabComponent = ({ children }) => {
  const [active, setActive] = React.useState<number>(0)

  return (
    <Provider
      value={{
        active,
      }}
    >
      <TabElement>
        <TabsList onChange={(index) => setActive(index)}>{children}</TabsList>
        <TabsTrack />

        <TabsContent>{children}</TabsContent>
      </TabElement>
    </Provider>
  )
}

Tabs.Consumer = Consumer
Tabs.Tab = TabsTab

export default Tabs
