import React from 'react'
import styled from 'styled-components'

import SidebarBrand from '@/components/blocks/sidebar/SidebarBrand'
import SidebarItem from '@/components/blocks/sidebar/SidebarItem'
import SidebarMenu from '@/components/blocks/sidebar/SidebarMenu'
import SidebarSegment from '@/components/blocks/sidebar/SidebarSegment'

export type SidebarContext = {
  width?: string
}

const { Provider, Consumer } = React.createContext<SidebarContext>({})

type SidebarComponent = React.FC<SidebarContext> & {
  Consumer: React.Consumer<SidebarContext>
  Brand: typeof SidebarBrand
  Item: typeof SidebarItem
  Menu: typeof SidebarMenu
  Segment: typeof SidebarSegment
}

const SidebarElement = styled.nav<SidebarContext>`
  background-color: ${(props) => props.theme.colors.white};
  border-right: 1px solid #eef0f6;
  box-shadow: none;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transition: border-radius 0.3s;
  width: ${(props) => props.width};
  z-index: 9;
`

const Sidebar: SidebarComponent = ({ children, ...props }) => (
  <Provider
    value={{
      width: props.width,
    }}
  >
    <SidebarElement width={props.width}>{children}</SidebarElement>
  </Provider>
)

Sidebar.Consumer = Consumer
Sidebar.Brand = SidebarBrand
Sidebar.Item = SidebarItem
Sidebar.Menu = SidebarMenu
Sidebar.Segment = SidebarSegment

Sidebar.defaultProps = {
  width: '260px',
}

export default Sidebar
