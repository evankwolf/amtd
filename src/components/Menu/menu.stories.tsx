import React from 'react'

import { Menu } from './menu'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof Menu>
/**
 * A basic menu component. It has both `vertical` and `horizontal` version.
 *
 * You can also set `defaultIndex` to highlight the menu item when user first loads the page.
 *
 * It includes `MenuItem` and `SubMenu` component.
 */
const MenuMeta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
}

export default MenuMeta

const SubTemplate: Story = (args) => (
  <Menu {...args}>
    <Menu.Item>
      item1
    </Menu.Item>
    <Menu.Item>
      item2
    </Menu.Item>
    <Menu.SubMenu title="submenu">
      <Menu.Item>subitem1</Menu.Item>
      <Menu.Item>subitem2</Menu.Item>
    </Menu.SubMenu>
  </Menu>
)

export const Default: Story = (args) => (
  <Menu {...args}>
    <Menu.Item>
      Item1
    </Menu.Item>
    <Menu.Item>
      Item2
    </Menu.Item>
    <Menu.Item>
      Item3
    </Menu.Item>
  </Menu>
)

export const WithSubmenu: Story = SubTemplate.bind({})
export const VerticalMenu: Story = (args) => (
  <Menu mode="vertical" {...args}>
    <Menu.Item>
      Item1
    </Menu.Item>
    <Menu.Item>
      Item2
    </Menu.Item>
    <Menu.SubMenu title="submenu">
      <Menu.Item>subitem1</Menu.Item>
      <Menu.Item>subitem2</Menu.Item>
    </Menu.SubMenu>
  </Menu>
)

export const DefaultIndex: Story = () => (
  <>
    <Menu defaultIndex="1">
      <Menu.Item>
        Item1
      </Menu.Item>
      <Menu.Item>
        Item2
      </Menu.Item>
      <Menu.SubMenu title="submenu">
        <Menu.Item>subitem1</Menu.Item>
        <Menu.Item>subitem2</Menu.Item>
      </Menu.SubMenu>
    </Menu>
    <hr />
    <Menu defaultIndex="2-1" defaultOpenSubMenu mode="vertical">
      <Menu.Item>
        Item1
      </Menu.Item>
      <Menu.Item>
        Item2
      </Menu.Item>
      <Menu.SubMenu title="submenu">
        <Menu.Item>subitem1</Menu.Item>
        <Menu.Item>subitem2</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </>
)
