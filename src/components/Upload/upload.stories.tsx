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

  return (
    <Upload
      {...args}
      action={url}
      onChange={action('change')}
      onProgress={action('progress')}
      onSuccess={action('success')}
      onError={action('error')}
    />
  )
}
