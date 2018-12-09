import fecha from './fecha.js'

const format = fecha.format
const parse = fecha.parse

export {
  format,
  parse
}

export function trimDate (date: Date) {
  let newDate = new Date(date)
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  return newDate
}
