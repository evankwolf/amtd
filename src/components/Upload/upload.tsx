import type { ChangeEvent } from 'react'
import React, { useRef } from 'react'

import axios from 'axios'

import { Button } from '@/components/Button/button'

export interface UploadProps {
  action: string
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
}

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    onError,
    onProgress,
    onSuccess,
  } = props
  const inputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    inputRef.current!.click()
  }

  const uploadFile = (file: File) => {
    const formData = new FormData()
    formData.append(file.name, file)
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (e) => {
        const percentage = Math.round((e.loaded * 100) / e.total!) || 0
        // if (percentage < 100) {
        if (onProgress) {
          onProgress(percentage, file)
        }
        // }
      },
    }).then((res) => {
      if (onSuccess) onSuccess(res, file)
    }).catch((err) => {
      if (onError) onError(err, file)
    })
  }

  const uploadFiles = (files: FileList) => {
    const list = Array.from(files)
    list.forEach((file) => uploadFile(file))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files) {
      return
    }
    uploadFiles(files)
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>Upload</Button>
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  )
}
