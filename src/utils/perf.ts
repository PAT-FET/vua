export interface Cancelable {
  cancel(): void
}

export function debounce<T extends (...args: any[]) => any>(fn: T, delta: number, context?: any): T & Cancelable {
  let timerId: any
  const ret: T & Cancelable = function () {
    clearTimeout(timerId)
    let args = arguments
    timerId = setTimeout(function () {
      fn.apply(context, args as any)
    }, delta)
  } as (T & Cancelable)
  ret.cancel = function () {
    clearTimeout(timerId)
  }
  return ret
}

export function throttle<T extends (...args: any[]) => any>(fn: T, delta: number, context?: any): T & Cancelable {
  let timerId: any
  const ret: T & Cancelable = function () {
    if (timerId) return
    let args = arguments
    timerId = setTimeout(function () {
      timerId = null
      fn.apply(context, args as any)
    }, delta)
  } as (T & Cancelable)
  ret.cancel = function () {
    clearTimeout(timerId)
    timerId = null
  }
  return ret
}
