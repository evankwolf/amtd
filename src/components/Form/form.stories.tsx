import React, { useRef } from 'react'

import { action } from '@storybook/addon-actions'

import { Form } from './form'

import type { IFormRef } from './form'
import type { CustomRule } from './useForm'
import type { Meta, StoryFn } from '@storybook/react'

import { Button } from '../Button/button'
import { Input } from '../Input/input'

type Story = StoryFn<typeof Form>

/**
 * Form Component. It offers validation function which is based on [AsyncValidator](https://github.com/yiminghe/async-validator)
 *
 * It also offers `onValueChange` callback for you to do something while values change.
 *
 * `onFinish` will be called when you click submit button and all fields are valid.
 *
 */
const FormMeta: Meta<typeof Form> = {
  title: 'DataInput/Form',
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

export const BasicForm: Story = () => {
  const initialValues = {
    username: 'sekiro',
    password: '',
  }

  return (
    <Form
      initialValues={initialValues}
      onFinish={action('onFinish')}
    >
      <Form.Item
        name="username"
        label="Username"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
      >
        <Input />
      </Form.Item>
      <Button type="submit" btnType="primary">Submit</Button>
    </Form>
  )
}

export const FieldWithRule: Story = () => {
  const initialValues = {
    username: 'sekiro',
    password: '',
    age: 0,
  }

  return (
    <Form
      initialValues={initialValues}
      onFinish={action('onFinish')}
      onFinishFailed={action('onFinishFailed')}
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[
          { required: true, type: 'email' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
      >
        <Input type="number" />
      </Form.Item>

      <Button type="submit" btnType="primary">Submit</Button>
    </Form>
  )
}

export const CustomRules: Story = (args) => {
  const ref = useRef<IFormRef>(null)
  const resetAll = () => {
    console.log('getVal', ref.current?.getFieldValue('username'))
    console.log('getAllVal', ref.current?.getFieldsValue)
    ref.current?.resetFields()
  }

  const initialValues = {
    username: 'sekiro',
    password: '',
    confirmPwd: '',
    agreement: false,
  }

  const confirmRules: CustomRule[] = [
    {
      type: 'string', required: true, min: 3, max: 8,
    },
    ({ getFieldValue }) => ({
      /** imitate async validate */
      asyncValidator(rule, value) {
        console.log('the value', getFieldValue('password'))
        console.log(value)
        return new Promise((resolve, reject) => {
          if (value !== getFieldValue('password')) {
            reject(new Error('Not the same'))
          }
          setTimeout(() => {
            resolve()
          }, 1000)
        })
      },
    }),
  ]

  return (
    <Form
      {...args}
      initialValues={initialValues}
      onValueChange={action('onValueChange')}
      onFinish={action('onFinish')}
      onFinishFailed={action('onFinishFailed')}
      ref={ref}
    >
      {({ isValid, isSubmitting }) => (
        <>
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
              <Input type="checkbox" />
            </Form.Item>
            <span className="agree-text">注册即代表你同意<a href="##">用户协议</a></span>
          </div>
          <div className="amt-form-submit-area">
            <Button type="submit" btnType="primary">
              Login
              {isValid ? ' Info Valid' : ' Info not valid'}
            </Button>
            <Button onClick={resetAll} style={{ marginLeft: 12 }}>
              Reset
            </Button>
          </div>
          <div>Is Submitting? - {isSubmitting ? 'true' : 'false'}</div>
        </>
      )}
    </Form>
  )
}
