import React from 'react'

import {
  cleanup, fireEvent, render, waitFor,
} from '@testing-library/react'
import {
  beforeEach, describe, it, vi,
} from 'vitest'

import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

import type { MenuProps } from './menu'
import type { RenderResult } from '@testing-library/react'

const defaultProps: MenuProps = {
  defaultIndex: '0',
  onSelect: vi.fn(),
}

const verticalProps: MenuProps = {
  ...defaultProps,
  mode: 'vertical',
}

const appendStyles = (styles: string, el: HTMLElement) => {
  const styleEl = document.createElement('style')
  styleEl.innerHTML = styles
  el.append(styleEl)
}

const createMenu = (props: MenuProps) => {
  const wrapper: RenderResult = render(
    <Menu {...props}>
      <MenuItem>
        abc
      </MenuItem>
      <MenuItem disabled>
        ijk
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
      <SubMenu title="submenu">
        <MenuItem>
          Submenu item 1
        </MenuItem>
        <MenuItem>
          Submenu item 2
        </MenuItem>
      </SubMenu>
    </Menu>,
  )

  return wrapper
}

let wrapper: RenderResult
let el: HTMLElement
let disabledElement: HTMLElement | null
let activeElement: HTMLElement | null

describe('test Menu and MenuItem component.', () => {
  beforeEach(() => {
    wrapper = createMenu(defaultProps)
    el = wrapper.getByTestId('test-menu')
    const style = `
    .viking-submenu {
      display: none;
      list-style: none;
      padding-left: 0;
      white-space: nowrap;
    }
    .viking-submenu.menu-opened {
      display: block;
    }
    `
    appendStyles(style, el)
    disabledElement = el.querySelector('.is-disabled')
    activeElement = el.querySelector('.is-active')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    const children = el.querySelectorAll(':scope > li')

    expect(el).toBeInTheDocument()
    expect(el).toHaveClass('menu')
    expect(children.length).toEqual(4)
    expect(disabledElement).toBeInTheDocument()
    expect(activeElement).toBeInTheDocument()
    expect(disabledElement).toEqual(children[1])
    expect(activeElement).toEqual(children[0])
  })
  it('should change active element and call the right callback when a menu item is clicked', () => {
    const children = el.querySelectorAll(':scope > li')
    expect(disabledElement).toBeInTheDocument()
    expect(disabledElement).toHaveClass('is-disabled')
    fireEvent.click(disabledElement!)
    expect(defaultProps.onSelect).not.toHaveBeenCalled()

    expect(children[0]).toHaveClass('is-active')
    fireEvent.click(children[2])
    expect(defaultProps.onSelect).toHaveBeenCalledWith('2')
    expect(children[0]).not.toHaveClass('is-active')
    expect(children[2]).toHaveClass('is-active')
  })
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    const verticalWrapper = createMenu(verticalProps)
    const vertical = verticalWrapper.getByTestId('test-menu')
    expect(vertical).toBeInTheDocument()
    expect(vertical).toHaveClass('menu menu-vertical')
  })
  it('should show dropdown items when hover on subMenu', async () => {
    const dropdownTrigger = wrapper.getByText('submenu')
    const dropdownEl = wrapper.getByText('Submenu item 1')
    expect(dropdownTrigger).toBeVisible()
    expect(dropdownEl).not.toBeVisible()

    fireEvent.mouseEnter(dropdownTrigger)
    await waitFor(() => {
      expect(dropdownEl).toBeVisible()
    })

    fireEvent.click(dropdownEl)
    expect(defaultProps.onSelect).toHaveBeenCalledWith('3-0')

    fireEvent.mouseLeave(dropdownEl)
    await waitFor(() => {
      expect(dropdownEl).not.toBeVisible()
    })
  })
})
