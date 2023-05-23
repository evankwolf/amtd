import React from 'react'

import { action } from '@storybook/addon-actions'

import { Form } from './form'

import type { CustomRule } from './useForm'
import type { Meta, StoryFn } from '@storybook/react'

import { Button } from '../Button/button'
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
    agreement: false,
  }

  const confirmRules: CustomRule[] = [
    {
      type: 'string', required: true, min: 3, max: 8,
    },
    ({ getFieldValue }) => ({
      asyncValidator(rule, value) {
        console.log('the value', getFieldValue('password'))
        console.log(value)
        if (value !== getFieldValue('password')) {
          return Promise.reject(new Error('Not the same'))
        }
        return Promise.resolve()
      },
    }),
  ]

  return (
    <Form
      {...args}
      initialValues={initialValues}
      onFinish={action('onFinish')}
      onFinishFailed={action('onFinishFailed')}
    >
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
      <Form.Item
        label="Confirm Password"
        name="confirmPwd"
        rules={confirmRules}
      >
        <Input type="password" />
      </Form.Item>
      <div className="agreement-section flex">
        <Form.Item
          name="agreement"
          valuePropName="checked"
          getValueFromEvent={(e) => e.target.checked}
          rules={[{ type: 'enum', enum: [true], message: 'Please agree' }]}
        >
          <input type="checkbox" />
        </Form.Item>
        <span className="agree-text">注册即代表你同意<a href="##">用户协议</a></span>
      </div>
      <div className="amt-form-submit-area">
        <Button type="submit" btnType="primary">Login</Button>
      </div>
    </Form>
  )
}
