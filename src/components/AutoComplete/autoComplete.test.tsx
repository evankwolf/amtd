import React from 'react'

import {
  render, fireEvent, waitFor, cleanup,
} from '@testing-library/react'
import { config } from 'react-transition-group'
import {
  vi, describe, it, expect, beforeEach,
} from 'vitest'

import { AutoComplete } from './autoComplete'

import type { AutoCompleteProps, DataSourceType } from './autoComplete'
import type { RenderResult } from '@testing-library/react'

config.disabled = true
// vi.mock('../Icon/icon', () => (props: any) => <span role="presentation" onClick={props.onClick}>{props.icon}</span>)
const testArray = [
  { value: 'ab', number: 11 },
  { value: 'abc', number: 1 },
  { value: 'b', number: 4 },
  { value: 'c', number: 15 },
]
const renderOption = (item: DataSourceType) => {
  const itemWithNumber = item as DataSourceType<{ value: string; number: number }>
  return (
    <div className="layer-1">
      <span className="layer-2">
        <a href="https://www.baidu.com" target="_blank" className="layer-3" rel="noreferrer">name: {itemWithNumber.value}</a>
      </span>
    </div>
  )
}

const testProps: AutoCompleteProps = {
  fetchSuggestions: (query) => testArray.filter((item) => item.value.includes(query)),
  onSelect: vi.fn(),
  placeholder: 'auto-complete',
}
const testPropsWithCustomRender: AutoCompleteProps = {
  ...testProps,
  placeholder: 'auto-complete-2',
  renderOption,
}

let wrapper: RenderResult
let inputNode: HTMLInputElement

describe('test AutoComplete component', () => {
  beforeEach(() => {
    wrapper = render(<AutoComplete {...testProps} />)
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement
  })

  it('test basic AutoComplete behavior', async () => {
    // input change
    fireEvent.change(inputNode, { target: { value: 'a' } })
    // expect to have 2 dropdown items
    await waitFor(() => {
      expect(wrapper.getByText('ab')).toBeInTheDocument()
      expect(wrapper.getByText('abc')).toBeInTheDocument()
      expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(2)
    })
    // replace input when click one of the items
    const abDropdown = wrapper.getByText('ab')
    fireEvent.click(abDropdown)
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
    await waitFor(() => {
      expect(inputNode.value).toEqual('ab')
    })
  })

  it('should provide keyboard support', async () => {
    // input change
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await waitFor(() => {
      expect(wrapper.getByText('ab')).toBeInTheDocument()
      expect(wrapper.getByText('abc')).toBeInTheDocument()
      expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(2)
    })
    const abDropdown = wrapper.getByText('ab')
    const abcDropdown = wrapper.getByText('abc')
    const allSuggestionsItem = wrapper.container.querySelectorAll('.suggestion-item')

    // arrow down
    fireEvent.keyDown(inputNode, { key: 'ArrowDown' })
    expect(allSuggestionsItem[0]).toHaveClass('item-highlighted')
    fireEvent.keyDown(inputNode, { key: 'ArrowDown' })
    expect(allSuggestionsItem[0]).not.toHaveClass('item-highlighted')
    expect(allSuggestionsItem[1]).toHaveClass('item-highlighted')

    // press enter
    fireEvent.keyDown(inputNode, { key: 'Enter' })
    await waitFor(() => {
      expect(abDropdown).not.toBeInTheDocument()
      expect(abcDropdown).not.toBeInTheDocument()
      expect(inputNode.value).toEqual('abc')
    })

    // press escape
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await waitFor(() => {
      expect(wrapper.getByText('ab')).toBeInTheDocument()
    })
    fireEvent.keyDown(inputNode, { key: 'Escape' })
    expect(wrapper.container.querySelector('.amt-suggestions-group')).toEqual(null)
  })

  it('click outside should hide the dropdown', async () => {
    // input change
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await waitFor(() => {
      expect(wrapper.getByText('ab')).toBeInTheDocument()
      expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(2)
    })
    fireEvent.click(document)
    await waitFor(() => {
      expect(wrapper.container.querySelector('.amt-suggestions-group')).toEqual(null)
    })
  })

  it('renderOption should generate the right template', async () => {
    cleanup()
    wrapper = render(<AutoComplete {...testPropsWithCustomRender} />)
    inputNode = wrapper.getByPlaceholderText('auto-complete-2') as HTMLInputElement

    // input change
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await waitFor(() => {
      expect(wrapper.getByText('name: ab')).toBeInTheDocument()
      expect(wrapper.getByText('name: abc')).toBeInTheDocument()
      const liParents = wrapper.container.querySelectorAll('.suggestion-item')
      const layer1 = liParents[0].querySelector('.layer-1')
      const layer2 = liParents[0].querySelector('.layer-2')
      const layer3 = liParents[0].querySelector('.layer-3') as HTMLAnchorElement
      expect(liParents.length).toEqual(2)
      expect(layer1).toBeInTheDocument()
      expect(layer1?.tagName).toEqual('DIV')
      expect(layer2).toBeInTheDocument()
      expect(layer2?.tagName).toEqual('SPAN')
      expect(layer3).toBeInTheDocument()
      expect(layer3?.tagName).toEqual('A')
      expect(layer3?.innerHTML).toEqual('name: ab')
      expect(layer3.href).toEqual('https://www.baidu.com/')
    })
  })

  it('async fetchSuggestions should works fine', async () => {
    cleanup()
    const fakeFetch = vi.fn((query) => Promise.resolve(testArray.filter((item) => item.value.includes(query))))
    const fetchProps: AutoCompleteProps = {
      ...testProps,
      fetchSuggestions: fakeFetch,
    }
    wrapper = render(<AutoComplete {...fetchProps} />)
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement

    // input change
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await waitFor(() => {
      expect(fetchProps.fetchSuggestions).toHaveBeenCalled()
      expect(wrapper.queryByText('ab')).toBeInTheDocument()
    })
  })
})
