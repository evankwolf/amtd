import React, { createContext, useMemo, useState } from 'react'

import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void

export interface MenuProps {
  children?: React.ReactNode
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: (selectedIndex: number) => void
}

interface IMenuContext {
  index: number
  onSelect?: SelectCallback
}

export const MenuCtx = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    defaultIndex,
    mode,
    style,
    onSelect,
    children,
  } = props

  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
  })

  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = useMemo(() => ({
    index: currentActive || 0,
    onSelect: handleClick,
  }), [currentActive])

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuCtx.Provider value={passedContext}>
        {children}
      </MenuCtx.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
}

export default Menu
