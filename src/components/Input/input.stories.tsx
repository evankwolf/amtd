import React from 'react'

import { Input } from './input'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof Input>

const InputMeta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
}

export default InputMeta

export const Playground: Story = (args) => (
  <Input {...args} />
)
