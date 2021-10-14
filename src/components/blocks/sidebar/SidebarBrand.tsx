import type { SidebarContext } from '@/components/blocks/sidebar/Sidebar'

import React from 'react'
import styled from 'styled-components'

import Sidebar from '@/components/blocks/sidebar/Sidebar'

const SidebarBrandElement = styled.div<SidebarContext>`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: calc(${(props) => props.width} * 0.5);
  }
`

const SidebarBrand: React.FC = ({ children }) => (
  <Sidebar.Consumer>
    {(context) => <SidebarBrandElement width={context.width}>{children}</SidebarBrandElement>}
  </Sidebar.Consumer>
)

export default SidebarBrand
