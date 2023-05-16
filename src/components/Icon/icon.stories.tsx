import React from 'react'

import { Icon } from './icon'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof Icon>

const IconMeta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    theme: { control: 'radio' },
  },
}

export default IconMeta

export const Playground: Story = (args) => (
  <Icon {...args} icon={args.icon || 'arrow-down'} />
)

/**
 * some annotations
 * @returns
 */
export const ArrowDown: Story = (args) => (
  <Icon icon={args.icon || 'arrow-down'} theme="primary" />
)
