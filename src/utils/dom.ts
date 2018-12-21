export function getRootElement (): HTMLElement {
  return document.documentElement as HTMLElement
}

/**
 * 获取一个1rem所代表px
 */
export function getUnitRem (): number {
  const root = getRootElement()
  if (root) {
    return Number((getComputedStyle(root).fontSize + '').replace('px', ''))
  }
  return 0
}

export function fireEvent (el: HTMLElement, event: string) {
  var evt = document.createEvent('HTMLEvents')
  evt.initEvent(event, true, true)
  el.dispatchEvent(evt)
}
