import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

type Story = StoryFn<typeof Menu>
const MenuMeta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu
}

export default MenuMeta

export const Template: Story = (args) => (
  <Menu {...args}>
    <MenuItem>
      item1
    </MenuItem>
    <MenuItem>
      item2
    </MenuItem>
    <SubMenu title='submenu'>
      <MenuItem>subitem1</MenuItem>
      <MenuItem>subitem2</MenuItem>
    </SubMenu>
  </Menu>
)

Template.storyName = 'Playground'

export const HorizontalMenu: Story = Template.bind({})
export const VerticalMenu: Story = Template.bind({})
VerticalMenu.args = {
  mode: 'vertical'
}


