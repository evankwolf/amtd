import { fireEvent } from '@storybook/testing-library'
import { act, render, waitFor } from '@testing-library/react'
import axios from 'axios'
import {
  beforeEach, describe, it, vi,
} from 'vitest'

import { Upload } from './upload'

import type { UploadProps } from './upload'
import type { IconProps } from '../Icon/icon'
import type { RenderResult } from '@testing-library/react'
import type { Mocked } from 'vitest'

vi.mock('../Icon/icon', async () => ({
  Icon: (props: IconProps) => <span>{props.icon as string}</span>,
}))
vi.mock('axios')

const mockedAxios = axios as Mocked<typeof axios>

const testProps: UploadProps = {
  action: 'testurl.com',
  onSuccess: vi.fn(),
  onChange: vi.fn(),
}

let wrapper: RenderResult
let fileInput: HTMLInputElement
let uploadArea: HTMLElement
const testFile = new File(['xyz'], 'test.png', { type: 'image/png' })

describe('upload component test cases', () => {
  beforeEach(() => {
    wrapper = render(
      <Upload
        {...testProps}
      />,
    )
    fileInput = wrapper.container.querySelector('input[type=file]')!
    uploadArea = wrapper.queryByText('Upload')!
  })
  it('should function normally', async () => {
    const { queryByText } = wrapper
    mockedAxios.post.mockResolvedValue({ data: 'data' })
    expect(uploadArea).toBeInTheDocument()
    expect(fileInput).toBeInTheDocument()
    expect(fileInput).not.toBeVisible()

    act(() => {
      fireEvent.change(fileInput, { target: { files: [testFile] } })
    })
    expect(queryByText('spinner')).toBeInTheDocument()
    await waitFor(() => {
      expect(queryByText('test.png')).toBeInTheDocument()
    })
    expect(queryByText('check-circle')).toBeInTheDocument()
    expect(testProps.onSuccess).toHaveBeenCalledWith('data', testFile)
    expect(testProps.onChange).toHaveBeenCalledWith(testFile)
  })
})
