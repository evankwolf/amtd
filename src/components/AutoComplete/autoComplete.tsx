import type { ChangeEvent } from 'react'
import React, { useState } from 'react'

import classNames from 'classnames'

import type { InputProps } from '../Input/input'

import { Input } from '../Input/input'
import { Transition } from '../Transition/transition'
import Icon from '../Icon/icon'

interface DataSourceObject {
  value: string
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (keyword: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect: (suggestion: DataSourceType) => void
  renderOption?: (data: DataSourceType) => React.ReactNode
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
  const [suggestions, setSuggestions] = useState<DataSourceType[]>()
  const [loading, setLoading] = useState(false)

  const classes = classNames('amt-auto-complete', className)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setKeyword(value)
    if (value) {
      const res = fetchSuggestions(value)
      if (res instanceof Promise) {
        setLoading(true)
        res.then(setSuggestions).finally(() => setLoading(false))
      } else {
        setSuggestions(res)
      }
    } else {
      setSuggestions([])
    }
  }

  const handleSelect = (suggestion: DataSourceType) => {
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
          loading
            ? <Icon icon="spinner" theme='dark' spin />
            : suggestions && suggestions.length > 0 && suggestions.map((suggestion, i) => (
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
