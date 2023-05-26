import React from 'react'

import { fireEvent, render, waitFor } from '@testing-library/react'
import {
  describe, expect, vi, it,
} from 'vitest'

import { Alert } from './alert'

import type { AlertProps } from './alert'
import type { IconProps } from '../Icon/icon'

const defaultProps: AlertProps = {
  onClose: vi.fn(),
}

const createEl = (props: AlertProps, text?: string) => {
  const { container } = render(<Alert {...(props || {})}>{text || 'Nice'}</Alert>)
  return container.querySelector('.alert')! as HTMLElement
}

vi.mock('../Icon/icon', async () => ({
  Icon: (props: IconProps) => (
    <svg
      role="presentation"
      // onClick is used to imitate remove event
      onClick={props.onClick}
    >
      {props.icon as string}
    </svg>),
}))

describe('alert component test case', () => {
  it('should render correct alert style', async () => {
    const successType: AlertProps = { ...defaultProps, type: 'success' }
    const dangerType: AlertProps = { ...defaultProps, type: 'danger' }
    const warningType: AlertProps = { ...defaultProps, type: 'warning' }

    const successEl = createEl(successType, 'success')
    const dangerEl = createEl(dangerType, 'danger')
    const warningEl = createEl(warningType, 'warning')

    await waitFor(() => {
      expect(successEl).toBeInTheDocument()
      expect(dangerEl).toBeInTheDocument()
      expect(warningEl).toBeInTheDocument()
    })

    expect(successEl).toBeTruthy()
    expect(successEl.tagName).toEqual('DIV')
    expect(successEl).toHaveClass('alert alert-success')

    expect(dangerEl).toBeTruthy()
    expect(dangerEl.tagName).toEqual('DIV')
    expect(dangerEl).toHaveClass('alert alert-danger')

    expect(warningEl).toBeTruthy()
    expect(warningEl.tagName).toEqual('DIV')
    expect(warningEl).toHaveClass('alert alert-warning')
  })
  it('should close when close button is clicked', async () => {
    const el = createEl(defaultProps)
    await waitFor(() => {
      expect(el).toBeInTheDocument()
    })
    const closeBtn = el.getElementsByClassName('alert-close-btn')[0]
    fireEvent.click(closeBtn)
    expect(defaultProps.onClose).toHaveBeenCalled()
    await waitFor(() => {
      expect(el).not.toBeInTheDocument()
    })
  })
})
