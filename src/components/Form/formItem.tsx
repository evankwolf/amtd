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
  const { dispatch } = useContext(FormContext)

  const rowClass = classNames('amt-row', {
    'amt-row-no-label': label === undefined,
  })

  useEffect(() => {
    dispatch({ type: 'addField', name, value: { label, name } })
  }, [])

  return (
    <div className={rowClass}>
      <div className="amt-form-item-label">
        <label title={label} htmlFor="viking-form-item">
          {label || ''}
        </label>
      </div>
      <div className="viking-form-item">
        {children}
      </div>
    </div>
  )
}
