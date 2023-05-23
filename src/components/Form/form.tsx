import type { FormHTMLAttributes } from 'react'
import React, { useMemo, createContext } from 'react'

import { FormItem } from './formItem'
import { useForm } from './useForm'

type FormComponent = React.FC<FormProps> & {
  Item: typeof FormItem
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode
  name?: string
  initialValues?: Record<string, any>
}

export type IFormContext =
  | Pick<ReturnType<typeof useForm>, 'dispatch' | 'fields' | 'validateField'>
  & Pick<FormProps, 'initialValues'>

export const FormContext = createContext<IFormContext>({} as IFormContext)

export const Form: FormComponent = (props) => {
  const { name, children, initialValues } = props
  const {
    form, fields, dispatch, validateField,
  } = useForm()
  const passedContext: IFormContext = useMemo(() => ({
    dispatch,
    fields,
    initialValues,
    validateField,
  }), [dispatch, fields])

  return (
    <>
      <form name={name} className="amt-form">
        <FormContext.Provider value={passedContext}>
          {children}
        </FormContext.Provider>
      </form>
      <div>
        <pre className="whitespace-pre-wrap">{JSON.stringify(fields)}</pre>
        <pre className="whitespace-pre-wrap">{JSON.stringify(form)}</pre>
      </div>
    </>

  )
}

Form.Item = FormItem
