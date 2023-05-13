import React, { useState, useTransition } from 'react'

const StartTrans: React.FC = () => {
  const [searchData, setSearchData] = useState<number[]>([])
  const [keywords, setKeywords] = useState('')
  const [isPending, startTransition] = useTransition()
  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value)
    startTransition(() => {
      const arr = Array.from({ length: 10000 }, (_, i) => new Date().getTime() + i)
      setSearchData(arr)
    })
  }
  return (
    <>
      <input type="text" name="" id="" onChange={updateInput} value={keywords} />
      {
        isPending ? <h1>⏳</h1>
          : searchData.map((v, i) => <li key={i}>{v}</li>)
      }
    </>
  )
}

export default StartTrans
