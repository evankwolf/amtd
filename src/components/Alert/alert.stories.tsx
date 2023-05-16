import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import Alert from './alert'

type Story = StoryFn<typeof Alert>

const AlertMeta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
}

export default AlertMeta

export const Template: Story = (args) => (
  <Alert {...args}>This is an alert</Alert>
)
Template.storyName = 'Playground'

export const SuccessType: Story = Template.bind({})
SuccessType.args = {
  type: 'success'
}

export const DefaultType: Story = Template.bind({})
DefaultType.args = {
  type: 'default'
}

export const DangerType: Story = Template.bind({})
DangerType.args = {
  type: 'danger'
}

export const WarningType: Story = Template.bind({})
WarningType.args = {
  type: 'warning'
}
