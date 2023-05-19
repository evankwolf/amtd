import type { FormHTMLAttributes } from 'react'
import React, { useMemo, createContext } from 'react'

import { FormItem } from './formItem'
import { useForm } from './useForm'

type FormComponent = React.FC<FormProps> & {
  Item: typeof FormItem
}

export type IFormContext = Pick<ReturnType<typeof useForm>, 'dispatch'>

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode
}

export const FormContext = createContext<IFormContext>({} as IFormContext)

export const Form: FormComponent = (props) => {
  const { name, children } = props
  const { form, fields, dispatch } = useForm()
  const passedContext: IFormContext = useMemo(() => ({ dispatch }), [dispatch])

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
