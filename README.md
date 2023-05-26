## Introduction
My personal ant-design. This is only used for practice.

## Tech Stack
- React
- Vite
- Typescript
- [Vitest](https://vitest.dev/) - A Blazing Fast Unit Test Framework
- [React Testing Library](https://testing-library.com/) - Test UI Components In a User-centric Way
- [Unocss](https://unocss.dev/) - The instant on-demand atomic CSS engine.
- Husky

## Usage

```tsx
import React, { useState } from 'react'
import { Button } from '@kwolfsanta/amtd'
import '@kwolfsanta/amtd/dist/es/style.css'

const HelloWorld = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Button btnType="primary" onClick={handleClick}>Current count: {count}</Button>
    </div>
  )
}

```
