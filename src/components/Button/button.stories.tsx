import React from 'react'

import { Button } from './button'

import type { Meta, StoryFn } from '@storybook/react'

/**
 * A basic button component.
 */
const buttonMeta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  tags: ['autodocs'],
}

export default buttonMeta
type Story = StoryFn<typeof Button>;

const Template: Story = (args) => (
  <Button {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: ' Default Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: 'Large',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'Small',
}

export const ButtonWithTypes: Story = () => (
  <>
    <Button btnType="primary">Primary</Button>
    <Button style={{ marginLeft: '12px' }} btnType="danger">Danger</Button>
    <Button style={{ marginLeft: '12px' }} btnType="default">Default</Button>
    <Button style={{ marginLeft: '12px' }} btnType="link">Link</Button>
  </>
)

ButtonWithTypes.storyName = 'Different Types Button'
