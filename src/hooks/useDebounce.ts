import { useEffect, useState } from 'react'

export const useDebounce = (value: any, delay = 300) => {
  const [debouncedVal, setDebouncedVal] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedVal(value), delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedVal
}

export default useDebounce
