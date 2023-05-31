import React, { useState } from 'react'

import classNames from 'classnames'

import { Icon } from '../Icon/icon'
import { Transition } from '../Transition/transition'

type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  children?: string | React.ReactNode
  /** Alert type, different types represent different colors */
  type?: AlertType
  /** Alert header text */
  header?: string
  /** Set true to show close button and make the component closable */
  closable?: boolean
  /** Callback when alert is closed through the close button */
  onClose?: () => void
}

export const Alert: React.FC<AlertProps> = (props) => {
  const [show, setShow] = useState(true)

  const {
    children,
    type,
    header,
    closable,
    onClose,
  } = props

  const closeAlert = () => {
    if (onClose) {
      onClose()
    }
    setShow(false)
  }

  const classes = classNames('alert', {
    [`alert-${type}`]: type,
  })

  return (
    <Transition
      in={show}
      timeout={300}
      animation="zoom-in-top"
    >
      <div className={classes} data-testid="test-alert">
        <div className="alert-container">
          {header && <h3>{header}</h3>}
          <span>{children}</span>
          {
            closable
              ? (
                <span
                  role="presentation"
                  className="alert-close-btn"
                  onClick={closeAlert}
                >
                  <Icon icon="close" theme="light" />
                </span>
              )
              : null
          }
        </div>
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type: 'default',
  closable: true,
}

export default Alert
