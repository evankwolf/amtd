import type { ChangeEvent } from 'react'
import React, { useState, useRef } from 'react'

import axios from 'axios'

import { Button } from '@/components/Button/button'

import { Dragger } from './dragger'
import { UploadList } from './uploadList'

import type { AxiosRequestConfig } from 'axios'

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
  /** request url */
  action: string
  /** handle function before uploading.
   * If the file does not meet certain requirements, returning false will immediately prevent uploading.
   * @param {File} file
   * @returns {boolean | Promise<File>}
   */
  beforeUpload?: (file: File) => boolean | Promise<File>
  onChange?: (file: File) => void
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
  /** custom request header */
  header?: { [key: string]: any }
  /** file name */
  name?: string
  /** attached data when sending request */
  data?: { [key: string]: any }
  withCredentials?: boolean
  /** accepted file type */
  accept?: string
  /** if the component can upload multiple files at once */
  multiple?: boolean
  /** axios request config */
  moreAxiosConf?: Partial<AxiosRequestConfig<FormData>>
  /** if files can be uploaded by drag event */
  drag?: boolean
  /** custom upload trigger */
  children?: React.ReactNode
}

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    beforeUpload,
    onChange,
    onError,
    onProgress,
    onSuccess,
    header,
    name,
    data,
    withCredentials,
    accept,
    multiple,
    moreAxiosConf,
    drag,
    children,
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
      status: 'ready',
      response: null,
      error: null,
    }

    /** must use function instead of simple rest operators */
    setFileList(((prevList) => ([_file, ...prevList])))

    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...header,
      },
      withCredentials,
      ...moreAxiosConf,
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
        onSuccess(res.data, file)
      }
    }).catch((err) => {
      if (onError) {
        updateFileInfo(_file, { status: 'error' })
        onError(err, file)
      }
    }).finally(() => {
      if (onChange) onChange(file)
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

  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => prevList.filter((item) => item.uid !== file.uid))
  }

  // const renderProgress = () => (
  //   <div>
  //     {fileList && fileList.length >= 1
  //       && Object.keys(fileList[0]).map((k: string) => (
  //         <div key={k}>
  //           <span>{k !== 'raw' && String(fileList[0][k as keyof typeof fileList[0]])}</span>
  //           <hr />
  //         </div>
  //       ))}
  //   </div>
  // )

  return (
    <div className="amt-upload">
      <div
        role="presentation"
        className="amt-upload-input"
        onClick={handleButtonClick}
      >
        {
          drag
            ? (
              <Dragger
                onFile={uploadFiles}
              >
                {children || null}
              </Dragger>
            )
            : children || <Button>Upload</Button>

        }
        {/* {renderProgress()} */}
        <input
          ref={inputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
        />
      </div>
      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
  )
}
