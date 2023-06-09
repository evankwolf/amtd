import React, { createContext, useMemo, useState } from 'react'

import classNames from 'classnames'

import MenuItem from './menuItem'
import SubMenu from './subMenu'

import type { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void

export type MenuComponent = React.FC<MenuProps> & {
  Item: typeof MenuItem
  SubMenu: typeof SubMenu
}

export interface MenuProps {
  children?: React.ReactNode
  defaultIndex?: string
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  defaultOpenSubMenu?: boolean
  onSelect?: (selectedIndex: string) => void
}

interface IMenuContext {
  index: string
  onSelect?: SelectCallback
  mode?: MenuMode
  defaultOpenSubMenu?: boolean
}

export const MenuCtx = createContext<IMenuContext>({ index: '0' })

export const Menu: MenuComponent = (props) => {
  const {
    className,
    defaultIndex,
    mode,
    style,
    onSelect,
    children,
    defaultOpenSubMenu,
  } = props

  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = useMemo(() => ({
    index: currentActive || '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenu,
  }), [currentActive])

  const renderChildren = () => React.Children.map(children, (child, ii: number) => {
    const childEl = child as React.FunctionComponentElement<MenuItemProps>
    const { props: childProps, type } = childEl
    if (type === MenuItem || type === SubMenu) {
      return React.cloneElement(childEl, { index: childProps.index || String(ii) })
    }
    throw new Error('Error: Menu has at least one child which is not a MenuItem or SubMenu')
  })

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuCtx.Provider value={passedContext}>
        {renderChildren()}
      </MenuCtx.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
}

Menu.Item = MenuItem
Menu.SubMenu = SubMenu

export default Menu
