import type { LinkProps as NextLinkProps } from 'next/link'

import NextLink from 'next/link'
import React from 'react'
import styled from 'styled-components'

export type LinkProps = Omit<NextLinkProps, 'as'>

const LinkElement = styled.a`
  align-items: center;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.colors.blue};
    text-decoration: underline;
  }
`

const Link: React.FC<NextLinkProps> = ({ children, ...props }) => (
  <NextLink {...props}>
    <LinkElement>{children}</LinkElement>
  </NextLink>
)

export default Link
