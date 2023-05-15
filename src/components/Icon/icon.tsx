import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {
  const {
    theme, className, ...rest
  } = props
  const classes = classNames('icon', className, {
    [`icon-${theme}`]: theme,
  })
  return (
    <FontAwesomeIcon className={classes} {...rest} />
  )
}
export default Icon
