import VModalService from '@/components/modal/VModalService.vue'
import Vue from 'vue'
import { ModalOption, ModalItem } from '@/components/modal/modal'

let instance: VModalService| null = null

function getInstance (): VModalService {
  if (instance) return instance
  const container = document.createElement('div')
  document.body.append(container)
  instance = new (Vue.extend(VModalService))().$mount(container) as VModalService
  return instance
}

const $modal = {
  open (option: Partial<ModalOption>) {
    let inst = getInstance() as any
    let defaultOpt: Partial<ModalItem> = {
      visible: true,
      type: 'info'
    }
    let item: ModalItem = Object.assign(defaultOpt, option) as ModalItem

    return new Promise((resolve, reject) => {
      item.reject = reject
      item.resolve = resolve
      inst.modalList.push(item)
    })
  },
  info (option: Partial<ModalOption>) {
    return this.open(Object.assign({ type: 'info' }, option))
  },
  success (option: Partial<ModalOption>) {
    return this.open(Object.assign({ type: 'success' }, option))
  },
  warning (option: Partial<ModalOption>) {
    return this.open(Object.assign({ type: 'warning' }, option))
  },
  error (option: Partial<ModalOption>) {
    return this.open(Object.assign({ type: 'error' }, option))
  },
  confirm (option: Partial<ModalOption>) {
    return this.open(Object.assign({ type: 'confirm' }, option))
  }
}

export default $modal
