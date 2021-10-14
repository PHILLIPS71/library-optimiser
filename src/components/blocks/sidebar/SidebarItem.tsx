import type { NavbarContext } from '@/components/blocks/navbar/Navbar'
import type { LinkProps } from '@/components/elements/link/Link'

import NextLink from 'next/link'
import React from 'react'
import styled from 'styled-components'

type SidebarItemProps = LinkProps

const SidebarItemElement = styled.li<NavbarContext>`
  align-items: center;
  box-sizing: border-box;
  color: #797e91;
  display: flex;
  font-size: 14px;
  height: 56px;
  justify-content: flex-start;
  padding: 14px 40px;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

const LinkElement = styled.a`
  display: flex;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-weight: 600;
  transition: all 0.3s;
  gap: 16px;

  svg {
    height: 20px;
    width: 20px;
  }
`

const SidebarItem: React.FC<SidebarItemProps> = ({ children, ...props }) => (
  <SidebarItemElement>
    <NextLink {...props}>
      <LinkElement>{children}</LinkElement>
    </NextLink>
  </SidebarItemElement>
)

export default SidebarItem
