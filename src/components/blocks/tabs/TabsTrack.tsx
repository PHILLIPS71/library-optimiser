import type { TabsContext } from '@/components/blocks/tabs/Tabs'

import React from 'react'
import styled from 'styled-components'

import Tabs from '@/components/blocks/tabs/Tabs'

const TrackElement = styled.div`
  background-color: #efeff3;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  height: 2px;
  position: relative;
`

const TrackHighlight = styled.div<TabsContext>`
  background-color: ${(props) => props.theme.colors.primary};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  bottom: 0px;
  display: block;
  height: 4px;
  left: 0;
  position: absolute;
  transform: translateX(${(props) => 156 * props.active}px);
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  width: 156px;
  z-index: 1;
`

const TabsTrack = () => (
  <Tabs.Consumer>
    {(context) => (
      <TrackElement>
        <TrackHighlight active={context.active} />
      </TrackElement>
    )}
  </Tabs.Consumer>
)

export default TabsTrack
