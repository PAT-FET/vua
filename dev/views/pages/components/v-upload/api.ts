
export default {
  props: [
    {
      name: 'accept',
      default: '',
      type: `string`,
      desc: '接受文件类型，原生属性'
    },
    {
      name: 'action',
      default: ``,
      type: `string`,
      desc: '上传地址， 暂不可用'
    },
    {
      name: 'directory',
      default: '',
      type: 'boolean',
      desc: '是否支持文件夹， 原生属性'
    },
    {
      name: 'beforeUpload',
      default: '',
      type: 'UploadBeforeFn',
      desc: '上传文件之前的钩子'
    },
    {
      name: 'customRequest',
      default: '',
      type: 'UploadRequest',
      desc: '自定义请求函数， 由于现阶段尚未实现默认的请求函数， 必须指定该属性才能正常工作'
    },
    {
      name: 'fileList',
      default: '',
      type: 'UploadFile[]',
      desc: '可控文件列表， 如果指定， 请使用sync'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    },
    {
      name: 'listType',
      default: `'text'`,
      type: 'UploadListType',
      desc: '列表类型'
    },
    {
      name: 'multiple',
      default: ``,
      type: 'boolean',
      desc: '是否支持多选文件, 原生属性'
    },
    {
      name: 'name',
      default: `'file'`,
      type: 'string',
      desc: '发到后台的文件参数名， 暂不可用'
    },
    {
      name: 'limit',
      default: ``,
      type: 'number',
      desc: '限制列表数量， 超过将会溢出最前面的文件'
    },
    {
      name: 'showUploadList',
      default: `true`,
      type: '是否展示文件列表',
      desc: '列表类型'
    },
    {
      name: 'progressFn',
      default: ``,
      type: 'UploadProgressFn',
      desc: '上传进度钩子'
    },
    {
      name: 'successFn',
      default: ``,
      type: 'UploadSuccessFn',
      desc: '上传成功钩子'
    },
    {
      name: 'errorFn',
      default: ``,
      type: 'UploadErrorFn',
      desc: '上传失败钩子'
    },
    {
      name: 'removeFn',
      default: ``,
      type: 'UploadRemoveFn',
      desc: '移除文件钩子， 返回false或Promise拒绝将阻止默认行为'
    }
  ],
  events: [
    {
      name: 'preview',
      value: `file: File`,
      desc: '预览事件'
    },
    {
      name: 'change',
      value: `param: UploadChangeParam`,
      desc: '文件状态变化'
    }
  ]
}
