import React from 'react'

import { Form } from './form'

import type { Meta, StoryFn } from '@storybook/react'

import { Input } from '../Input/input'

type Story = StoryFn<typeof Form>

const FormMeta: Meta<typeof Form> = {
  title: 'Form',
  component: Form,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '550px' }}>
        <Story />
      </div>
    ),
  ],
}

export default FormMeta

export const BasicForm: Story = (args) => {
  const initialValues = {
    username: 'sekiro',
    agreement: true,
  }

  return (
    <Form {...args} initialValues={initialValues}>
      <Form.Item label="Username" name="username" rules={[{ type: 'email', required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{
          type: 'string', required: true, max: 8, min: 3,
        }]}
      >
        <Input type="password" />
      </Form.Item>
      <div className="agreement-section flex">
        <Form.Item name="agreement" valuePropName="checked" getValueFromEvent={(e) => e.target.checked}>
          <input type="checkbox" />
        </Form.Item>
        <span className="agree-text">注册即代表你同意<a href="##">用户协议</a></span>
      </div>
    </Form>
  )
}
