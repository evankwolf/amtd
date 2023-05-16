import React from 'react'

import { AutoComplete } from './autoComplete'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof AutoComplete>

const AutoCompleteMeta: Meta<typeof AutoComplete> = {
  title: 'AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
}
export default AutoCompleteMeta

const fetch = (keyword: string) => {
  const data = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
    'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  return data.filter((string) => string.includes(keyword)).sort()
}

const select = (keyword: string) => {
  console.log(keyword)
}

export const Playground: Story = (args) => (
  <AutoComplete
    {...args}
    fetchSuggestions={args.fetchSuggestions || fetch}
    onSelect={args.onSelect || select}
  />
)
