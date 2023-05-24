import type React from 'react'

import { Menu as InternalMenu } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

import type { MenuProps } from './menu'
import type { MenuItemProps } from './menuItem'
import type { SubMenuProps } from './subMenu'

export type IMenuComponent = React.FC<MenuProps> & {
  Item: React.FC<MenuItemProps>
  SubMenu: React.FC<SubMenuProps>
}

const Menu = InternalMenu as IMenuComponent

Menu.Item = MenuItem
Menu.SubMenu = SubMenu

export default Menu
