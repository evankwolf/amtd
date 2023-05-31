import type { FormHTMLAttributes } from 'react'
import React, {
  useImperativeHandle, forwardRef, useMemo, createContext,
} from 'react'

import { FormItem } from './formItem'
import { useForm } from './useForm'

import type { FormErrors, FormState, FieldState } from './useForm'

type FormComponent = React.ForwardRefExoticComponent<FormProps & React.RefAttributes<IFormRef>> & {
  Item: typeof FormItem
}

export type RenderProps = (form: FormState) => React.ReactNode

export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'children' | 'getFieldsValue' | 'setFieldValue' | 'resetFields'> {
  children?: React.ReactNode | RenderProps
  name?: string
  initialValues?: Record<string, any>
  /** Value change callback. Receive fields as param */
  onValueChange?: (fields: FieldState) => void
  /** Validation success callback */
  onFinish?: (values: Record<string, any>) => void
  /** Validation failed callback */
  onFinishFailed?: (values: Record<string, any>, errors: FormErrors) => void
}

export type IFormContext =
  | Omit<ReturnType<typeof useForm>, 'form' | 'getFieldValue' | 'getFieldsValue' | 'setFieldValue' | 'resetFields' | 'validateAllFields'>
  & Pick<FormProps, 'initialValues' | 'onValueChange'>

export type IFormRef = Omit<ReturnType<typeof useForm>, 'fields' | 'dispatch' | 'form'>

export const FormContext = createContext<IFormContext>({} as IFormContext)

const InternalForm: React.ForwardRefRenderFunction<IFormRef, FormProps> = (props, ref) => {
  const {
    name, children, initialValues, onValueChange, onFinish, onFinishFailed,
  } = props
  const {
    form, fields, dispatch, ...restProps
  } = useForm(initialValues)
  const { validateField, validateAllFields } = restProps

  useImperativeHandle(ref, () => ({
    ...restProps,
  }))

  const passedContext: IFormContext = useMemo(() => ({
    dispatch,
    fields,
    initialValues,
    onValueChange,
    validateField,
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

  let childrenNode: React.ReactNode
  if (typeof children === 'function') {
    childrenNode = children(form)
  } else {
    childrenNode = children
  }

  return (
    <>
      <form name={name} className="amt-form" onSubmit={submitForm}>
        <FormContext.Provider value={passedContext}>
          {childrenNode}
        </FormContext.Provider>
      </form>
      {/* <div>
        <pre className="whitespace-pre-wrap">{JSON.stringify(fields)}</pre>
        <pre className="whitespace-pre-wrap">{JSON.stringify(form)}</pre>
      </div> */}
    </>

  )
}

export const Form = forwardRef<IFormRef, FormProps>(InternalForm) as FormComponent

Form.Item = FormItem

export default Form
