import React from 'react'

import { Menu } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof Menu>
const MenuMeta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
  tags: ['autodocs'],
}

export default MenuMeta

const Template: Story = (args) => (
  <Menu {...args}>
    <MenuItem>
      item1
    </MenuItem>
    <MenuItem>
      item2
    </MenuItem>
    <SubMenu title="submenu">
      <MenuItem>subitem1</MenuItem>
      <MenuItem>subitem2</MenuItem>
    </SubMenu>
  </Menu>
)

export const HorizontalMenu: Story = Template.bind({})
export const VerticalMenu: Story = Template.bind({})
VerticalMenu.args = {
  mode: 'vertical',
}

export const Playground: Story = Template.bind({})
