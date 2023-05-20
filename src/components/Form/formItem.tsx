import React, { useContext, useEffect } from 'react'

import classNames from 'classnames'

import { FormContext } from './form'

export interface FormItemProps {
  name: string
  /** form item label */
  label?: string
  children?: React.ReactNode
}

export const FormItem: React.FC<FormItemProps> = (props) => {
  const { name, label, children } = props
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
    const { value } = e.target
    console.log('new value', value)
    dispatch({ type: 'updateField', name, value })
  }
  // manually create a list of attrs (including value & onChange)
  const controlProps: Record<string, any> = {}
  controlProps.value = fieldValue
  controlProps.onChange = onValueUpdate
  // TODO apply to different event and value

  // get the first el from children arr
  const childList = React.Children.toArray(children)
  // TODO check children type
  const child = childList[0] as React.ReactElement
  // clone element the current child and the attrs list
  const returnChildNode = React.cloneElement(
    child,
    { ...child.props, ...controlProps },
  )

  return (
    <div className={rowClass}>
      <div className="amt-form-item-label">
        <label title={label} htmlFor="viking-form-item">
          {label || ''}
        </label>
      </div>
      <div className="viking-form-item">
        {returnChildNode}
      </div>
    </div>
  )
}
