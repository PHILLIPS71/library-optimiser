import React from 'react'
import styled from 'styled-components'

import NavigationSidebar from '@/layouts/compositions/NavigationSidebar'

const ContentContainer = styled.div`
  box-sizing: border-box;
  margin-left: 260px;
  min-height: 100vh;
  padding: 40px;
  position: relative;
  transition: all 0.3s;
  width: calc(100% - 260px);
`

const DefaultLayout: React.FC = ({ children }) => (
  <>
    <NavigationSidebar />

    <ContentContainer>{children}</ContentContainer>
  </>
)

export default DefaultLayout
