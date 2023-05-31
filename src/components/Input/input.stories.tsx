import React from 'react'

import { Input } from './input'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof Input>

/**
 * A basic input component.
 *
 * Except for the traditional input functions, you can also set `size`, `icon`, `prepend`
 * and `append` for the component.
 *
 * Icons are based on [FontAwesome](https://fontawesome.com/search)
 */
const InputMeta: Meta<typeof Input> = {
  title: 'DataInput/Input',
  component: Input,
}

export default InputMeta

export const Default: Story = (args) => (
  <Input {...args} />
)

export const DifferentSizes: Story = () => (
  <div>
    <Input size="xs" />
    <Input size="sm" />
    <Input size="md" />
    <Input size="lg" />
    <Input size="xl" />
  </div>
)

export const DisabledState: Story = (args) => (
  <Input disabled={args.disabled} {...args} />
)
export const WithIcon: Story = (args) => (
  <Input
    icon="user"
    iconTheme="primary"
    {...args}
  />
)
export const AppendAndPrepend: Story = (args) => (
  <Input
    icon="user"
    iconTheme="secondary"
    prepend="Username"
    append="@email.com"
    {...args}
  />
)
