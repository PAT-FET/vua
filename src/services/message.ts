import Vue from 'vue'
import { MessageConfigOption, MessageOption } from '../components/type'
import { VMessage } from '../components'

let instance: VMessage| null = null

function getInstance (): VMessage {
  if (instance) return instance
  const container = document.createElement('div')
  document.body.append(container)
  instance = new (Vue.extend(VMessage))().$mount(container) as VMessage
  return instance
}

const $message = {
  open (option: Partial<MessageOption>) {
    let inst = getInstance() as any
    return inst.appendMessage(option.message, option.type, option.duration)
  },
  success (message: string, duration?: number) {
    let inst = getInstance() as any
    return inst.appendMessage(message, 'success', duration)
  },
  info (message: string, duration?: number) {
    let inst = getInstance() as any
    return inst.appendMessage(message, 'info', duration)
  },
  warning (message: string, duration?: number) {
    let inst = getInstance() as any
    return inst.appendMessage(message, 'warning', duration)
  },
  error (message: string, duration?: number) {
    let inst = getInstance() as any
    return inst.appendMessage(message, 'error', duration)
  },
  loading (message: string, duration?: number) {
    let inst = getInstance() as any
    return inst.appendMessage(message, 'loading', duration)
  },
  config (option: Partial<MessageConfigOption>) {
    let inst = getInstance() as any
    Object.assign(inst.config, option)
  }
}

export default $message
