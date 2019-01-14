import { UploadRequestParam } from './type'

export function request (param: UploadRequestParam) {
  let index = 1
  let timer = setInterval(() => {
    if (index > 20) {
      clearInterval(timer)
      param.onSuccess({})
      return
    }
    param.onProgress({ percent: 5 * index })
    if (index > 3 && param.file.type.includes('html')) {
      param.onError(new Error('不支持 html 格式'))
      clearInterval(timer)
      return
    }
    index++
  }, 450)
  return {
    abort: () => {
      clearInterval(timer)
    }
  }
}
