import React from 'react'

import { cleanup, fireEvent, render } from '@testing-library/react'
import {
  beforeEach, describe, it, vi,
} from 'vitest'

import Menu from './menu'
import MenuItem from './menuItem'

import type { MenuProps } from './menu'

const defaultProps: MenuProps = {
  defaultIndex: 0,
  onSelect: vi.fn(),
}

const verticalProps: MenuProps = {
  ...defaultProps,
  mode: 'vertical',
}

const createMenu = (props: MenuProps) => {
  const wrapper = render(
    <Menu {...props}>
      <MenuItem index={0}>
        abc
      </MenuItem>
      <MenuItem index={1} disabled>
        ijk
      </MenuItem>
      <MenuItem index={2}>
        xyz
      </MenuItem>
    </Menu>,
  )

  return wrapper.getByTestId('test-menu')
}

let el: HTMLElement
let disabledElement: HTMLElement | null
let activeElement: HTMLElement | null

describe('test Menu and MenuItem component.', () => {
  beforeEach(() => {
    el = createMenu(defaultProps)
    disabledElement = el.querySelector('.is-disabled')
    activeElement = el.querySelector('.is-active')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    const children = el.querySelectorAll('li')
    expect(el).toBeInTheDocument()
    expect(el).toHaveClass('menu')
    expect(children.length).toEqual(3)
    expect(disabledElement).toBeInTheDocument()
    expect(activeElement).toBeInTheDocument()
    expect(disabledElement).toEqual(children[1])
    expect(activeElement).toEqual(children[0])
  })
  it('should change active element and call the right callback when a menu item is clicked', () => {
    const children = el.querySelectorAll('li')
    fireEvent.click(disabledElement!)
    expect(defaultProps.onSelect).not.toHaveBeenCalled()

    expect(children[0]).toHaveClass('is-active')
    fireEvent.click(children[2])
    expect(defaultProps.onSelect).toHaveBeenCalled()
    expect(children[0]).not.toHaveClass('is-active')
    expect(children[2]).toHaveClass('is-active')
  })
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    const vertical = createMenu(verticalProps)
    expect(vertical).toBeInTheDocument()
    expect(vertical).toHaveClass('menu menu-vertical')
  })
})
