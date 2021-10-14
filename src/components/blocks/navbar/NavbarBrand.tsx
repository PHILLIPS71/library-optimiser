import type { NavbarContext } from '@/components/blocks/navbar/Navbar'

import React from 'react'
import styled from 'styled-components'

import Navbar from '@/components/blocks/navbar/Navbar'

const NavbarBrandElement = styled.div<NavbarContext>`
  align-items: center;
  display: flex;
  height: ${(props) => props.height};
  margin-right: 20px;
  flex-shrink: 0;
  min-height: 3.25rem;

  img {
    height: calc(${(props) => props.height} * 0.75);
  }
`

const NavbarBrand: React.FC = ({ children }) => (
  <Navbar.Consumer>
    {(context) => <NavbarBrandElement height={context.height}>{children}</NavbarBrandElement>}
  </Navbar.Consumer>
)

export default NavbarBrand
