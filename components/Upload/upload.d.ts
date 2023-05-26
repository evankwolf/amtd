import React from 'react';
import type { AxiosRequestConfig } from 'axios';
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
    uid: string;
    name: string;
    size: number;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response: any;
    error: any;
}
export interface UploadProps {
    /** request url */
    action: string;
    /** handle function before uploading.
     * If the file does not meet certain requirements, returning false will immediately prevent uploading.
     * @param {File} file
     * @returns {boolean | Promise<File>}
     */
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onChange?: (file: File) => void;
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
    onRemove?: (file: UploadFile) => void;
    /** custom request header */
    header?: {
        [key: string]: any;
    };
    /** file name */
    name?: string;
    /** attached data when sending request */
    data?: {
        [key: string]: any;
    };
    withCredentials?: boolean;
    /** accepted file type */
    accept?: string;
    /** if the component can upload multiple files at once */
    multiple?: boolean;
    /** axios request config */
    moreAxiosConf?: Partial<AxiosRequestConfig<FormData>>;
    /** if files can be uploaded by drag event */
    drag?: boolean;
    /** custom upload trigger */
    children?: React.ReactNode;
}
export declare const Upload: React.FC<UploadProps>;
export default Upload;
