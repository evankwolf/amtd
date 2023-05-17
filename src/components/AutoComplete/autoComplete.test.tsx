import React from 'react'

import { render, fireEvent, waitFor } from '@testing-library/react'
import { config } from 'react-transition-group'

import { AutoComplete } from './autoComplete'

import type { AutoCompleteProps, DataSourceType } from './autoComplete'
import type { RenderResult } from '@testing-library/react'

config.disabled = true
jest.mock('../Icon/icon', () => (props: any) => <span role="presentation" onClick={props.onClick}>{props.icon}</span>)
const testArray = [
  { value: 'ab', number: 11 },
  { value: 'abc', number: 1 },
  { value: 'b', number: 4 },
  { value: 'c', number: 15 },
]
const renderOption = (item: DataSourceType) => {
  const itemWithNumber = item as DataSourceType<{ value: string; number: number }>
  return (
    <>name: {itemWithNumber.value}</>
  )
}
const testProps: AutoCompleteProps = {
  fetchSuggestions: (query) => testArray.filter((item) => item.value.includes(query)),
  onSelect: jest.fn(),
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
    expect(inputNode.value).toEqual('')
    // dropdown will disappear
    expect(wrapper).not.toBeInTheDocument()
  })
  it('should provide keyboard support', async () => {

  })
  it('click outside should hide the dropdown', async () => {

  })
  it('renderOption should generate the right template', async () => {

  })
  it('async fetchSuggestions should works fine', async () => {

  })
})
