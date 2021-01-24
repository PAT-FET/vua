import { UploadFile } from './type'

let uid = 1

const imageTypes: string[] = ['image', 'webp', 'png', 'svg', 'gif', 'jpg', 'jpeg', 'bmp']

export function generateUploadFile (file: File, url?: string): UploadFile {
  let ret: UploadFile = {
    uid: String('__upload_key__' + uid++),
    lastModified: file.lastModified,
    name: file.name,
    size: file.size,
    type: file.type,
    url: url,
    thumbUrl: '',
    status: 'ready',
    percent: 0,
    originFileObj: file,
    response: null,
    error: null
  }
  if (isImageUrl(ret) && (ret.size || 0) < 1024 * 1024 * 10) {
    generateDataUrl(file, (url) => { ret.thumbUrl = url })
  }
  return ret
}

function generateDataUrl (file: File, callback: (url: string) => void): void {
  let reader = new FileReader()
  reader.onloadend = () => {
    callback(String(reader.result))
  }
  reader.readAsDataURL(file)
}

export function isImageUrl (file: UploadFile): boolean {
  if (file.type && imageTypes.includes(file.type)) {
    return true
  }
  const url: string = (file.thumbUrl || file.url) as string
  const extension = extname(url)
  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|bmp)$/i.test(extension)) {
    return true
  } else if (/^data:/.test(url)) {
    // other file types of base64
    return false
  } else if (extension) {
    // other file types which have extension
    return false
  }
  return true
}

function extname (url: string) {
  if (!url) {
    return ''
  }
  const temp = url.split('/')
  const filename = temp[temp.length - 1]
  const filenameWithoutSuffix = filename.split(/#|\?/)[0]
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0]
};
