import type { ChangeEvent } from 'react'
import React, { useState, useRef } from 'react'

import axios from 'axios'

import { Button } from '@/components/Button/button'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string
  name: string
  size: number
  status?: UploadFileStatus
  percent?: number
  raw?: File
  response: any
  error: any
}

export interface UploadProps {
  action: string
  beforeUpload?: (file: File) => boolean | Promise<File>
  onChange?: (data: any, file: File) => void
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
}

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    beforeUpload,
    onChange,
    onError,
    onProgress,
    onSuccess,
  } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleButtonClick = () => {
    inputRef.current!.click()
  }

  const updateFileInfo = (updateFile: UploadFile, updateInfo: Partial<UploadFile>) => {
    setFileList((prevList) => {
      console.log(prevList)
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateInfo }
        }
        return file
      })
    })
  }

  const uploadFile = (file: File) => {
    const _file: UploadFile = {
      uid: String(Date.now()),
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
      response: null,
      error: null,
    }
    setFileList([_file, ...fileList])

    const formData = new FormData()
    formData.append(file.name, file)
    setFileList([_file, ...fileList])
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (e) => {
        const percentage = Math.round((e.loaded * 100) / e.total!) || 0
        if (percentage <= 100) {
          if (onProgress) {
            updateFileInfo(_file, { percent: percentage, status: 'uploading' })
            onProgress(percentage, file)
          }
        }
      },
    }).then((res) => {
      if (onSuccess) {
        updateFileInfo(_file, { percent: 100, status: 'success' })
        onSuccess(res, file)
      }
    }).catch((err) => {
      if (onError) {
        updateFileInfo(_file, { status: 'error' })
        onError(err, file)
      }
    }).finally((...res) => {
      if (onChange) onChange(res, file)
    })
  }

  const uploadFiles = (files: FileList) => {
    const list = Array.from(files)
    list.forEach((file) => {
      if (!beforeUpload) {
        return uploadFile(file)
      }
      const res = beforeUpload(file)
      if (res === true) {
        return uploadFile(file)
      }
      if (res instanceof Promise) {
        res.then(uploadFile)
      }
    })
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files) {
      return
    }
    uploadFiles(files)
  }

  const renderProgress = () => (
    <div>
      {fileList && fileList.length >= 1
        && Object.keys(fileList[0]).map((k: string) => (
          <div key={k}>
            <span>{k !== 'raw' && String(fileList[0][k as keyof typeof fileList[0]])}</span>
            <hr />
          </div>
        ))}
    </div>
  )

  return (
    <div>
      <Button onClick={handleButtonClick}>Upload</Button>
      {renderProgress()}
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  )
}
