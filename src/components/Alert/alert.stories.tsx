import React from 'react'

import { Alert } from './alert'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof Alert>

const AlertMeta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
}

export default AlertMeta

const Template: Story = (args) => (
  <Alert {...args}>This is an alert</Alert>
)

export const DefaultType: Story = Template.bind({})
DefaultType.args = {
  type: 'default',
}

export const SuccessType: Story = Template.bind({})
SuccessType.args = {
  type: 'success',
}

export const DangerType: Story = Template.bind({})
DangerType.args = {
  type: 'danger',
}

export const WarningType: Story = Template.bind({})
WarningType.args = {
  type: 'warning',
}
