import React from 'react'

import { Form } from './form'
import { FormItem } from './formItem'

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
  const { children } = args

  return (
    <Form>
      <Form.Item label="Username">
        <Input />
      </Form.Item>
      <Form.Item label="Password">
        <Input type="password" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="no-label" />
      </Form.Item>
      <div className="agreement-section flex">
        <Form.Item>
          <input type="checkbox" />
        </Form.Item>
        <span className="agree-text">注册即代表你同意<a href="##">用户协议</a></span>
      </div>
    </Form>
  )
}
