import Vue, { VNodeDirective, VNode } from 'vue'
import { VSpin } from '@/components'

export default {
  bind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    const div = document.createElement('div')
    el.appendChild(div)
    const spin = new (Vue.extend(VSpin))().$mount(div)
    spin.$props['value'] = binding.value;
    (el as any).__spin = spin
  },

  inserted (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
  },

  update (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    const spin = (el as any).__spin
    if (spin) spin.$props['value'] = binding.value
  },

  unbind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    const spin = (el as any).__spin
    if (spin) spin.$destroy()
  }
}
