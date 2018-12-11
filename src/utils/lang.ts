/**
import function from '../components/transitions/expandTransition'
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g
export const camelize = (str: string): string => {
  let temp = str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
  return temp.charAt(0).toLowerCase() + temp.slice(1)
}

/**
 * Capitalize a string.
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /\B([A-Z])/g
export const hyphenate = (str: string): string => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

export function noop (...args: any[]) {}

/**
 * generate a order array from a specific start and end point.
 * @param start
 * @param end
 * @param step
 */
export function range (start: number, end: number, step: number = 1): number[] {
  let arr = Array(end - start + 1).fill(0).map((v, i) => i + start)
  if (step && step > 1) {
    return arr.filter((v, i) => i%step === 0)
  }
  return arr
}
