export function debounce<T extends (...args: any[]) => any>(fn: T, delta: number, context?: any): T {
  let timerId: any
  return function () {
    clearTimeout(timerId)
    let args = arguments
    timerId = setTimeout(function () {
      fn.apply(context, args)
    }, delta)
  } as T
}
