import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  /** font awesome icon name
   * e.g. `arrow-down`
   */
  icon: IconProp
  /** icon color */
  theme: ThemeProps
}

export const Icon: React.FC<IconProps> = (props) => {
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
