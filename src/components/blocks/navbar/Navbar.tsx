import React from 'react'
import styled from 'styled-components'

import NavbarBrand from '@/components/blocks/navbar/NavbarBrand'
import NavbarItem from '@/components/blocks/navbar/NavbarItem'
import NavbarMenu from '@/components/blocks/navbar/NavbarMenu'
import NavbarSegment from '@/components/blocks/navbar/NavbarSegment'
import Container from '@/components/elements/container/Container'

export type NavbarContext = {
  height?: string
}

const { Provider, Consumer } = React.createContext<NavbarContext>({
  height: '60px',
})

type NavbarComponent = React.FC<NavbarContext> & {
  Consumer: React.Consumer<NavbarContext>
  Brand: typeof NavbarBrand
  Menu: typeof NavbarMenu
  Segment: typeof NavbarSegment
  Item: typeof NavbarItem
}

const NavbarElement = styled.nav<NavbarContext>`
  /* position: fixed; */
  left: 0;
  top: 0;
  z-index: 9;
  height: ${(props) => props.height};
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
  transition: all 0.3s;

  ${Container} {
    align-items: stretch;
    display: flex;
    min-height: ${(props) => props.height};
    width: 100%;
  }
`

const NavbarShadow = styled.div`
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAOBAMAAAD3WtBsAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAD29va1cB7UAAAAB3RSTlMCCwQHGBAaZf6MKAAAABpJREFUCNdjSGNIY3BhCGUQBEJjIFQCQigAACyJAjLNW4w5AAAAAElFTkSuQmCC);
  background-repeat: repeat-x;
  background-size: 1px 7px;
  bottom: -6px;
  box-sizing: border-box;
  height: 7px;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  z-index: 0;
`

const Navbar: NavbarComponent = ({ children, ...props }) => (
  <Provider
    value={{
      height: props.height,
    }}
  >
    <NavbarElement height={props.height}>
      <Container>{children}</Container>

      <NavbarShadow />
    </NavbarElement>
  </Provider>
)

Navbar.Consumer = Consumer
Navbar.Brand = NavbarBrand
Navbar.Menu = NavbarMenu
Navbar.Segment = NavbarSegment
Navbar.Item = NavbarItem

Navbar.defaultProps = {
  height: '60px',
}

export default Navbar
