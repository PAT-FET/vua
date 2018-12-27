import Vue from 'vue'
import { NotificationConfigOption, NotificationOption } from '../components/type'
import { VNotification } from '../components'

let instance: VNotification | null = null

function getInstance (): VNotification {
  if (instance) return instance
  const container = document.createElement('div')
  document.body.append(container)
  instance = new (Vue.extend(VNotification))().$mount(container) as VNotification
  return instance
}

const $notification = {
  open (option: Partial<NotificationOption>) {
    let inst = getInstance() as any
    return inst.appendNotification(option.title, option.message, option.type, option.key, option.duration, option.placement)
  },
  success (title: string, message: string, key?: string, duration?: number) {
    let inst = getInstance() as any
    return inst.appendNotification(title, message, 'success', key, duration)
  },
  info (title: string, message: string, key?: string, duration?: number) {
    let inst = getInstance() as any
    return inst.appendNotification(title, message, 'info', key, duration)
  },
  warning (title: string, message: string, key?: string, duration?: number) {
    let inst = getInstance() as any
    return inst.appendNotification(title, message, 'warning', key, duration)
  },
  error (title: string, message: string, key?: string, duration?: number) {
    let inst = getInstance() as any
    return inst.appendNotification(title, message, 'error', key, duration)
  },
  config (option: Partial<NotificationConfigOption>) {
    let inst = getInstance() as any
    Object.assign(inst.config, option)
  }
}

export default $notification
