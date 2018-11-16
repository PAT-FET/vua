export interface Cancelable {
  cancel(): void
}

export function debounce<T extends (...args: any[]) => any>(fn: T, delta: number, context?: any): T & Cancelable {
  let timerId: any
  const ret: T & Cancelable = function () {
    clearTimeout(timerId)
    let args = arguments
    timerId = setTimeout(function () {
      fn.apply(context, args)
    }, delta)
  } as (T & Cancelable)
  ret.cancel = function () {
    clearTimeout(timerId)
  }
  return ret
}
