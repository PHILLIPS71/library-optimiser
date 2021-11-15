import type { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { useApollo } from '@/library/apollo/apollo'
import LightTheme from '@/themes/light-theme'

import 'public/scss/main.scss'

const Application = ({ Component, pageProps }: AppProps) => {
  const apollo = useApollo(pageProps)

  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={LightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Application
