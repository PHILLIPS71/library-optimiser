import type { GetSystemDirectoryQuery } from '@/__generated__/graphql-types'

import React from 'react'

import Card from '@/components/blocks/card/Card'
import Block from '@/components/elements/block/Block'
import FileExplorerControls from '@/features/library/file-explorer/FileExplorerControls'
import FileExplorerTable from '@/features/library/file-explorer/FileExplorerTable'

type FileExplorerProps = {
  directory: GetSystemDirectoryQuery['system_directory']
}

const FileExplorer: React.FC<FileExplorerProps> = ({ directory }) => (
  <Block>
    <FileExplorerControls />

    <Card>
      <Card.Body p={0}>
        <FileExplorerTable directory={directory} />
      </Card.Body>
    </Card>
  </Block>
)

export default FileExplorer
