import React from 'react'

import classNames from 'classnames'

import type { UploadFile } from './upload'

import { Icon } from '../Icon/icon'
import { Progress } from '../Progress/progress'

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: React.FC<UploadListProps> = (props) => {
  const {
    fileList,
    onRemove,
  } = props

  const cname = (status: string) => classNames('file-status', {
    [`file-status-${status}`]: status,
  })
  console.log('firelist', fileList)
  return (
    <ul className="amt-upload-list">
      {fileList.map((item) => (
        <li className="amt-upload-list-item" key={item.uid}>
          <span className={`file-name file-name-${item.status}`}>
            <Icon icon="file-alt" theme="secondary" />
            {item.name}
          </span>
          <span className={cname(item.status || '')}>
            {(item.status === 'uploading' || item.status === 'ready') && <Icon icon="spinner" spin theme="primary" />}
            {item.status === 'success' && <Icon icon="check-circle" theme="success" />}
            {item.status === 'error' && <Icon icon="times-circle" theme="danger" />}
          </span>
          <span className="file-actions">
            <Icon icon="times" onClick={() => { onRemove(item) }} />
          </span>
          {item.status === 'uploading' && item.percent}
          <Progress
            percent={item.percent || 0}
          />
        </li>
      ))}
    </ul>
  )
}

export default UploadList
