import type { GetSystemDirectoryQuery, GetSystemDirectoryQueryVariables } from '@/__generated__/graphql-types'
import type { GetServerSideProps, NextPage } from 'next'

import { gql } from '@apollo/client'
import React from 'react'

import Grid from '@/components/elements/grid/Grid'
import FileExplorer from '@/features/library/file-explorer/FileExplorer'
import DefaultLayout from '@/layouts/Default'
import { initialize } from '@/library/apollo/apollo'

type LibraryPageProps = {
  directory: GetSystemDirectoryQuery['system_directory']
}

const SYSTEM_DIRECTORY = gql`
  query GetSystemDirectory($data: MessageInput!) {
    system_directory(data: $data) {
      name
      path
      slug
      size
      sub_directories {
        name
        path
        slug
        size
      }
      files {
        name
        path
        size
        library_file {
          video_streams {
            default
            codec
          }
        }
      }
    }
  }
`

const LibraryPage: NextPage<LibraryPageProps> = ({ directory }) => (
  <DefaultLayout>
    <Grid>
      <Grid.Column span={8}>
        <FileExplorer directory={directory} />
      </Grid.Column>
    </Grid>
  </DefaultLayout>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apollo = initialize()

  const params = (context.query?.slug as string[]) ?? []
  const path = params.reduce((x, param) => `${x}\\${param}`, '')

  const { data } = await apollo.query<GetSystemDirectoryQuery, GetSystemDirectoryQueryVariables>({
    query: SYSTEM_DIRECTORY,
    variables: {
      data: {
        path: `${process.env.NEXT_PUBLIC_LIBRARY_DIRECTORY!}${path}`,
      },
    },
  })

  return {
    props: {
      directory: data.system_directory,
    },
  }
}

export default LibraryPage
