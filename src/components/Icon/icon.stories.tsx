import React from 'react'

import { Icon } from './icon'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof Icon>

const IconMeta: Meta<typeof Icon> = {
  title: 'General/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    theme: { control: 'radio' },
  },
}

export default IconMeta

/**
 * All of the icons are based on [FontAwesome](https://fontawesome.com/). An amazing awesome icon library and toolkit.
 *
 * You can simply search for the icon you like through [here](https://fontawesome.com/search).
 *
 * You can use `set string` in the control panel below to test. For example, try to set `icon` as `arrow-up` and see what is going to happen :)
 */
export const ArrowDown: Story = (args) => (
  <Icon icon={args.icon || 'arrow-down'} theme="primary" />
)
