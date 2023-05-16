import type { ChangeEvent } from 'react'
import React, { useState } from 'react'

import classNames from 'classnames'

import type { InputProps } from '../Input/input'

import { Input } from '../Input/input'
import { Transition } from '../Transition/transition'

interface DataSourceObject {
  value: string
}

export type Suggestion<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (keyword: string) => Suggestion[]
  onSelect: (suggestion: Suggestion) => void
  renderOption?: (data: Suggestion) => React.ReactNode
  valKey: string
}

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    className,
    renderOption,
    ...rest
  } = props

  const [keyword, setKeyword] = useState('')
  const [suggestions, setSuggestions] = useState<Suggestion[]>()

  const classes = classNames('amt-auto-complete', className)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setKeyword(value.trim())
    if (value) {
      const res = fetchSuggestions(value)
      setSuggestions(res)
    } else {
      setSuggestions([])
    }
  }

  const handleSelect = (suggestion: Suggestion) => {
    setKeyword(suggestion.value)
    onSelect(suggestion)
  }

  const generateDropdown = () => (
    <Transition
      in={suggestions && suggestions.length > 0}
      timeout={300}
      animation="zoom-in-top"
    >
      <ul className="amt-suggestions-group">
        {
          suggestions && suggestions.length > 0 && suggestions.map((suggestion, i) => (
            <li
              key={i}
              className="suggestion-item"
              onSelect={() => handleSelect(suggestion)}
            >{
                renderOption
                  ? renderOption(suggestion)
                  : suggestion.value
              }
            </li>
          ))
        }
      </ul>
    </Transition>
  )
  return (
    <div className={classes}>
      <Input value={keyword} onChange={handleChange} {...rest} />
      {generateDropdown()}
    </div>
  )
}
