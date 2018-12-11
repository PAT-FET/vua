import Vue, { VNodeDirective, VNode } from 'vue'

const delayQueue = {
  timer: null,
  list: [] as any[],
  push (el: any) {
    if (this.timer) clearTimeout(this.timer as any)
    this.list.push(el)
    this.timer = setTimeout(() => {
      let list = this.list
      this.list = []
      if (list.length > 1) {
        list.forEach((v: HTMLElement) => {
          v.scrollIntoView()
        })
      } else if (list.length === 1) {
        (list[0] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      }
    }, 50) as any
  }
}

function scroll (el: HTMLElement, value: boolean, oldValue: boolean) {
  if (value && value !== oldValue) {
    // not support scroll simultaneously， see TimePicker
    // let opt = { behavior: 'smooth', block: 'start', inline: 'nearest' }
    // el.scrollIntoView()
    delayQueue.push(el)
  }
}

export default {
  inserted (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    scroll(el, binding.value, binding.oldValue)
  },

  componentUpdated (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    scroll(el, binding.value, binding.oldValue)
  },

  unbind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
  }
}
