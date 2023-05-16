import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const useDebounce = (value: any, delay = 300) => {
  const [debouncedVal, setDebouncedVal] = useState(value)

  useEffect(() => {
    let handler = setTimeout(() => setDebouncedVal(value), delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedVal
}
