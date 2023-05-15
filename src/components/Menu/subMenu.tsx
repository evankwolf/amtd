import type { FunctionComponentElement } from 'react'
import React, { useContext, useState } from 'react'

import classNames from 'classnames'

import { MenuCtx } from './menu'

import type { MenuItemProps } from './menuItem'

import Icon from '../Icon/icon'
import Transition from '../Transition/transition'

export interface SubMenuProps {
  index?: string
  title: string
  className?: string
  children?: React.ReactNode
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const ctx = useContext(MenuCtx)
  const { defaultOpenSubMenu, mode } = ctx
  const isVerticalMode = mode === 'vertical'
  const defaultMenuOpen = defaultOpenSubMenu === undefined ? false : defaultOpenSubMenu
  const [menuOpened, setMenuOpened] = useState(isVerticalMode ? defaultMenuOpen : false)

  const classes = classNames('menu-item submenu-item', props.className, {
    'is-active': ctx.index === props.index,
    'is-opened': menuOpened,
    'is-vertical': isVerticalMode,
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpened(!menuOpened)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpened(toggle)
    }, 300)
  }

  const clickEvents = isVerticalMode ? {
    onClick: handleClick,
  } : {}

  const hoverEvents = !isVerticalMode ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) },
  } : {}

  const events = { ...clickEvents, ...hoverEvents }

  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpened,
    })
    const childrenComponent = React.Children.map(props.children, (child, i) => {
      const childEl = child as FunctionComponentElement<MenuItemProps>
      if (childEl.type.name !== 'MenuItem') {
        throw new Error('Error: SubMenu has at least one child which is not a MenuItem component')
      }
      return React.cloneElement(childEl, {
        index: `${props.index}-${i}`,
      })
    })

    return (
      <Transition
        in={menuOpened}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>
    )
  }

  return (
    <li key={props.index} className={classes} {...events}>
      <div className="submenu-title">
        {props.title}
        <Icon icon="arrow-down" theme="dark" className="arrow-icon" size="xs" />
      </div>
      {renderChildren()}
    </li>
  )
}

export default SubMenu
