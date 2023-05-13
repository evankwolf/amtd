import React, { useEffect, useState } from 'react'

const MouseTracker: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePos = (e: MouseEvent) => {
      console.log('set', e.clientX, e.clientY)

      setPos({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('click', updatePos)
    return (() => {
      console.log('remove')
      document.removeEventListener('click', updatePos)
    })
  }, [])
  return (
    <h2>Current Pos: x {pos.x}, y {pos.y}</h2>
  )
}

export default MouseTracker
