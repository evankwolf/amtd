import React, { useContext } from 'react'

import classNames from 'classnames'

import { MenuCtx } from './menu'

export interface MenuItemProps {
  children?: React.ReactNode
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    children,
    index,
    disabled,
    className,
    style,
  } = props

  const ctx = useContext(MenuCtx)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': index === ctx.index,
  })

  const handleClick = () => {
    if (ctx.onSelect && !disabled) {
      ctx.onSelect(index!)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick} role="presentation">
      {children}
    </li>
  )
}

export default MenuItem
