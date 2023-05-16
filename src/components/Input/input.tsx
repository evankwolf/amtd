import React from 'react'
import type { InputHTMLAttributes } from 'react'

import classNames from 'classnames'

import type { ThemeProps } from '../Icon/icon'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { Icon } from '../Icon/icon'

type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean
  size?: InputSize
  icon?: IconProp
  iconTheme?: ThemeProps
  prepend?: React.ReactNode
  append?: React.ReactNode
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    iconTheme,
    prepend,
    append,
    className,
    ...rest
  } = props

  const classes = classNames('amt-input-wrapper', className, {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
  })

  return (
    <div className={classes}>
      {prepend && <div className="amt-input-group-prepend">{prepend}</div>}
      <div className="input-group">
        <input
          className="amt-input-inner"
          disabled={disabled}
          {...rest}
        />
        {
          icon ? <Icon className="input-icon icon-wrapper" theme={iconTheme || 'info'} icon={icon} />
            : null
        }
      </div>
      {append && <div className="viking-input-group-append">{append}</div>}
    </div>
  )
}
