import React from 'react'

import Block from '@/components/elements/block/Block'
import Link from '@/components/elements/link/Link'

type FilePathLinkProps = {
  path: string
}

const FilePathLink: React.FC<FilePathLinkProps> = ({ path }) => {
  const pieces = path.split('\\')

  const isLastPart = (index: number) => pieces.length - 1 === index

  return (
    <>
      <Link href="/library">Library</Link>

      {pieces.map((part, index) => (
        <Block display="inline-block" key={part}>
          <Link href={`/library/${part}`}>{part}</Link>
          {!isLastPart(index) && (
            <Block display="inline-block" mx="4px">
              /
            </Block>
          )}
        </Block>
      ))}
    </>
  )
}

export default FilePathLink
