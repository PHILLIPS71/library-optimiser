import type { SidebarContext } from '@/components/blocks/sidebar/Sidebar'

import React from 'react'
import { Folder, HardDrive } from 'react-feather'

import Sidebar from '@/components/blocks/sidebar/Sidebar'

const NavigationSidebar: React.FC<SidebarContext> = ({ width }) => (
  <Sidebar width={width}>
    <Sidebar.Brand>
      <Sidebar.Item href="/">
        <img src="/images/logo.png" alt="logo" />
      </Sidebar.Item>
    </Sidebar.Brand>

    <Sidebar.Menu>
      <Sidebar.Segment>
        <Sidebar.Item href="/">
          <HardDrive /> Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="/library">
          <Folder /> Library
        </Sidebar.Item>
      </Sidebar.Segment>
    </Sidebar.Menu>
  </Sidebar>
)

export default NavigationSidebar
