import React, { useContext, useEffect } from 'react'

import classNames from 'classnames'

import { FormContext } from './form'

export interface FormItemProps {
  name: string
  /** form item label */
  label?: string
  children?: React.ReactNode
  valuePropName?: string
  trigger?: string
  getValueFromEvent?: (e: any) => any
}

export const FormItem: React.FC<FormItemProps> = (props) => {
  const {
    name,
    label,
    children,
    valuePropName,
    trigger,
    getValueFromEvent,
  } = props
  const { dispatch, fields } = useContext(FormContext)

  const rowClass = classNames('amt-row', {
    'amt-row-no-label': label === undefined,
  })

  useEffect(() => {
    dispatch({ type: 'addField', name, value: { label, name } })
  }, [])
  // get value from store
  const fieldState = fields[name]
  const fieldValue = fieldState && fieldState.value
  const onValueUpdate = (e: any) => {
    const value = getValueFromEvent && getValueFromEvent(e)
    console.log('new value', value)
    dispatch({ type: 'updateField', name, value })
  }
  // manually create a list of attrs (including value & onChange)
  const controlProps: Record<string, any> = {}
  controlProps[valuePropName!] = fieldValue
  controlProps.onChange = onValueUpdate
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
        <label title={label} htmlFor="amt-form-item">
          {label || ''}
        </label>
      </div>
      <div className="amt-form-item">
        {returnChildNode}
      </div>
    </div>
  )
}

FormItem.defaultProps = {
  valuePropName: 'value',
  trigger: 'onChange',
  getValueFromEvent: (e) => e.target.value,
}
