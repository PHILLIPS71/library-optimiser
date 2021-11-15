import type { GetSystemDirectoryQuery } from '@/__generated__/graphql-types'

import filesize from 'filesize'
import React from 'react'
import { File, Folder } from 'react-feather'

import Badge from '@/components/elements/badge/Badge'
import Link from '@/components/elements/link/Link'
import Paragraph from '@/components/elements/paragraph/Paragraph'
import Table from '@/components/elements/table/Table'
import FilePathLink from '@/features/library/FilePathLink'

type FileExplorerTableProps = {
  directory: GetSystemDirectoryQuery['system_directory']
}

type GetSystemDirectoryFile = GetSystemDirectoryQuery['system_directory']['files'][number]

const FileExplorerTable: React.FC<FileExplorerTableProps> = ({ directory }) => {
  const getDefaultVideoStream = (file: GetSystemDirectoryFile) =>
    file.library_file?.video_streams.find((x) => x.default === 1)

  return (
    <Table hoverable bordered>
      <Table.Head>
        <Table.Heading>
          <input type="checkbox" />
        </Table.Heading>
        <Table.Heading colSpan={4}>
          <FilePathLink path={directory.slug} />
        </Table.Heading>
      </Table.Head>

      <Table.Body>
        {directory.sub_directories.map((folder) => (
          <Table.Row key={folder.path}>
            <Table.Cell>
              <input type="checkbox" />
            </Table.Cell>
            <Table.Cell>
              <Folder size={16} />
            </Table.Cell>
            <Table.Cell>
              <Link href={`/library/${folder.slug}`}>{folder.name}</Link>
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <Paragraph>{filesize(folder.size)}</Paragraph>
            </Table.Cell>
          </Table.Row>
        ))}
        {directory.files.map((file) => {
          const stream = getDefaultVideoStream(file)

          return (
            <Table.Row key={file.path}>
              <Table.Cell>
                <input type="checkbox" />
              </Table.Cell>
              <Table.Cell>
                <File size={16} />
              </Table.Cell>
              <Table.Cell>
                <Paragraph>{file.name}</Paragraph>
              </Table.Cell>
              <Table.Cell>{stream && <Badge>{stream.codec}</Badge>}</Table.Cell>
              <Table.Cell>
                <Paragraph>{filesize(file.size)}</Paragraph>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}

export default FileExplorerTable
