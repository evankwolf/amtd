import React from 'react'

import { fireEvent, render } from '@testing-library/react'
import { describe, expect, vi } from 'vitest'

import Alert from './alert'

import type { AlertProps } from './alert'

const defaultProps: AlertProps = {
  onClose: vi.fn(),
}

const createEl = (props: AlertProps, text?: string) => {
  const { container } = render(<Alert {...(props || {})}>{text || 'Nice'}</Alert>)
  return container.querySelector('div')! as HTMLElement
}

describe('alert component test case', () => {
  it('should render correct alert style', () => {
    const successType: AlertProps = { ...defaultProps, type: 'success' }
    const dangerType: AlertProps = { ...defaultProps, type: 'danger' }
    const warningType: AlertProps = { ...defaultProps, type: 'warning' }

    const successEl = createEl(successType, 'success')
    const dangerEl = createEl(dangerType, 'danger')
    const warningEl = createEl(warningType, 'warning')

    expect(successEl).toBeTruthy()
    expect(successEl).toBeInTheDocument()
    expect(successEl.tagName).toEqual('DIV')
    expect(successEl).toHaveClass('alert alert-success')

    expect(dangerEl).toBeTruthy()
    expect(dangerEl).toBeInTheDocument()
    expect(dangerEl.tagName).toEqual('DIV')
    expect(dangerEl).toHaveClass('alert alert-danger')

    expect(warningEl).toBeTruthy()
    expect(warningEl).toBeInTheDocument()
    expect(warningEl.tagName).toEqual('DIV')
    expect(warningEl).toHaveClass('alert alert-warning')
  })
  it('should close when close button is clicked', () => {
    const el = createEl(defaultProps)
    expect(el).toBeInTheDocument()
    const closeBtn = el.getElementsByClassName('alert-close-btn')[0]
    fireEvent.click(closeBtn)
    expect(defaultProps.onClose).toHaveBeenCalled()
    expect(el).not.toBeInTheDocument()
  })
})
