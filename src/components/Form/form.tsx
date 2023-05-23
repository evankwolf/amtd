import type { FormHTMLAttributes } from 'react'
import React, { useMemo, createContext } from 'react'

import { FormItem } from './formItem'
import { useForm } from './useForm'

import type { FormErrors } from './useForm'

type FormComponent = React.FC<FormProps> & {
  Item: typeof FormItem
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode
  name?: string
  initialValues?: Record<string, any>
  /** validation success callback */
  onFinish?: (values: Record<string, any>) => void
  /** validation failed callback */
  onFinishFailed?: (values: Record<string, any>, errors: FormErrors) => void
}

export type IFormContext =
  | Omit<ReturnType<typeof useForm>, 'form'>
  & Pick<FormProps, 'initialValues'>

export const FormContext = createContext<IFormContext>({} as IFormContext)

export const Form: FormComponent = (props) => {
  const {
    name, children, initialValues, onFinish, onFinishFailed,
  } = props
  const {
    form, fields, dispatch, validateField, validateAllFields,
  } = useForm()
  const passedContext: IFormContext = useMemo(() => ({
    dispatch,
    fields,
    initialValues,
    validateField,
    validateAllFields,
  }), [dispatch, fields])

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const { isValid, errors, values } = await validateAllFields()
    if (isValid && onFinish) {
      onFinish(values)
    } else if (!isValid && onFinishFailed) {
      onFinishFailed(values, errors)
    }
  }

  return (
    <>
      <form name={name} className="amt-form" onSubmit={submitForm}>
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
