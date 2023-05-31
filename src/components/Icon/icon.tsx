import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  /** font awesome icon name
   *
   * e.g. `arrow-down`
   *
   * get more from [here](https://fontawesome.com/search)
   *
   */
  icon: IconProp
  /** icon color */
  theme?: ThemeProps
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

Icon.defaultProps = {
  theme: 'secondary',
}

export default Icon
