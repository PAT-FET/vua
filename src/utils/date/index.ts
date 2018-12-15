import fecha, { getWeekOfYear } from './fecha.js'

const format = fecha.format
const parse = fecha.parse

export {
  format,
  parse,
  getWeekOfYear
}

export function getDaysOfMonth (date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1).getDate()
}

export function getRecentDayOfWeek (date: Date, dayOfWeek: number, next: boolean = false): Date {
  if (date.getDay() === dayOfWeek) return new Date(date)
  let newDate = new Date(date)
  let interval = 0
  if (!next) {
    interval = -(date.getDay() - dayOfWeek > 0 ? date.getDay() - dayOfWeek : date.getDay() + 7 - dayOfWeek)
  } else {
    interval = dayOfWeek - date.getDay() > 0 ? dayOfWeek - date.getDay() : dayOfWeek + 7 - date.getDay()
  }
  newDate.setDate(date.getDate() + interval)
  return newDate
}

export function isSameCentury (date1: Date | null, date2: Date | null): boolean {
  if (!date1 || !date2) return false
  return Math.floor(date1.getFullYear() / 100) === Math.floor(date2.getFullYear() / 100)
}

export function isSameDecade (date1: Date | null, date2: Date | null): boolean {
  if (!date1 || !date2) return false
  return Math.floor(date1.getFullYear() / 10) === Math.floor(date2.getFullYear() / 10)
}

export function isSameYear (date1: Date | null, date2: Date | null): boolean {
  if (!date1 || !date2) return false
  return date1.getFullYear() === date2.getFullYear()
}

export function isSameMonth (date1: Date | null, date2: Date | null): boolean {
  if (!date1 || !date2) return false
  return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth()
}

export function isSameDay (date1: Date | null, date2: Date | null): boolean {
  return isSameMonth(date1, date2) &&
    (!!date1 && !!date2) &&
    date1.getDate() === date2.getDate()
}

export function isSameWeek (date1: Date | null, date2: Date | null): boolean {
  if (!date1 || !date2) return false
  return isSameYear(date1, date2) && getWeekOfYear(date1) === getWeekOfYear(date2)
}

export function isToday (date: Date): boolean {
  return isSameDay(date, new Date())
}

export function addYear (date: Date, n: number): Date {
  let newDate = new Date(date)
  newDate.setFullYear(date.getFullYear() + n)
  return newDate
}

export function addMonth (date: Date, n: number): Date {
  let newDate = new Date(date)
  newDate.setMonth(date.getMonth() + n)
  return newDate
}

export function addDay (date: Date, n: number): Date {
  let newDate = new Date(date)
  newDate.setDate(date.getDate() + n)
  return newDate
}

export function addWeek (date: Date, n: number): Date {
  return addDay(date, n * 7)
}

export function trimDate (date: Date) {
  let newDate = new Date(date)
  newDate.setHours(0)
  newDate.setMinutes(0)
  newDate.setSeconds(0)
  return newDate
}
