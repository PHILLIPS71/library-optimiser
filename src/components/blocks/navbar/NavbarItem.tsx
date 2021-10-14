import type { NavbarContext } from '@/components/blocks/navbar/Navbar'
import type { LinkProps } from '@/components/elements/link/Link'

import React from 'react'
import styled from 'styled-components'

import Link from '@/components/elements/link/Link'

type NavbarItemProps = LinkProps

const NavbarItemElement = styled.div<NavbarContext>`
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: ${(props) => props.theme.fonts.tertiary};
  font-weight: 400;
  position: relative;
`

const NavbarItemLinkElement = styled(Link)`
  font-family: ${(props) => props.theme.fonts.tertiary};
  font-weight: 400;
`

const NavbarItem: React.FC<NavbarItemProps> = ({ children, ...props }) => (
  <NavbarItemElement>
    <NavbarItemLinkElement {...props}>{children}</NavbarItemLinkElement>
  </NavbarItemElement>
)

export default NavbarItem
