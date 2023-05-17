import React from 'react'

import { action } from '@storybook/addon-actions'

import { Upload } from './upload'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof Upload>

const UploadMeta: Meta<typeof Upload> = {
  title: 'Upload',
  component: Upload,
  tags: ['autodocs'],
}

export default UploadMeta

export const Playground: Story = (args) => {
  const url = 'https://jsonplaceholder.typicode.com/posts/'

  const checkFileSize = (file: File) => {
    const kb = (file.size / 1024)
    if (kb > 30) {
      alert('holy no, size not ok')
      return false
    }
    return true
  }

  return (
    <Upload
      {...args}
      action={url}
      beforeUpload={checkFileSize}
      onChange={action('change')}
      onProgress={action('progress')}
      onSuccess={action('success')}
      onError={action('error')}
    />
  )
}
