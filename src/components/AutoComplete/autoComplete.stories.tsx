import React from 'react'

import { AutoComplete } from './autoComplete'

import type { DataSourceType } from './autoComplete'
import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof AutoComplete>

const AutoCompleteMeta: Meta<typeof AutoComplete> = {
  title: 'AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
}
export default AutoCompleteMeta

interface Player {
  name: string
  number: number
}

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

const fetchSuggestions = (keyword: string) => {
  const data = [
    { value: 'bradley', name: 'bradley', number: 4 },
    { value: 'pope', name: 'pope', number: 5 },
    { value: 'caruso', name: 'caruso', number: 6 },
    { value: 'cook', name: 'cook', number: 7 },
    { value: 'cousins', name: 'cousins', number: 8 },
    { value: 'james', name: 'james', number: 23 },
    { value: 'AD', name: 'AD', number: 13 },
    { value: 'green', name: 'green', number: 42 },
    { value: 'howard', name: 'howard', number: 34 },
    { value: 'kuzma', name: 'kuzma', number: 54 },
    { value: 'McGee', name: 'McGee', number: 12 },
    { value: 'rando', name: 'rando', number: 32 },
  ]
  const res = data.filter((player) => player.name.includes(keyword)).sort()
  return res
}

const select = (keyword: DataSourceType<Player>) => {
  console.log(keyword)
}

const renderOption = (data: DataSourceType) => {
  const sData = data as DataSourceType<Player>
  return (
    <>
      <h2>{sData.name}</h2>
      <h4>{sData.number}</h4>
    </>
  )
}

export const Playground: Story = (args) => (
  <AutoComplete
    {...args}
    renderOption={args.renderOption || renderOption}
    fetchSuggestions={args.fetchSuggestions || fetchSuggestions}
    onSelect={args.onSelect || select}
  />
)

export const AutoCompleteWithLoading: Story = () => {
  const fetchGithubUsers = (query: string) => fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => items.slice(0, 10).map((item: any) => ({ value: item.login, ...item })))
  const onSelect = (data: any) => console.log(data)
  const render = (data: DataSourceType) => {
    const sData = data as DataSourceType<GithubUserProps>
    return (
      <>
        <h2>{sData.login}</h2>
        <h4>{sData.url}</h4>
      </>
    )
  }
  return (
    <AutoComplete
      fetchSuggestions={fetchGithubUsers}
      onSelect={onSelect}
      renderOption={render}
    />

  )
}
