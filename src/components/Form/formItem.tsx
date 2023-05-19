import React from 'react'

import classNames from 'classnames'

export interface FormItemProps {
  /** form item label */
  label?: string
  children?: React.ReactNode
}

export const FormItem: React.FC<FormItemProps> = (props) => {
  const { label, children } = props

  const rowClass = classNames('amt-row', {
    'amt-row-no-label': label === undefined,
  })

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
