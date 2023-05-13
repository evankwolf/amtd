import React from 'react'

import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface IBaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}

type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    btnType,
    disabled,
    size,
    href,
    children,
    ...restProps
  } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled,
  })

  if (btnType === 'link' && props.href) {
    return (
      <a className={classes} href={href} {...restProps}>{children}</a>
    )
  }
  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
}

export default Button
