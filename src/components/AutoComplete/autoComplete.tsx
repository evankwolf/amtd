import type { ChangeEvent, KeyboardEvent } from 'react'
import React, { useRef, useState, useEffect } from 'react'

import classNames from 'classnames'

import { useClickOutside } from '@/hooks/useClickOutside'
import { useDebounce } from '@/hooks/useDebounce'

import type { InputProps } from '../Input/input'

import { Icon } from '../Icon/icon'
import { Input } from '../Input/input'
import { Transition } from '../Transition/transition'

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

  const triggerSearch = useRef(false)
  const container = useRef<HTMLDivElement>(null)

  const [inputVal, setInputVal] = useState('')
  const keyword = useDebounce(inputVal)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>()
  const [loading, setLoading] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  useClickOutside(container, () => setSuggestions([]))

  const classes = classNames('amt-auto-complete', className)

  useEffect(() => {
    if (inputVal && triggerSearch.current) {
      const res = fetchSuggestions(inputVal)
      if (res instanceof Promise) {
        setLoading(true)
        res.then(setSuggestions).finally(() => setLoading(false))
      } else {
        setSuggestions(res)
      }
    } else {
      setSuggestions([])
    }
  }, [keyword])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    triggerSearch.current = true
    setInputVal(value)
  }

  const changeHighlightedIndex = (i: number, clear?: boolean) => {
    if (!suggestions || suggestions.length === 0 || clear) {
      setHighlightedIndex(-1)
      return
    }
    if (i >= suggestions.length) {
      setHighlightedIndex(0)
    } else if (i < 0) {
      setHighlightedIndex(suggestions.length - 1)
    } else {
      setHighlightedIndex(i)
    }
  }

  const handleKeyEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        if (suggestions && suggestions.length > 0) {
          triggerSearch.current = false
          handleSelect(suggestions[highlightedIndex])
        }
        break
      case 'ArrowUp':
        changeHighlightedIndex(highlightedIndex - 1)

        break
      case 'ArrowDown':
        changeHighlightedIndex(highlightedIndex + 1)
        break
      case 'Escape':
        setSuggestions([])
        setHighlightedIndex(-1)
        break
      default:
        break
    }
  }

  const handleSelect = (suggestion: DataSourceType) => {
    setInputVal(suggestion.value)
    onSelect(suggestion)
  }

  const generateDropdown = () => {
    const cname = (i: number) => classNames('suggestion-item', {
      'item-highlighted': i === highlightedIndex,
    })
    return (
      <Transition
        in={suggestions && suggestions.length > 0}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul
          onMouseLeave={() => changeHighlightedIndex(-1, true)}
          className="amt-suggestions-group"
        >
          {
            loading
              ? <Icon icon="spinner" theme="dark" spin />
              : suggestions && suggestions.length > 0 && suggestions.map((suggestion, i) => (
                <li
                  role="presentation"
                  key={i}
                  className={cname(i)}
                  onMouseEnter={() => changeHighlightedIndex(i)}
                  onSelect={() => handleSelect(suggestion)}
                  onClick={() => handleSelect(suggestion)}
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
  }
  return (
    <div className={classes} ref={container}>
      <Input value={inputVal} onChange={handleChange} onKeyDown={handleKeyEvent} {...rest} />
      {generateDropdown()}
    </div>
  )
}
