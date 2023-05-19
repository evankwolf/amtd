import type { FormHTMLAttributes } from 'react'
import React from 'react'

import { FormItem } from './formItem'

type FormComponent = React.FC<FormProps> & {
  Item: typeof FormItem
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode
}

export const Form: FormComponent = (props) => {
  const { name, children } = props

  return (
    <form name={name} className="amt-form">
      {children}
    </form>
  )
}

Form.Item = FormItem
