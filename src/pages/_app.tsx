import type { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import React from 'react'

import { useApollo } from '@/library/apollo/apollo'

const Application = ({ Component, pageProps }: AppProps) => {
  const apollo = useApollo(pageProps)

  return (
    <ApolloProvider client={apollo}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default Application
