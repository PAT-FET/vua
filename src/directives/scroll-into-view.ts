import Vue, { VNodeDirective, VNode } from 'vue'

function scroll (el: HTMLElement, value: boolean, oldValue: boolean) {
  if (value && value !== oldValue) {
    // not support scroll simultaneously， see TimePicker
    // let opt = { behavior: 'smooth', block: 'start', inline: 'nearest' }
    el.scrollIntoView()
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
