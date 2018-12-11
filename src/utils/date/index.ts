import fecha from './fecha.js'

const format = fecha.format
const parse = fecha.parse

export {
  format,
  parse
}

export function trimDate (date: Date) {
  let newDate = new Date(date)
  newDate.setHours(0)
  newDate.setMinutes(0)
  newDate.setSeconds(0)
  return newDate
}
