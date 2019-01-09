export type UploadFileStatus = 'error' | 'success' | 'uploading' | 'removed' | 'ready'

export type UploadType = 'drag' | 'select'

export type UploadListType = 'text' | 'picture' | 'picture-card'

export interface UploadFile {
    uid: string
    lastModified?: number
    name: string
    size?: number
    type?: string
    url?: string
    thumbUrl?: string
    status?: UploadFileStatus
    percent?: number
    originFileObj?: File
    response?: any
    error?: any
}

export interface UploadRequestParam {
    headers?: Headers
    withCredentials: boolean
    file: File
    filename: string
    action: string
    onProgress: (e: any) => void
    onSuccess: (response: any) => void
    onError: (err: Error) => void
}

export interface UploadBeforeFn {
    (file: UploadFile, fileList: UploadFile[]): Promise<File | Blob | any> | false
}

export interface UploadRequest {
    (param: UploadRequestParam): UploadRequestResult
}

export interface UploadRequestResult {
    abort: () => void
}

export interface UploadChangeParam {
    file: UploadFile
    fileList: UploadFile[]
}

export interface UploadProgressFn {
    (e: any, file: UploadFile, fileList: UploadFile[]): void
}

export interface UploadSuccessFn {
    (response: any, file: UploadFile, fileList: UploadFile[]): void
}

export interface UploadErrorFn {
    (err: Error, file: UploadFile, fileList: UploadFile[]): void
}
