import React from 'react'

import { action } from '@storybook/addon-actions'

import { Upload } from './upload'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof Upload>

/**
 * Many thanks to the apis being used in the demo
 *
 * 1. [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
 * 2. [Mocky](https://designer.mocky.io/)
 *
 * Apart from uploading by clicks, you can try to drag and drop down files <a href="#draggable-upload">here</a>
 *
 */
const UploadMeta: Meta<typeof Upload> = {
  title: 'DataInput/Upload',
  component: Upload,
  tags: ['autodocs'],
}
export default UploadMeta

/**
 * Try to upload some small file ( < 200kb)
 */
export const Default: Story = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/'

  return (
    <Upload
      action={url}
      onChange={action('change')}
      onProgress={action('progress')}
      onSuccess={action('success')}
      onError={action('error')}
    />
  )
}

/**
 * This api accepts bigger file
 */
export const BiggerFileUpload: Story = (args) => {
  const url = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

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

/**
 * Try to drag some files and drop in the zone
 */
export const DraggableUpload: Story = (args) => {
  const url = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

  return (
    <Upload
      {...args}
      action={url}
      onChange={action('change')}
      onProgress={action('progress')}
      onSuccess={action('success')}
      onError={action('error')}
      drag
    />
  )
}
