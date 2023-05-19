import type { DragEvent } from 'react'
import React, { useState } from 'react'

import classNames from 'classnames'

import { Icon } from '../Icon/icon'

export interface DraggerProps {
  onFile: (files: FileList) => void
  children?: React.ReactNode
}

export const Dragger: React.FC<DraggerProps> = (props) => {
  const { onFile, children } = props
  const [dragOver, setDragOver] = useState(false)

  const cname = classNames('amt-uploader-dragger', {
    'is-dragover': dragOver,
  })

  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    console.log('inside drag', e.dataTransfer.files)
    onFile(e.dataTransfer.files)
  }

  const defaultChildren = (
    <div className="flex flex-col items-center justify-center h-full">
      <Icon icon="upload" size="2x" />
      <span className="mt-4">Drag file to upload here</span>
    </div>
  )

  return (
    <div
      className={cname}
      onDragOver={(e) => { handleDrag(e, true) }}
      onDragLeave={(e) => { handleDrag(e, false) }}
      onDrop={handleDrop}
    >
      {children || defaultChildren}
    </div>
  )
}
