import React from 'react'

import { action } from '@storybook/addon-actions'

import { AutoComplete } from './autoComplete'

import type { DataSourceType } from './autoComplete'
import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof AutoComplete>

/**
 * This component is based on `Input` component.
 * Just try to type several letters in the input
 * <a href="/amtd/?path=/story/datainput-autocomplete--fetch-github-user">here</a>.
 * All data is fetched from Github.
 *
 * You can get input value and return results using `fetchSuggestions` attr.
 *
 * The `renderOption` can help you customize the suggestion items display.
 * You can check the example <a href="#customize-render">here</a>.
 *
 * It also has the same props as `Input` component does since it's based on the latter.
 *
 * > Many thanks to github so that we can fetch github users as a demo.
 */
const AutoCompleteMeta: Meta<typeof AutoComplete> = {
  title: 'DataInput/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
}
export default AutoCompleteMeta

// interface Player {
//   name: string
//   number: number
// }

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
  id: number
}

const fetchGithubUsers = (query: string) => fetch(`https://api.github.com/search/users?q=${query}`)
  .then((res) => res.json())
  .then(({ items }) => items.slice(0, 10).map((item: any) => ({ value: item.login, ...item })))

// const fetchSuggestions = (keyword: string) => {
//   const data = [
//     { value: 'bradley', name: 'bradley', number: 4 },
//     { value: 'pope', name: 'pope', number: 5 },
//     { value: 'caruso', name: 'caruso', number: 6 },
//     { value: 'cook', name: 'cook', number: 7 },
//     { value: 'cousins', name: 'cousins', number: 8 },
//     { value: 'james', name: 'james', number: 23 },
//     { value: 'AD', name: 'AD', number: 13 },
//     { value: 'green', name: 'green', number: 42 },
//     { value: 'howard', name: 'howard', number: 34 },
//     { value: 'kuzma', name: 'kuzma', number: 54 },
//     { value: 'McGee', name: 'McGee', number: 12 },
//     { value: 'rando', name: 'rando', number: 32 },
//   ]
//   const res = data.filter((player) => player.name.includes(keyword)).sort()
//   return res
// }

// const renderOption = (data: DataSourceType) => {
//   const sData = data as DataSourceType<Player>
//   return (
//     <>
//       <h2>{sData.name}</h2>
//       <h4>{sData.number}</h4>
//     </>
//   )
// }

export const FetchGithubUser: Story = (args) => (
  /**
 * hi nihao
 */
  <AutoComplete
    {...args}
    fetchSuggestions={fetchGithubUsers}
    onSelect={action('select')}
  />
)

export const LoadingState: Story = (args) => {
  const onSelect = (data: any) => console.log(data)

  return (
    <AutoComplete
      {...args}
      fetchSuggestions={args.fetchSuggestions || fetchGithubUsers}
      onSelect={args.onSelect || onSelect}
    />

  )
}

export const CustomizeRender: Story = () => {
  const onSelect = (data: any) => { action(data); console.log(data) }
  const render = (data: DataSourceType) => {
    const sData = data as DataSourceType<GithubUserProps>
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={sData.avatar_url} alt={sData.login} width={60} style={{ borderRadius: '50%' }} />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
          <h2>{sData.login}</h2>
          <h4>{sData.url}</h4>
        </div>
      </div>
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
