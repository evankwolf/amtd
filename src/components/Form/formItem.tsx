import React, { useContext, useEffect } from 'react'

import classNames from 'classnames'

import { FormContext } from './form'

import type { CustomRule } from './useForm'
import type { SomeRequired } from '@/types/utils'

export interface FormItemProps {
  name: string
  /** form item label */
  label?: string
  children?: React.ReactNode
  valuePropName?: string
  trigger?: string
  getValueFromEvent?: (e: any) => any
  rules?: CustomRule[]
  validateTrigger?: string
}

export const FormItem: React.FC<FormItemProps> = (props) => {
  const {
    name,
    label,
    children,
    valuePropName,
    trigger,
    getValueFromEvent,
    rules,
    validateTrigger,
  } = props as SomeRequired<FormItemProps, 'getValueFromEvent' | 'valuePropName' | 'trigger' | 'validateTrigger'>

  const {
    dispatch,
    fields,
    initialValues,
    validateField,
  } = useContext(FormContext)

  const rowClass = classNames('amt-row', {
    'amt-row-no-label': label === undefined,
  })

  useEffect(() => {
    const value = (initialValues && initialValues[name]) || ''
    dispatch({
      type: 'addField',
      name,
      value: {
        label,
        name,
        value,
        rules: rules || [],
        fieldErrors: [],
      },
    })
  }, [])

  // get value from store
  const fieldState = fields[name]
  const fieldValue = fieldState && fieldState.value
  const fieldErrors = fieldState && fieldState.errors
  const isRequired = rules?.some((rule) => (typeof rule !== 'function') && rule.required)
  const hasError = fieldErrors && fieldErrors.length > 0

  const labelClass = classNames({
    'amt-form-item-required': isRequired,
  })
  const itemClass = classNames('amt-form-item-control', {
    'amt-form-item-has-error': hasError,
  })
  const onValueUpdate = (e: any) => {
    const value = getValueFromEvent(e)
    console.log('new value', value)
    dispatch({ type: 'updateField', name, value })
  }
  const onValueValidate = async () => {
    await validateField(name)
  }

  // manually create a list of attrs (including value & onChange)
  const controlProps: Record<string, any> = {}
  controlProps[valuePropName] = fieldValue
  controlProps[trigger] = onValueUpdate
  if (rules) {
    controlProps[validateTrigger] = onValueValidate
  }

  // get the first el from children arr
  const childList = React.Children.toArray(children)
  // children required
  if (childList.length === 0) {
    throw new Error('No child element found in Form.Item, please provide one for component')
  }
  // number of children more than 1
  if (childList.length > 1) {
    console.warn('Only support one child element in Form.Item, others will be ignored')
  }
  // if is not ReactElement
  if (!React.isValidElement(childList[0])) {
    throw new Error('Child component is not a valid React Element')
  }
  const child = childList[0] as React.ReactElement
  // clone element the current child and the attrs list
  const returnChildNode = React.cloneElement(
    child,
    { ...child.props, ...controlProps },
  )

  return (
    <div className={rowClass}>
      <div className="amt-form-item-label">
        <label title={label} htmlFor="amt-form-item" className={labelClass}>
          {label || ''}
        </label>
      </div>
      <div className="amt-form-item">
        <div className={itemClass}>
          {returnChildNode}
        </div>
        {
          hasError
          && (
            <div className="amt-form-item-explain">
              <span>{fieldErrors[0].message}</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

FormItem.defaultProps = {
  valuePropName: 'value',
  trigger: 'onChange',
  validateTrigger: 'onBlur',
  getValueFromEvent: (e) => e.target.value,
}
