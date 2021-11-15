import type { NormalizedCacheObject } from '@apollo/client'

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import React from 'react'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let client: ApolloClient<NormalizedCacheObject> | null = null

export const create = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_GATEWAY_URL!,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  })

export const initialize = (initialState = null) => {
  const apollo = client ?? create()

  if (initialState) {
    apollo.cache.restore(initialState)
  }

  if (typeof window === 'undefined') {
    return apollo
  }

  if (!client) {
    client = apollo
  }

  return apollo
}

export const useApollo = (pageProps: any) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = React.useMemo(() => initialize(state), [state])
  return store
}
